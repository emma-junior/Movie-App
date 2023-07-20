import React from "react";
import "./details.css";

const Details = ({ data }) => {
  return (
    <div>
      <div className="pr-container">
        {data.production_companies?.map((company, index) => {
          return (
            <div key={company?.id} className="company">
              <div className="">
                <p className="company-flag">
                  {company?.name}{" "}
                  {index < data.production_companies.length - 1 ? " + " : ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="line"></div>
      <div className="detail-wrapper">
        <p className="detail">Budget</p>
        <p>${data.budget?.toLocaleString("en-US")}</p>
      </div>
      <div className="line"></div>
      <div className="detail-wrapper">
        <p className="br-word">Revenue</p>
        <p>${data.revenue?.toLocaleString("en-US")}</p>
      </div>
      <div className="line"></div>
      <div className="detail-wrapper">
        <p>Release Date</p>
        <p>{data?.release_date}</p>
      </div>
      <div className="line"></div>
      <div className="vote-wrapper">
        <div className="vote-ave">
          <label for="vote">Vote Average:</label>
          <progress id="vote" value={data?.vote_average} max="10">
            {data?.vote_average}%
          </progress>
        </div>
        <p>Vote count: {data?.vote_count}</p>
      </div>
    </div>
  );
};

export default Details;
