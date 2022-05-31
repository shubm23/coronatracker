import React, { memo } from "react";
import { Toolbar, Typography } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption" color="common.grey">
          {`Developed by Shubham Mandal ©${new Date().getFullYear()}`}
        </Typography>
      </Toolbar>
    </div>
  );
};

export default memo(Footer);
