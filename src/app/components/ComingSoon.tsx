"use client";

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 z-[200] bg-cream flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-md">
        <p className="text-[10px] tracking-[0.3em] uppercase text-terracotta font-medium mb-8">
          Bientôt disponible
        </p>
        <h1
          className="font-serif font-light text-ink leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)" }}
        >
          Angèle<br />Ferrere
        </h1>
        <div className="w-12 h-px bg-ink/20 mx-auto mb-8" />
        <p className="font-serif italic text-ink/50 text-lg">
          Le site est en cours de construction.
        </p>
      </div>
    </div>
  );
}
