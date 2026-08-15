interface DataTableProps {
  headers: string[];
  rows: string[][];
  boldColumns?: number[];
  highlightLastRow?: boolean;
}

export function DataTable({
  headers,
  rows,
  boldColumns = [],
  highlightLastRow = false,
}: DataTableProps) {
  return (
    <div className="card-elevated overflow-hidden rounded-xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[15px]">
          <thead>
            <tr className="bg-navy text-navy-foreground">
              {headers.map((h) => (
                <th key={h} className="px-5 py-4 text-sm font-semibold tracking-wide uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={
                  highlightLastRow && i === rows.length - 1
                    ? "bg-secondary font-bold"
                    : i % 2 === 1
                      ? "bg-muted/60"
                      : ""
                }
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border-t border-border px-5 py-4 align-top ${
                      boldColumns.includes(j) ? "font-semibold text-primary" : "text-foreground/80"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
