import React, { memo } from "react";
import styles from "./Cards.module.css";
import { default as CardComponent } from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import cx from "classnames";

function Cards({ cardsData: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed || !recovered || !deaths || !lastUpdate) {
    return <h1>Loading ......</h1>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          CardComponent={CardComponent}
          title="Infected"
          count={confirmed.value}
          date={lastUpdate}
          body="Number of Active Cases of Covid"
          className={cx(styles.card, styles.infected)}
        />
        <Card
          CardComponent={CardComponent}
          title="Recovered"
          count={recovered.value}
          date={lastUpdate}
          body="Number of recoveries from Covid"
          className={cx(styles.card, styles.recovered)}
        />
        <Card
          CardComponent={CardComponent}
          title="Deaths"
          count={deaths.value}
          date={lastUpdate}
          body="Number of deaths caused by Covid"
          className={cx(styles.card, styles.deaths)}
        />
      </Grid>
    </div>
  );
}

export default memo(Cards);
