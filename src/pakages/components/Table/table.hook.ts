import { useState } from "react";
import { DataList, TableColumn, TableConfg } from "./table.entity";

export const useTableHook = () => {
  const [dataList, setDataList] = useState<DataList | null>(null);
  const [tableConfig, setTableConfig] = useState<TableConfg>(new TableConfg());
  const handler = {
    setDataList: (rawData: any[]) => {
      const dataList = new DataList(rawData);
      setDataList(dataList);
      tableConfig.setColumnsFromData(dataList.dataListRows[0]);
    },
    setTotalCount: (total: number) => {
      tableConfig.total = total;
      setTableConfig(tableConfig.clone());
    },
  };
  return { dataList, tableConfig, handler };
};
