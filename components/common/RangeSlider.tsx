"use client";

import { useState } from "react";
import Slider from "rc-slider";
import { formatSliderValue } from "@/lib/formatSliderValue";
import "rc-slider/assets/index.css";

type RangeSliderProps = {
  label?: string;
  min: number;
  max: number;
  defaultValue?: [number, number];
  value?: [number, number];
  step?: number;
  suffix?: string;
  thousand?: "," | "." | "";
  className?: string;
  widgetClassName?: string;
  minInputName?: string;
  maxInputName?: string;
  onChange?: (range: [number, number]) => void;
};

export default function RangeSlider({
  label = "",
  min,
  max,
  defaultValue,
  value,
  step = 1,
  suffix = "",
  thousand = ",",
  className = "",
  widgetClassName = "",
  minInputName = "min-value",
  maxInputName = "max-value",
  onChange,
}: RangeSliderProps) {
  const isControlled = value !== undefined;
  const initialRange = value ?? defaultValue ?? [min, max];
  const [internalRange, setInternalRange] =
    useState<[number, number]>(initialRange);
  const range = isControlled ? value : internalRange;

  const formatOptions = { suffix, thousand };

  const handleChange = (value: number | number[]) => {
    if (!Array.isArray(value) || value.length !== 2) {
      return;
    }

    const nextRange: [number, number] = [value[0], value[1]];
    if (!isControlled) {
      setInternalRange(nextRange);
    }
    onChange?.(nextRange);
  };

  const wrapperClassName = [
    widgetClassName,
    "widget-price",
    "range-slider-wrapper",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      <div className="caption flex-two">
        <div>
          <span className="slider-range-value">
            {label}
            {formatSliderValue(range[0], formatOptions)}
          </span>
          <span className="delimiter"> - </span>
          <span className="slider-range-value">
            {formatSliderValue(range[1], formatOptions)}
          </span>
        </div>
      </div>
      <div className="slider-target">
        <Slider
          range
          min={min}
          max={max}
          step={step}
          value={range}
          onChange={handleChange}
          allowCross={false}
        />
      </div>
      <div className="slider-labels">
        <div>
          <input
            type="hidden"
            className="min-input"
            name={minInputName}
            value={range[0]}
            readOnly
          />
          <input
            type="hidden"
            className="max-input"
            name={maxInputName}
            value={range[1]}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
