import Image from "next/image";
import Link from "next/link";
import { DASHBOARD_LISTING_STATUS_META } from "@/data/dashboardListings";
import { formatCarPrice, getCarHref } from "@/data/cars";
import type { DashboardCar } from "@/types/cars";

type DashboardListingTableRowProps = {
  listing: DashboardCar;
  onDelete?: (id: number) => void;
  onMarkSold?: (id: number) => void;
};

const DEFAULT_LISTING_DESCRIPTION =
  "1st owned, automatic transmission, Apple Carplay...";

export default function DashboardListingTableRow({
  listing,
  onDelete,
  onMarkSold,
}: DashboardListingTableRowProps) {
  const detailHref = getCarHref(listing);
  const statusMeta = DASHBOARD_LISTING_STATUS_META[listing.dashboardStatus];

  return (
    <tr>
      <td className="column-listing">
        <div className="tfcl-listing-product">
          <Link href={detailHref}>
            <Image
              src={listing.dashboardImage}
              alt={listing.title}
              width={168}
              height={95}
            />
          </Link>
          <div className="tfcl-listing-summary">
            <h4 className="tfcl-listing-title">
              <Link target="_blank" href={detailHref}>
                {listing.title}
              </Link>
            </h4>
            <div className="features-text">
              {listing.description ?? DEFAULT_LISTING_DESCRIPTION}
            </div>
            <div className="price">
              <div className="inner tfcl-listing-price">
                {formatCarPrice(listing.price)}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="column-status">
        <span
          className={`tfcl-listing-status ${statusMeta.className}`}
        >
          {statusMeta.label}
        </span>
      </td>
      <td className="column-date">
        <div className="tfcl-listing-date">{listing.postingDate}</div>
      </td>
      <td className="column-controller">
        <div className="inner-controller">
          <span className="icon">
            <Image
              src="/assets/images/dashboard/pen.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>
          <a href="#" className="btn-action tfcl-dashboard-action-edit">
            Edit
          </a>
        </div>
        <div className="inner-controller">
          <span className="icon">
            <Image
              src="/assets/images/dashboard/hide.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>
          <button
            type="button"
            className="btn-action tfcl-dashboard-action-edit"
            onClick={() => onMarkSold?.(listing.id)}
            disabled={listing.dashboardStatus === "sold"}
          >
            Sold
          </button>
        </div>
        <div className="inner-controller">
          <span className="icon">
            <Image
              src="/assets/images/dashboard/trash.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>
          <button
            type="button"
            className="btn-action tfcl-dashboard-action-delete"
            onClick={() => onDelete?.(listing.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
