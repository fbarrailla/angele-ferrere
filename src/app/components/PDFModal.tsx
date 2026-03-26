"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PDFModalProps {
  coverSrc: string;
  coverAlt: string;
  coverWidth: number;
  coverHeight: number;
  pdfSrc: string;
  title: string;
}

export default function PDFModal({
  coverSrc,
  coverAlt,
  coverWidth,
  coverHeight,
  pdfSrc,
  title,
}: PDFModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Clickable cover */}
      <button
        onClick={() => setOpen(true)}
        className="shrink-0 group cursor-pointer text-left"
        aria-label={`Ouvrir le PDF : ${title}`}
      >
        <div className="relative">
          <Image
            src={coverSrc}
            alt={coverAlt}
            width={coverWidth}
            height={coverHeight}
            className="w-[160px] md:w-[200px] h-auto shadow-md group-hover:shadow-lg transition-shadow duration-300"
          />
          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cream text-ink text-[10px] tracking-[0.15em] uppercase font-medium px-3 py-1.5">
              Lire
            </span>
          </div>
        </div>
      </button>

      {/* Fullscreen modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-ink/80 flex items-center justify-center p-4 md:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-full max-h-[90vh] bg-cream flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink/10 shrink-0">
              <p className="font-serif italic text-sm text-ink/60 truncate pr-4">{title}</p>
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 text-ink/40 hover:text-ink transition-colors duration-200 text-[11px] tracking-[0.2em] uppercase font-medium"
                aria-label="Fermer"
              >
                Fermer ✕
              </button>
            </div>

            {/* PDF iframe */}
            <iframe
              src={pdfSrc}
              className="flex-1 w-full"
              title={title}
            />
          </div>
        </div>
      )}
    </>
  );
}
