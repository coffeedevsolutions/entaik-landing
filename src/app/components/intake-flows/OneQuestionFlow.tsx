"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ChevronRight } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'What department is this request for?',
    type: 'select',
    options: ['Engineering', 'Marketing', 'Sales', 'Customer Success']
  },
  {
    id: 2,
    question: 'Describe your request',
    type: 'textarea',
    placeholder: 'Tell us what you need in your own words...'
  },
  {
    id: 3,
    question: 'When do you need this completed?',
    type: 'date',
    placeholder: 'Select a date'
  },
  {
    id: 4,
    question: 'Who should we notify when complete?',
    type: 'input',
    placeholder: 'Enter email address'
  }
];

export function OneQuestionFlow() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const question = questions[currentQuestion];

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Progress Dots */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-center gap-2">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentQuestion
                ? 'w-8 bg-primary'
                : idx < currentQuestion
                ? 'w-1.5 bg-primary/50'
                : 'w-1.5 bg-border'
            }`}
          />
        ))}
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full max-w-lg"
          >
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-sm mb-3">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <h2 className="text-foreground mb-2">
                {question.question}
              </h2>
            </div>

            <div className="space-y-4">
              {question.type === 'select' && (
                <div className="space-y-3">
                  {question.options?.map((option) => (
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

              {question.type === 'textarea' && (
                <div className="space-y-4">
                  <Textarea
                    placeholder={question.placeholder}
                    className="bg-input-background min-h-[140px] resize-none"
                    autoFocus
                  />
                  <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
                    Continue <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {question.type === 'input' && (
                <div className="space-y-4">
                  <Input
                    placeholder={question.placeholder}
                    className="bg-input-background py-6"
                    autoFocus
                  />
                  <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
                    Continue <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {question.type === 'date' && (
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
        </AnimatePresence>
      </div>

      {/* Footer */}
      {currentQuestion === questions.length - 1 && (
        <div className="px-6 py-4 border-t border-border bg-secondary/30 text-center text-sm text-muted-foreground">
          Press Enter or click Continue to submit
        </div>
      )}
    </div>
  );
}

