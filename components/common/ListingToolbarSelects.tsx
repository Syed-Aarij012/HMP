import NiceSelect, { type NiceSelectOption } from "@/components/common/NiceSelect";
import {
  LISTING_SHOW_OPTIONS,
  LISTING_SORT_OPTIONS,
} from "@/data/niceSelectOptions";

const SORT_VALUE_MAP: Record<string, string> = {
  "": "Sort by (Defaut)",
  "low-to-high": "Low to high",
  "high-to-low": "High to low",
};

const SORT_OPTION_MAP: Record<string, string> = {
  "Sort by (Defaut)": "",
  "Low to high": "low-to-high",
  "High to low": "high-to-low",
};

type ListingToolbarSelectsProps = {
  showDefault?: number;
  showSelect?: boolean;
  showOptions?: NiceSelectOption[];
  itemPerPage?: number;
  sortingOption?: string;
  onItemPerPageChange?: (count: number) => void;
  onSortingChange?: (option: string) => void;
};

export default function ListingToolbarSelects({
  showDefault = 50,
  showSelect = true,
  showOptions = LISTING_SHOW_OPTIONS,
  itemPerPage,
  sortingOption,
  onItemPerPageChange,
  onSortingChange,
}: ListingToolbarSelectsProps) {
  const currentShow = itemPerPage ?? showDefault;
  const currentSort =
    SORT_OPTION_MAP[sortingOption ?? "Sort by (Defaut)"] ?? "";

  return (
    <div className="wd-find-select flex gap-10">
      {showSelect ? (
        <div className="group-select">
          <NiceSelect
            options={showOptions}
            value={currentShow}
            listClassName="style"
            onChange={(value) => onItemPerPageChange?.(Number(value))}
          />
        </div>
      ) : null}
      <div className="group-select">
        <NiceSelect
          options={LISTING_SORT_OPTIONS}
          value={currentSort}
          listClassName="style"
          onChange={(value) =>
            onSortingChange?.(SORT_VALUE_MAP[String(value)] ?? "Sort by (Defaut)")
          }
        />
      </div>
    </div>
  );
}
