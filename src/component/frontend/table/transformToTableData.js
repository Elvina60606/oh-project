import { fieldMeta } from "./fieldMeta";

export const transformToTableData = (apiData) => {
  const result = [];

  const { measurements } = apiData;

  Object.entries(measurements).forEach(([group, items]) => {
    Object.entries(items).forEach(([key, value]) => {
      const meta = fieldMeta[key];

      result.push({
        category: meta?.category || group,
        key,
        label: meta?.label || key,
        value,
        unit: meta?.unit || "",
      });
    });
  });

  return result;
};
