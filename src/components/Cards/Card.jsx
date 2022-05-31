import React, { memo } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";

const Card = ({ CardComponent, title, count, date, body, className }) => {
  return (
    <Grid item xs={12} md={3} component={CardComponent} className={className}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={count} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Grid>
  );
};

export default memo(Card);
