import { DataList, TableConfg } from "./table.entity";
export declare const useTableHook: () => {
    dataList: DataList | null;
    tableConfig: TableConfg;
    handler: {
        setDataList: (rawData: any[]) => void;
        setTotalCount: (total: number) => void;
    };
};
