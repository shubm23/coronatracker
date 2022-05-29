import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: {},
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ cardsData: fetchedData }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards cardsData={this.state.cardsData} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
