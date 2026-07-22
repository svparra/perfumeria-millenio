export default function RatingStars({
  rating,
  reviewCount,
  className = "",
}: {
  rating: number;
  reviewCount: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z"
              fill={i < Math.round(rating) ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={i < Math.round(rating) ? 0 : 1}
              opacity={i < Math.round(rating) ? 1 : 0.35}
            />
          </svg>
        ))}
      </div>
      <span className="text-[11px] text-ink/50">
        {rating.toFixed(1)} · {reviewCount} reseñas
      </span>
    </div>
  );
}
