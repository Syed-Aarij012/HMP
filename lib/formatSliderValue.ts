type FormatSliderValueOptions = {
  suffix?: string;
  thousand?: "," | "." | "";
};

export function formatSliderValue(
  value: number,
  { suffix = "", thousand = "," }: FormatSliderValueOptions = {},
) {
  let formatted: string;

  if (thousand === ",") {
    formatted = value.toLocaleString("en-US");
  } else if (thousand === ".") {
    formatted = value.toLocaleString("de-DE");
  } else {
    formatted = String(value);
  }

  return `${formatted}${suffix}`;
}
