"use client"

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Progress } from '../ui/progress';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export function TraditionalFormFlow() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Header with Progress */}
      <div className="px-6 pt-6 pb-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-foreground">New Request</h3>
          <span className="text-muted-foreground text-sm">Step {step} of {totalSteps}</span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {step === 1 && (
          <div className="space-y-5 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="department">What department is this request for?</Label>
              <select 
                id="department"
                className="w-full px-3 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Select a department</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Customer Success</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <select 
                id="priority"
                className="w-full px-3 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Select priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requestor">Requestor Name</Label>
              <Input 
                id="requestor"
                placeholder="Enter your full name"
                className="bg-input-background"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="title">Request Title</Label>
              <Input 
                id="title"
                placeholder="Brief summary of your request"
                className="bg-input-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Describe your request</Label>
              <Textarea 
                id="description"
                placeholder="Provide detailed information about what you need..."
                className="bg-input-background min-h-[120px] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate">Preferred Due Date</Label>
              <Input 
                id="dueDate"
                type="date"
                className="bg-input-background"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="budget">Estimated Budget</Label>
              <Input 
                id="budget"
                placeholder="$0.00"
                className="bg-input-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stakeholders">Key Stakeholders</Label>
              <Input 
                id="stakeholders"
                placeholder="Enter email addresses (comma separated)"
                className="bg-input-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachments">Additional Notes</Label>
              <Textarea 
                id="attachments"
                placeholder="Any additional context or requirements..."
                className="bg-input-background min-h-[100px] resize-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 border-t border-border bg-secondary/30 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        {step < totalSteps ? (
          <Button
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Check className="w-4 h-4" />
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}

