import React from "react";
import { useGlobalContext } from "../../hooks/Context";
import Pagination from "@mui/material/Pagination";
import "./pagination.css";

const PaginationBtns = () => {
  const { pageNo, setPageNo } = useGlobalContext();

  const handleChange = (event, value) => {
    setPageNo(value);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination-wrapper">
      <Pagination
        count={20}
        page={pageNo}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default PaginationBtns;
