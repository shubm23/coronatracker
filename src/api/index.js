import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country = "Global") => {
  let changeAbleURL = url;
  if (country !== "Global") {
    changeAbleURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeAbleURL);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {
    console.error(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);

    const modifiedData = data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((el) => el.name);
  } catch (error) {
    console.log(error);
  }
};
