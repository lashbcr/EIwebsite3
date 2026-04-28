'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';

interface BookDemoButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function BookDemoButton({ size, className, children = 'Book a Demo' }: BookDemoButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <BookDemoDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
