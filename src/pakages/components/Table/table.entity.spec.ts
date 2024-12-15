import { DataList } from "./table.entity";

describe("tableEntity", () => {
  it("should construct the data", () => {
    const dataList = new DataList(tableData);
    expect(dataList.dataListRows.length).toBe(3);
    dataList.dataListRows.forEach((row) => {
      expect(row.dataListRowCells.length).toBe(4);
    });
  });
});

const tableData = [
  {
    id: 1,
    name: "name 1",
    count: 10,
    enabled: true,
  },
  {
    id: 2,
    name: "name 2",
    count: 0,
    enabled: false,
  },
  {
    id: 3,
    name: "name 3",
    count: 10,
    enabled: true,
  },
];
