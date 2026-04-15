import { fieldData } from "./fieldData";

export const transformToTableData = (apiData) => {
  const { measurements } = apiData;

  return Object.entries(measurements)
    .map(([group, items]) =>
      Object.entries(items).map(([key, value]) => {
        const meta = fieldData[key];

        return {
          category: meta?.category || group,
          key,
          label: meta?.label || key,
          value,
          unit: meta?.unit || "",
        };
      }),
    )
    .flat();
};
