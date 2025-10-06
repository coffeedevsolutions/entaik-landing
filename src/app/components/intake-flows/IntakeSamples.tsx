"use client"

import { TraditionalFormFlow } from './TraditionalFormFlow';
import { OneQuestionFlow } from './OneQuestionFlow';
import { ChatbotFlow } from './ChatbotFlow';
import { CardBasedFlow } from './CardBasedFlow';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { LayoutGrid, MessageSquare, Layers, ListChecks } from 'lucide-react';

export function IntakeSamples() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Intake Flow UI Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare different intake flow styles for your workflow management platform. 
            Each design showcases a unique approach to collecting user input with our AI system approach.
          </p>
        </div>

        {/* Mobile: Tabs View */}
        <div className="lg:hidden">
          <Tabs defaultValue="traditional" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-2 h-auto p-1 mb-4">
              <TabsTrigger value="traditional" className="flex items-center gap-2 py-3">
                <ListChecks className="w-4 h-4" />
                <span className="hidden sm:inline">Traditional</span>
              </TabsTrigger>
              <TabsTrigger value="one-question" className="flex items-center gap-2 py-3">
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">One Question</span>
              </TabsTrigger>
              <TabsTrigger value="chatbot" className="flex items-center gap-2 py-3">
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Chatbot</span>
              </TabsTrigger>
              <TabsTrigger value="card-based" className="flex items-center gap-2 py-3">
                <Layers className="w-4 h-4" />
                <span className="hidden sm:inline">Card-Based</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="traditional" className="pb-8">
              <div className="mb-4 p-4 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-1">Traditional Form Flow</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-step form with standard form fields and no AI driven questions
                </p>
              </div>
              <div className="h-[600px]">
                <TraditionalFormFlow />
              </div>
            </TabsContent>

            <TabsContent value="one-question" className="pb-8">
              <div className="mb-4 p-4 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-1">One-Question-at-a-Time</h3>
                <p className="text-sm text-muted-foreground">
                    Large focused questions with adaptive AI follow-up questions
                </p>
              </div>
              <div className="h-[600px]">
                <OneQuestionFlow />
              </div>
            </TabsContent>

            <TabsContent value="chatbot" className="pb-8">
              <div className="mb-4 p-4 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-1">Conversational / Chatbot</h3>
                <p className="text-sm text-muted-foreground">
                  Chat-style interface with message bubbles
                </p>
              </div>
              <div className="h-[600px]">
                <ChatbotFlow />
              </div>
            </TabsContent>

            <TabsContent value="card-based" className="pb-8">
              <div className="mb-4 p-4 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-1">Hybrid Card-Based Flow</h3>
                <p className="text-sm text-muted-foreground">
                  Expandable cards with visual progress tracking
                </p>
              </div>
              <div className="h-[600px]">
                <CardBasedFlow />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {/* Traditional Form */}
          <div className="flex flex-col">
            <div className="mb-4 p-5 bg-white rounded-lg border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ListChecks className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Traditional Form Flow</h3>
                  <p className="text-sm text-muted-foreground">
                      Multi-step form with standard form fields and no AI driven questions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[600px]">
              <TraditionalFormFlow />
            </div>
          </div>

          {/* One Question */}
          <div className="flex flex-col">
            <div className="mb-4 p-5 bg-white rounded-lg border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <LayoutGrid className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">One-Question-at-a-Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Large focused questions with adaptive AI follow-up questions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[600px]">
              <OneQuestionFlow />
            </div>
          </div>

          {/* Chatbot */}
          <div className="flex flex-col">
            <div className="mb-4 p-5 bg-white rounded-lg border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Conversational / Chatbot</h3>
                  <p className="text-sm text-muted-foreground">
                    Chat-style interface with message bubbles and real-time responses
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[600px]">
              <ChatbotFlow />
            </div>
          </div>

          {/* Card Based */}
          <div className="flex flex-col">
            <div className="mb-4 p-5 bg-white rounded-lg border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Hybrid Card-Based Flow</h3>
                  <p className="text-sm text-muted-foreground">
                    Expandable cards with visual progress and contextual answers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[600px]">
              <CardBasedFlow />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-6 bg-white rounded-lg border border-border shadow-sm">
          <h4 className="text-lg font-semibold text-foreground mb-2">Customizable Design Systems</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
            <div>
              <span className="block text-foreground font-medium mb-1">Colors</span>
              White background, neutral grays, primary accent for CTAs
            </div>
            <div>
              <span className="block text-foreground font-medium mb-1">Typography</span>
              Clean system fonts with clear hierarchy
            </div>
            <div>
              <span className="block text-foreground font-medium mb-1">Spacing</span>
              Generous padding and margins for breathing room
            </div>
            <div>
              <span className="block text-foreground font-medium mb-1">Components</span>
              Rounded corners (10px), subtle shadows, smooth transitions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

