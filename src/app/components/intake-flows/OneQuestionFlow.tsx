"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ChevronRight, Check, Sparkles } from 'lucide-react';

type Question = {
  id: number;
  question: string;
  type: 'textarea' | 'select' | 'input' | 'date';
  options?: string[];
  placeholder?: string;
};

// Simulated AI-generated follow-up questions based on context
const generateFollowUpQuestion = (questionNumber: number): Question => {
  const followUpQuestions = [
    {
      id: 2,
      question: 'Which department or team should handle this request?',
      type: 'select' as const,
      options: ['Engineering', 'Marketing', 'Sales', 'Customer Success', 'Operations', 'Finance']
    },
    {
      id: 3,
      question: 'What is the priority level for this request?',
      type: 'select' as const,
      options: ['Low - Can wait a few weeks', 'Medium - Needed within a week', 'High - Needed within 2-3 days', 'Urgent - Needed immediately']
    },
    {
      id: 4,
      question: 'When would you ideally like this completed?',
      type: 'date' as const,
      placeholder: 'Select a date'
    },
    {
      id: 5,
      question: 'Who else should be notified about this request?',
      type: 'input' as const,
      placeholder: 'Enter email addresses (comma separated)'
    }
  ];

  return followUpQuestions[questionNumber - 2] || followUpQuestions[0];
};

export function OneQuestionFlow() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: 'Please describe your request in as much detail as possible',
      type: 'textarea',
      placeholder: 'Tell us what you need, what problem you\'re trying to solve, and any relevant context...'
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    // Simulate AI thinking and generating next question
    setIsGenerating(true);
    
    setTimeout(() => {
      setDirection(1);
      
      // If we've asked enough questions (4-5 total), complete the flow
      if (questions.length >= 4) {
        setIsComplete(true);
        setIsGenerating(false);
      } else {
        // Generate next AI-powered question
        const nextQuestion = generateFollowUpQuestion(questions.length);
        setQuestions((prev) => [...prev, nextQuestion]);
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsGenerating(false);
      }
    }, 1500); // Simulate AI processing time
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Progress Indicator */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-center gap-2">
        {!isComplete ? (
          <>
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentQuestionIndex
                    ? 'w-8 bg-primary'
                    : idx < currentQuestionIndex
                    ? 'w-1.5 bg-primary/50'
                    : 'w-1.5 bg-border'
                }`}
              />
            ))}
            {isGenerating && (
              <motion.div
                initial={{ width: 6, opacity: 0 }}
                animate={{ width: 6, opacity: 1 }}
                className="h-1.5 rounded-full bg-border"
              />
            )}
          </>
        ) : (
          <div className="flex items-center gap-2 text-primary">
            <Check className="w-5 h-5" />
            <span className="text-sm">All information gathered</span>
          </div>
        )}
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait" initial={false}>
          {isGenerating ? (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative">
                <Sparkles className="w-8 h-8 text-primary" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-8 h-8 text-primary/30" />
                </motion.div>
              </div>
              <p className="text-muted-foreground text-sm">
                Analyzing your response...
              </p>
            </motion.div>
          ) : isComplete ? (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-lg text-center space-y-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-foreground mb-2">Request Complete!</h2>
                <p className="text-muted-foreground">
                  We&apos;ve gathered all the information needed to process your request.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <Check className="w-4 h-4" />
                Submit Request
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full max-w-lg"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {currentQuestionIndex > 0 && (
                    <div className="flex items-center gap-1.5 text-primary/70">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-xs">AI-Generated</span>
                    </div>
                  )}
                </div>
                <h2 className="text-foreground mb-2">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="space-y-4">
                {currentQuestion.type === 'select' && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={handleNext}
                        className="w-full px-5 py-4 bg-input-background hover:bg-accent border border-border rounded-lg transition-colors text-left"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'textarea' && (
                  <div className="space-y-4">
                    <Textarea
                      placeholder={currentQuestion.placeholder}
                      className="bg-input-background min-h-[160px] resize-none"
                      autoFocus
                    />
                    <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
                      Continue <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}

                {currentQuestion.type === 'input' && (
                  <div className="space-y-4">
                    <Input
                      placeholder={currentQuestion.placeholder}
                      className="bg-input-background py-6"
                      autoFocus
                    />
                    <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
                      Continue <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}

                {currentQuestion.type === 'date' && (
                  <div className="space-y-4">
                    <Input
                      type="date"
                      className="bg-input-background py-6"
                      autoFocus
                    />
                    <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
                      Continue <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      {!isComplete && !isGenerating && (
        <div className="px-6 py-4 border-t border-border bg-secondary/30 text-center text-sm text-muted-foreground">
          {currentQuestionIndex === 0 
            ? 'AI will generate follow-up questions based on your response'
            : 'Each question is tailored to your previous answers'}
        </div>
      )}
    </div>
  );
}

