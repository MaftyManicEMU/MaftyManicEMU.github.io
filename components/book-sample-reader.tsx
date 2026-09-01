'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type BookSampleReaderProps = {
  firstPage: number;
  lastPage: number;
  slug: string;
  title: string;
};

export function BookSampleReader({
  firstPage,
  lastPage,
  slug,
  title,
}: BookSampleReaderProps) {
  const [open, setOpen] = React.useState(false);
  const [spreadIndex, setSpreadIndex] = React.useState(0);
  const spreadCount = Math.ceil((lastPage - firstPage + 1) / 2);
  const leftPage = firstPage + spreadIndex * 2;
  const rightPage = Math.min(leftPage + 1, lastPage);

  const showPrevious = React.useCallback(() => {
    setSpreadIndex((current) => Math.max(0, current - 1));
  }, []);

  const showNext = React.useCallback(() => {
    setSpreadIndex((current) => Math.min(spreadCount - 1, current + 1));
  }, [spreadCount]);

  React.useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, showNext, showPrevious]);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (nextOpen) setSpreadIndex(0);
  }

  const visiblePages =
    leftPage === rightPage ? [leftPage] : [leftPage, rightPage];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className="book-cta"
        aria-label={`Read a sample of ${title}`}
      >
        Read sample
      </DialogTrigger>
      <DialogContent
        className="sample-reader-dialog"
        overlayClassName="sample-reader-overlay"
        showCloseButton={false}
      >
        <header className="sample-reader-header">
          <div>
            <p className="sample-reader-eyebrow">Reading Sample</p>
            <DialogTitle className="sample-reader-title">{title}</DialogTitle>
            <DialogDescription className="sample-reader-description">
              Pages {firstPage}-{lastPage}
            </DialogDescription>
          </div>
          <DialogClose
            className="sample-reader-close"
            aria-label={`Close ${title} sample`}
          >
            <X aria-hidden="true" />
          </DialogClose>
        </header>

        <div className="sample-reader-stage">
          <div
            className="sample-reader-spread"
            aria-label={`${title}, spread ${spreadIndex + 1} of ${spreadCount}`}
          >
            {visiblePages.map((page) => (
              <figure className="sample-reader-page" key={page}>
                <img
                  src={`/assets/samples/${slug}/page-${page}.png`}
                  alt={`${title} sample page ${page}`}
                  draggable="false"
                />
                <figcaption className="sr-only">
                  {title}, page {page}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <footer className="sample-reader-controls">
          <button
            type="button"
            onClick={showPrevious}
            disabled={spreadIndex === 0}
            aria-label="Previous two pages"
          >
            <ChevronLeft aria-hidden="true" />
            <span>Previous spread</span>
          </button>
          <p aria-live="polite">
            Spread {spreadIndex + 1} of {spreadCount}
          </p>
          <button
            type="button"
            onClick={showNext}
            disabled={spreadIndex === spreadCount - 1}
            aria-label="Next two pages"
          >
            <span>Next spread</span>
            <ChevronRight aria-hidden="true" />
          </button>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
