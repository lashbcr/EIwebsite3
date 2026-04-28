'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface SubscribeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscribeDialog({ open, onOpenChange }: SubscribeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-red-500" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-500">Newsletter</span>
          </div>
          <DialogTitle>Stay in the loop</DialogTitle>
          <DialogDescription>
            Get the latest insights on enterprise architecture, AI tooling, and the EA profession.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="p-0 grow h-[60vh]">
          <iframe
            src="https://share.hsforms.com/1g45I9EXfR2SY8tI5-y4n5gqhfy4"
            title="Newsletter Subscribe"
            className="w-full h-full rounded-b-2xl border-0"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
