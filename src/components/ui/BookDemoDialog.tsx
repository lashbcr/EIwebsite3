'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDemoDialog({ open, onOpenChange }: BookDemoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-red-500" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-500">Get Started</span>
          </div>
          <DialogTitle>Book a Demo</DialogTitle>
          <DialogDescription>
            See how Enterprise Insight — powered by KeystoneEA™ — can transform your EA practice.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="p-0 grow h-[70vh]">
          <iframe
            src="https://meetings.hubspot.com/ally200?uuid=4e2a2027-b61f-4365-b8b2-615a82e6e8ad"
            title="Book a Demo"
            className="w-full h-full rounded-b-2xl border-0"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
