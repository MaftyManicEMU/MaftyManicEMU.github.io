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

const MOBILE_SAMPLE_QUERY = '(max-width: 640px)';

function subscribeToMobileSampleView(callback: () => void) {
  const query = window.matchMedia(MOBILE_SAMPLE_QUERY);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

function getMobileSampleView() {
  return window.matchMedia(MOBILE_SAMPLE_QUERY).matches;
}

function getServerMobileSampleView() {
  return false;
}

export function BookSampleReader({
  firstPage,
  lastPage,
  slug,
  title,
}: BookSampleReaderProps) {
  const [open, setOpen] = React.useState(false);
  const [pageOffset, setPageOffset] = React.useState(0);
  const isSinglePage = React.useSyncExternalStore(
    subscribeToMobileSampleView,
    getMobileSampleView,
    getServerMobileSampleView,
  );
  const totalPages = lastPage - firstPage + 1;
  const pagesPerView = isSinglePage ? 1 : 2;
  const viewCount = Math.ceil(totalPages / pagesPerView);
  const viewIndex = Math.min(
    Math.floor(pageOffset / pagesPerView),
    viewCount - 1,
  );
  const firstVisiblePage = firstPage + viewIndex * pagesPerView;
  const visiblePages = Array.from(
    { length: Math.min(pagesPerView, lastPage - firstVisiblePage + 1) },
    (_, index) => firstVisiblePage + index,
  );
  const viewLabel = isSinglePage ? 'Page' : 'Spread';

  const showPrevious = React.useCallback(() => {
    setPageOffset((current) => {
      const currentView = Math.floor(current / pagesPerView);
      return Math.max(0, currentView - 1) * pagesPerView;
    });
  }, [pagesPerView]);

  const showNext = React.useCallback(() => {
    setPageOffset((current) => {
      const currentView = Math.floor(current / pagesPerView);
      return Math.min(viewCount - 1, currentView + 1) * pagesPerView;
    });
  }, [pagesPerView, viewCount]);

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
    if (nextOpen) setPageOffset(0);
  }

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
            role="group"
            aria-label={`${title}, ${viewLabel.toLowerCase()} ${viewIndex + 1} of ${viewCount}`}
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
            disabled={viewIndex === 0}
            aria-label={`Previous ${viewLabel.toLowerCase()}`}
          >
            <ChevronLeft aria-hidden="true" />
            <span>Previous {viewLabel.toLowerCase()}</span>
          </button>
          <p aria-live="polite">
            {viewLabel} {viewIndex + 1} of {viewCount}
          </p>
          <button
            type="button"
            onClick={showNext}
            disabled={viewIndex === viewCount - 1}
            aria-label={`Next ${viewLabel.toLowerCase()}`}
          >
            <span>Next {viewLabel.toLowerCase()}</span>
            <ChevronRight aria-hidden="true" />
          </button>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
