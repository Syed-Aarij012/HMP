import DashboardListingTableRow from "@/components/common/DashboardListingTableRow";
import type { DashboardCar } from "@/types/cars";

type DashboardListingTableBodyProps = {
  listings: DashboardCar[];
  onDelete?: (id: number) => void;
  onMarkSold?: (id: number) => void;
};

export default function DashboardListingTableBody({
  listings,
  onDelete,
  onMarkSold,
}: DashboardListingTableBodyProps) {
  return (
    <tbody className="tfcl-table-content">
      {listings.map((listing) => (
        <DashboardListingTableRow
          key={listing.id}
          listing={listing}
          onDelete={onDelete}
          onMarkSold={onMarkSold}
        />
      ))}
    </tbody>
  );
}
