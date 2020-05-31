import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";

import ActionSearchFilter from "./actionsearchfilter";
import AllCountries from "./allCountries";
import SingleCountry from "./singleCountry";

export default function Container() {
  const [searchString, setSearchString] = useState("");
  const [filterString, setFilterString] = useState("");
  const [countries, setCountries] = useState("");
  let history = useHistory();

  const modCountries = countries
    ? countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchString.toLowerCase()) &&
          country.region.toLowerCase().includes(filterString.toLowerCase())
      )
    : [];

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=alpha2Code;alpha3Code;flag;name;population;region;capital;nativeName;topLevelDomain;currencies;languages;subregion;borders"
      )
      .then((res) => {
        setCountries(res.data);
        localStorage.setItem("countries", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandler = (e, type) => {
    type === "search"
      ? setSearchString(e.target.value)
      : setFilterString(e.target.value);
  };

  return (
    <>
      <ActionSearchFilter
        searchString={searchString}
        filterString={filterString}
        changeHandler={changeHandler}
        history={history}
      />
      <Route path="/" exact>
        <AllCountries countries={modCountries} history={history} />
      </Route>
      <Route path="/:code">
        <SingleCountry history={history} />
      </Route>
    </>
  );
}
