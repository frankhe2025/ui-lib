export class TableColumn {
  key: string;
  label: string;
  type: string;
  constructor(dataObj: any = null) {
    this.key = "";
    this.label = "";
    this.type = "string";
    if (dataObj) {
      this.key = Object.keys(dataObj)[0];
      this.label = this.key;
      this.type == typeof dataObj[this.key];
    }
  }
}
export class TableConfg {
  total: number;
  pageSize: number;
  currentPage: number;
  colums: TableColumn[];
  totalShownPages: number;
  constructor(dataObj: DataListRow | null = null, total = 0, pageSize = 0) {
    this.total = 10000;
    this.pageSize = 20;
    this.colums = [];
    this.currentPage = 1;
    this.totalShownPages = 10;

    if (total > 0) this.total = total;
    if (pageSize > 0) this.pageSize = pageSize;

    if (dataObj) {
      this.setColumnsFromData(dataObj);
    }
  }

  clone() {
    const tb = new TableConfg();
    tb.total = this.total;
    tb.pageSize = this.pageSize;
    tb.currentPage = this.currentPage;
    tb.colums = this.colums;
    tb.totalShownPages = this.totalShownPages;
    return tb;
  }

  setColumnsFromData(dataObj: any) {
    const columns: any[] = [];
    if (dataObj) {
      dataObj.dataListRowCells.forEach((cell: any) => {
        const obj: any = {};
        // @ts-ignore
        obj[cell.key] = cell.value;
        columns.push(new TableColumn(obj));
      });
    }
    this.colums = columns;
  }

  get totalPages() {
    return Math.floor(this.total / this.pageSize);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  get shownPages() {
    // here, we show half before, half after
    let startingPages = this.currentPage - this.totalShownPages / 2;
    if (startingPages < 1) {
      startingPages = 1;
    }
    let endingPages = startingPages + this.totalShownPages;
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const resp = [];
    for (let i = startingPages; i <= endingPages; i++) {
      resp.push(i);
    }
    return resp;
  }
}
export class DataListRowCell {
  key: string;
  value: any;
  constructor(data: any) {
    this.key = "";
    this.value = "";
    if (data) {
      this.key = data["key"] || "";
      this.value = data["value"] || "";
    }
  }
}
export class DataListRow {
  dataListRowCells: DataListRowCell[];
  constructor(rowData = {}) {
    this.dataListRowCells = [];
    Object.keys(rowData).forEach((key: string) => {
      this.dataListRowCells.push(
        // @ts-ignore
        new DataListRowCell({ key: key, value: rowData[key] })
      );
    });
  }
}
export class DataList {
  dataListRows: DataListRow[];
  constructor(data: any = []) {
    this.dataListRows = [];
    data.forEach((row: any) => {
      this.dataListRows.push(new DataListRow(row));
    });
  }
}
