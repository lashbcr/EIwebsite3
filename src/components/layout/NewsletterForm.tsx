'use client';

import { useState } from 'react';
import { SubscribeDialog } from '@/components/ui/SubscribeDialog';

export function NewsletterForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="h-10 px-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-colors"
      >
        Subscribe
      </button>
      <SubscribeDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
