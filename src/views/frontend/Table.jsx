import { Fragment } from "react";
import { columns } from "../../component/frontend/table/columns";
import { transformToTableData } from "../../component/frontend/table/transformToTableData";
import fakeData from "../../data//fakeData.json";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = () => {
  const data = transformToTableData(fakeData);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    columnResizeMode: "onChange",
  });

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-6">
          <table
            className="table table-bordered"
            style={{ tableLayout: "fixed", width: "100%" }}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="table-success text-center">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{
                        width: header.getSize(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {Object.entries(groupedData).map(([category, items]) => (
                <Fragment key={category}>
                  <tr className="table-light">
                    <td colSpan={columns.length}>{category}</td>
                  </tr>

                  {items.map((rowData) => {
                    // 🔥 用 data 找對應 row
                    const row = table
                      .getRowModel()
                      .rows.find((r) => r.original === rowData);

                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            style={{
                              width: cell.column.getSize(),
                              textAlign:
                                cell.column.columnDef.meta?.align || "center",
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
