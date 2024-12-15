import React, { useEffect } from "react";
import { useTableHook } from "./table.hook";
import TablePaginator from "./table-paginator.component";
const Table = (props: any) => {
  const { dataList, tableConfig, handler } = useTableHook();
  useEffect(() => {
    handler.setDataList(props.data);
  }, [props.data]);
  useEffect(() => {
    handler.setTotalCount(props.total);
  }, [props.total]);
  return (
    <div className={"wrapper"}>
      {dataList && (
        <div className={"body"}>
          <table className="border-collapse border border-slate-400 table-auto  w-full">
            <thead className={"bg-gray-100"}>
              <tr>
                {tableConfig.colums.map((column) => {
                  return (
                    <th className="border border-slate-300 ">{column.label}</th>
                  );
                })}
              </tr>
            </thead>
            {dataList && (
              <tbody>
                {dataList.dataListRows.map((row) => {
                  return (
                    <tr>
                      {row.dataListRowCells.map((cell) => {
                        return (
                          <td className={"border border-slate-300"}>
                            {cell.value}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          <TablePaginator
            config={tableConfig}
            onPageChange={props.onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
