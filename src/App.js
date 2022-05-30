import React from "react";
import styles from "./App.module.css";
import { Header, Cards, Chart, CountryPicker, Footer } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: {},
      country: "",
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ cardsData: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ cardsData: fetchedData, country: country });
  };

  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.header_image} />
        <Cards cardsData={this.state.cardsData} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.cardsData} country={this.state.country} />
        <Footer />
      </div>
    );
  }
}

export default App;
