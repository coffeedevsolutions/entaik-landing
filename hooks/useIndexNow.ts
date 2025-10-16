/**
 * React hook for submitting URLs to IndexNow from client-side
 * Use this when content is created, updated, or deleted
 */
'use client';

import { useState } from 'react';

interface UseIndexNowResult {
  submitUrl: (url: string) => Promise<boolean>;
  submitUrls: (urls: string[]) => Promise<boolean>;
  isSubmitting: boolean;
  error: string | null;
}

export function useIndexNow(): UseIndexNowResult {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitUrl = async (url: string): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!data.success) {
        setError('Failed to submit URL to IndexNow');
        return false;
      }

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitUrls = async (urls: string[]): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls }),
      });

      const data = await response.json();

      if (!data.success) {
        setError('Failed to submit URLs to IndexNow');
        return false;
      }

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitUrl,
    submitUrls,
    isSubmitting,
    error,
  };
}

