import { Fragment } from "react";
import { columns } from "../../component/frontend/table/columns";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = () => {
  const data = [
    {
      check_up_category: "一般理學檢查",
      check_up_item: "身高 Body Height",
      check_up_data: 160,
      check_up_unit: "cm",
      check_up_chart: "",
    },
    {
      check_up_category: "一般理學檢查",
      check_up_item: "體重 Body Weight",
      check_up_data: 50,
      check_up_unit: "kg",
      check_up_chart: "",
    },
    {
      check_up_category: "一般理學檢查",
      check_up_item: "身體質量指數 BMI",
      check_up_data: 22,
      check_up_unit: "",
      check_up_chart: "",
    },
    {
      check_up_category: "一般理學檢查",
      check_up_item: "腰圍 Waistline",
      check_up_data: 65,
      check_up_unit: "cm",
      check_up_chart: "",
    },
    {
      check_up_category: "一般理學檢查",
      check_up_item: "收縮壓 Systolic Pressure",
      check_up_data: 125,
      check_up_unit: "mmHg",
      check_up_chart: "",
    },
    {
      check_up_category: "一般理學檢查",
      check_up_item: "舒張壓 Diastolic Pressure",
      check_up_data: 88,
      check_up_unit: "mmHg",
      check_up_chart: "",
    },
    {
      check_up_category: "血液生化檢查",
      check_up_item: "空腹血糖 AC Sugar",
      check_up_data: 50,
      check_up_unit: "mg/dL",
      check_up_chart: "",
    },
    {
      check_up_category: "尿液檢查",
      check_up_item: "尿蛋白 Urine Protein",
      check_up_data: "-",
      check_up_unit: "",
      check_up_chart: "",
    },
  ];

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.check_up_category]) {
      acc[item.check_up_category] = [];
    }
    acc[item.check_up_category].push(item);
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
