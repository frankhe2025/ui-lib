export declare class TableColumn {
    key: string;
    label: string;
    type: string;
    constructor(dataObj?: any);
}
export declare class TableConfg {
    total: number;
    pageSize: number;
    currentPage: number;
    colums: TableColumn[];
    totalShownPages: number;
    constructor(dataObj?: DataListRow | null, total?: number, pageSize?: number);
    clone(): TableConfg;
    setColumnsFromData(dataObj: any): void;
    get totalPages(): number;
    setCurrentPage(page: number): void;
    get shownPages(): number[];
}
export declare class DataListRowCell {
    key: string;
    value: any;
    constructor(data: any);
}
export declare class DataListRow {
    dataListRowCells: DataListRowCell[];
    constructor(rowData?: {});
}
export declare class DataList {
    dataListRows: DataListRow[];
    constructor(data?: any);
}
