"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Progress } from '../ui/progress';
import { Check, ChevronUp } from 'lucide-react';

type CardState = 'pending' | 'active' | 'completed';

type QuestionCard = {
  id: number;
  question: string;
  type: 'select' | 'input' | 'textarea' | 'date';
  options?: string[];
  placeholder?: string;
  state: CardState;
  answer?: string;
};

export function CardBasedFlow() {
  const [cards, setCards] = useState<QuestionCard[]>([
    {
      id: 1,
      question: 'What department is this request for?',
      type: 'select',
      options: ['Engineering', 'Marketing', 'Sales', 'Customer Success'],
      state: 'active'
    },
    {
      id: 2,
      question: 'Describe your request',
      type: 'textarea',
      placeholder: 'Provide detailed information...',
      state: 'pending'
    },
    {
      id: 3,
      question: 'When do you need this completed?',
      type: 'date',
      state: 'pending'
    },
    {
      id: 4,
      question: 'Who should be notified?',
      type: 'input',
      placeholder: 'Enter email addresses',
      state: 'pending'
    }
  ]);

  const completedCount = cards.filter((c) => c.state === 'completed').length;
  const progress = (completedCount / cards.length) * 100;

  const handleAnswer = (cardId: number, answer: string) => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.id === cardId) {
          return { ...card, answer, state: 'completed' as CardState };
        }
        if (card.id === cardId + 1) {
          return { ...card, state: 'active' as CardState };
        }
        return card;
      })
    );
  };

  const toggleCard = (cardId: number) => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.id === cardId && card.state === 'completed') {
          return { ...card, state: 'active' as CardState };
        }
        return card;
      })
    );
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Header with Progress */}
      <div className="px-6 py-5 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-foreground">New Request</h3>
          <span className="text-sm text-muted-foreground">
            {completedCount} of {cards.length} completed
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`border rounded-xl overflow-hidden transition-all ${
              card.state === 'active'
                ? 'border-primary shadow-md'
                : card.state === 'completed'
                ? 'border-border bg-secondary/20'
                : 'border-border bg-muted/30'
            }`}
          >
            {/* Card Header */}
            <div
              className={`px-5 py-4 flex items-center justify-between ${
                card.state === 'completed' ? 'cursor-pointer' : ''
              }`}
              onClick={() => card.state === 'completed' && toggleCard(card.id)}
            >
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    card.state === 'completed'
                      ? 'bg-primary'
                      : card.state === 'active'
                      ? 'bg-primary/20 border-2 border-primary'
                      : 'bg-muted border-2 border-border'
                  }`}
                >
                  {card.state === 'completed' && (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  )}
                  {card.state === 'active' && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </div>
                <p
                  className={
                    card.state === 'pending'
                      ? 'text-muted-foreground'
                      : 'text-foreground'
                  }
                >
                  {card.question}
                </p>
              </div>
              {card.state === 'completed' && (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              )}
            </div>

            {/* Card Content */}
            <AnimatePresence>
              {card.state === 'active' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-border"
                >
                  <div className="px-5 py-4 space-y-4">
                    {card.type === 'select' && (
                      <div className="space-y-2">
                        {card.options?.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAnswer(card.id, option)}
                            className="w-full px-4 py-3 bg-input-background hover:bg-accent border border-border rounded-lg transition-colors text-left text-sm"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {card.type === 'textarea' && (
                      <>
                        <Textarea
                          placeholder={card.placeholder}
                          className="bg-input-background min-h-[100px] resize-none"
                        />
                        <Button
                          onClick={() => handleAnswer(card.id, 'User response')}
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          Continue
                        </Button>
                      </>
                    )}

                    {card.type === 'input' && (
                      <>
                        <Input
                          placeholder={card.placeholder}
                          className="bg-input-background"
                        />
                        <Button
                          onClick={() => handleAnswer(card.id, 'User response')}
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          Continue
                        </Button>
                      </>
                    )}

                    {card.type === 'date' && (
                      <>
                        <Input type="date" className="bg-input-background" />
                        <Button
                          onClick={() => handleAnswer(card.id, 'User response')}
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          Continue
                        </Button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Completed Card Preview */}
            {card.state === 'completed' && card.answer && (
              <div className="px-5 py-3 bg-secondary/30 border-t border-border">
                <p className="text-sm text-muted-foreground">{card.answer}</p>
              </div>
            )}
          </motion.div>
        ))}

        {completedCount === cards.length && (
          <Button className="w-full bg-primary hover:bg-primary/90 py-6">
            <Check className="w-4 h-4 mr-2" />
            Submit Request
          </Button>
        )}
      </div>
    </div>
  );
}

