import NiceSelect from "@/components/common/NiceSelect";
import {
  DEALER_BRAND_OPTIONS,
  DEALER_LOCATION_OPTIONS,
  DEALER_SHOW_OPTIONS,
  DEALER_SORT_OPTIONS,
} from "@/data/niceSelectOptions";
import type { DealerSortOption } from "@/types/dealers";

type DealerListingToolbarProps = {
  location: string;
  brand: string;
  perPage: number;
  sortBy: DealerSortOption;
  onLocationChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onPerPageChange: (value: number) => void;
  onSortChange: (value: DealerSortOption) => void;
};

export default function DealerListingToolbar({
  location,
  brand,
  perPage,
  sortBy,
  onLocationChange,
  onBrandChange,
  onPerPageChange,
  onSortChange,
}: DealerListingToolbarProps) {
  return (
    <div className="group-sort-filter flex-wrap">
      <NiceSelect
        options={DEALER_LOCATION_OPTIONS}
        value={location}
        onChange={(value) => onLocationChange(String(value))}
      />
      <NiceSelect
        options={DEALER_BRAND_OPTIONS}
        value={brand}
        onChange={(value) => onBrandChange(String(value))}
      />
      <NiceSelect
        options={DEALER_SHOW_OPTIONS}
        value={perPage}
        onChange={(value) => onPerPageChange(Number(value))}
      />
      <NiceSelect
        options={DEALER_SORT_OPTIONS}
        value={sortBy}
        onChange={(value) => onSortChange(value as DealerSortOption)}
      />
    </div>
  );
}
