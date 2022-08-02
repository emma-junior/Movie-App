import React from "react";
import { useGlobalContext } from "../../hooks/Context";
// import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const PaginationBtns = ({ movieType }) => {
  const { pageNo, setPageNo } = useGlobalContext();

  const handleChange = (event, value) => {
    setPageNo(value);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination-wrapper">
      {/* <Link to={`/${movieType}/${pageNo}`}> */}
      <Pagination
        count={20}
        page={pageNo}
        onChange={handleChange}
        color="primary"
      />
      {/* </Link> */}
    </div>
  );
};

export default PaginationBtns;
