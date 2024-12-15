import React, { FC, useEffect, useState } from "react";
import { TableConfg } from "./table.entity";
const TablePaginator = (props: any) => {
  const [shownPages, setShownPages] = useState<number[]>([]);
  useEffect(() => {
    setShownPages(props.config.shownPages);
  }, [props.config]);
  const goto = (page: number) => {
    props.config.setCurrentPage(page);
    setShownPages(props.config.shownPages);
    if (props.onPageChange) {
      props.onPageChange(page, props.config.pageSize);
    }
  };
  return (
    <div>
      <span
        className={"m-1 hover:underline cursor-pointer"}
        onClick={() => goto(1)}
      >
        First
      </span>
      <span
        className={"m-1 hover:underline cursor-pointer"}
        onClick={() => {
          goto(props.config.currentPage - 1);
        }}
      >
        Prev
      </span>
      {shownPages.map((page: number) => {
        return (
          <span
            className={
              "m-1 hover:underline cursor-pointer " +
              (page === props.config.currentPage
                ? "text-blue-600 font-bold"
                : "")
            }
            onClick={() => goto(page)}
          >
            {page}
          </span>
        );
      })}
      <span
        className={"m-1 hover:underline cursor-pointer"}
        onClick={() => goto(props.config.currentPage + 1)}
      >
        Next
      </span>
      <span
        className={"m-1 hover:underline cursor-pointer"}
        onClick={() => goto(props.config.totalPages)}
      >
        Last
      </span>
      <span className={"ml-2"}>Total Records: {props.config.total}</span>
    </div>
  );
};

export default TablePaginator;
