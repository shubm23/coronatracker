import React, { useState, useEffect, memo } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setfetchedCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="Global">Global</option>
        {fetchedCountries.length > 0
          ? fetchedCountries.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
}

export default memo(CountryPicker);
