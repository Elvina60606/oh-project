export const columns = [
  {
    accessorKey: "check_up_item",
    header: "項目",
    size: 220,
    minSize: 100,
    meta: {
      align: "start",
    },
  },
  {
    accessorKey: "check_up_data",
    header: "檢查值",
    size: 1,
    minSize: 80,
    meta: {
      align: "center",
    },
  },
  {
    accessorKey: "check_up_unit",
    header: "單位",
    size: 1,
    minSize: 80,
    meta: {
      align: "center",
    },
  },
  {
    accessorKey: "check_up_chart",
    header: "趨勢圖",
    size: 1,
    minSize: 80,
    meta: {
      align: "center",
    },
  },
];

修改column;
套入新的data;
