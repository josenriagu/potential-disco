import React from "react";
import { useLocation } from "react-router-dom";

import { SearchFilterDiv, ActionDiv } from "./index.styled";

export default function ActionSearchFilter(props) {
  const { searchString, filterString, changeHandler, history } = props;

  let location = useLocation();

  return location.pathname === "/" ? (
    <SearchFilterDiv>
      <div>
        <span>
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          placeholder="Search for a country..."
          value={searchString}
          onChange={(e) => changeHandler(e, "search")}
        />
      </div>
      <div>
        <input
          list="region"
          placeholder="Filter by Region"
          value={filterString}
          onChange={(e) => changeHandler(e, "filter")}
        />
        <datalist id="region">
          <option value="Africa" />
          <option value="America" />
          <option value="Asia" />
          <option value="Europe" />
          <option value="Oceania" />
        </datalist>
      </div>
    </SearchFilterDiv>
  ) : (
    <ActionDiv onClick={() => history.push("/")}>
      <div>
        <i className="fas fa-long-arrow-alt-left"></i> Back
      </div>
    </ActionDiv>
  );
}
