import React from "react";
import { Card, Typography } from "@mui/material";
import styles from './IdeaCard.module.scss'

const IdeaCard = () => {
  return (
    <Card className={styles.card}>
      <Typography className={styles.task}>Learn how to fold a paper crane</Typography>
      <Typography className={styles.category}>Education</Typography>
    </Card>
  );
};

export default IdeaCard;
