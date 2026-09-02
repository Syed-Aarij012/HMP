import ListingDetailScrollspy from "./ListingDetailScrollspy";

type ListingDetailScrollspyBodyProps = {
  showOverview?: boolean;
};

export default function ListingDetailScrollspyBody({
  showOverview = true,
}: ListingDetailScrollspyBodyProps) {
  return <ListingDetailScrollspy showOverview={showOverview} />;
}
