import ListingDetailScrollspy from "./ListingDetailScrollspy";

type ListingDetailScrollspyColumnProps = {
  showOverview?: boolean;
};

export default function ListingDetailScrollspyColumn({
  showOverview = true,
}: ListingDetailScrollspyColumnProps) {
  return <ListingDetailScrollspy showOverview={showOverview} />;
}
