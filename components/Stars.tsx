export default function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block h-3.5 w-3.5">
            <svg viewBox="0 0 20 20" className="absolute inset-0 h-full w-full text-border" fill="currentColor">
              <path d="M10 1.5l2.6 5.46 5.9.78-4.3 4.2 1.07 5.96L10 15.9l-5.27 2.9 1.07-5.96-4.3-4.2 5.9-.78L10 1.5z" />
            </svg>
            <span
              className="absolute inset-0 overflow-hidden text-copper"
              style={{ width: `${fill * 100}%` }}
            >
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M10 1.5l2.6 5.46 5.9.78-4.3 4.2 1.07 5.96L10 15.9l-5.27 2.9 1.07-5.96-4.3-4.2 5.9-.78L10 1.5z" />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}
