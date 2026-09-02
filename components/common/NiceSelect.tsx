"use client";

import { useEffect, useRef, useState } from "react";

export type NiceSelectOption = {
  label: string;
  value: string | number;
};

type NiceSelectProps = {
  options: NiceSelectOption[];
  defaultValue?: string | number;
  value?: string | number;
  className?: string;
  listClassName?: string;
  id?: string;
  onChange?: (value: string | number) => void;
};

function findOption(
  options: NiceSelectOption[],
  value: string | number | undefined,
) {
  if (value === undefined) {
    return options[0];
  }

  return options.find((option) => option.value === value) ?? options[0];
}

export default function NiceSelect({
  options,
  defaultValue,
  value,
  className = "",
  listClassName = "",
  id,
  onChange,
}: NiceSelectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(() =>
    findOption(options, value ?? defaultValue),
  );
  const displayedOption = isControlled ? findOption(options, value) : selected;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: NiceSelectOption) => {
    if (!isControlled) {
      setSelected(option);
    }
    setIsOpen(false);
    onChange?.(option.value);
  };

  const rootClassName = ["nice-select", isOpen ? "open" : "", className]
    .filter(Boolean)
    .join(" ");

  const listClassNames = ["list", listClassName].filter(Boolean).join(" ");

  return (
    <div
      ref={containerRef}
      id={id}
      className={rootClassName}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleToggle();
        }

        if (event.key === "Escape") {
          setIsOpen(false);
        }
      }}
    >
      <span className="current">{displayedOption?.label ?? ""}</span>
      <ul className={listClassNames}>
        {options.map((option) => (
          <li
            key={`${option.value}-${option.label}`}
            data-value={option.value}
            className={`option${
              displayedOption?.value === option.value ? " selected focus" : ""
            }`}
            onClick={(event) => {
              event.stopPropagation();
              handleSelect(option);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
