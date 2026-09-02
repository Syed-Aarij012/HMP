"use client";

import { useState } from "react";

type ReviewRatingInputProps = {
  value: number;
  onChange: (rating: number) => void;
};

const STARS = [1, 2, 3, 4, 5] as const;

export default function ReviewRatingInput({
  value,
  onChange,
}: ReviewRatingInputProps) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const displayRating = hoveredRating || value;

  return (
    <div
      className="rating-container icon flex gap-8"
      onMouseLeave={() => setHoveredRating(0)}
    >
      {STARS.map((star) => (
        <i
          key={star}
          className={`icon-carus-star${star <= displayRating ? " active" : ""}`}
          data-value={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onChange(star);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Rate ${star} out of 5`}
        />
      ))}
    </div>
  );
}
