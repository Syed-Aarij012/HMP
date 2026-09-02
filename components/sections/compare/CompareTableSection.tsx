import type { CompareTableRowConfig } from "@/lib/compareUtils";
import type { Car } from "@/types/cars";

type CompareTableSectionProps = {
  title: string;
  cars: Car[];
  rows: CompareTableRowConfig[];
};

export default function CompareTableSection({
  title,
  cars,
  rows,
}: CompareTableSectionProps) {
  return (
    <div className="tf-compare-overview compare-table">
      <h3 className="title-table">{title}</h3>
      {rows.map((row) => (
        <div key={row.label}>
          <div className="title-tr">{row.label}</div>
          <ul className="group-tr">
            {cars.map((car) => (
              <li key={`${row.label}-${car.id}`}>{row.getValue(car)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
