import React from "react";
import { Card, Typography } from "@mui/material";
import styles from './IdeaCard.module.scss'

const IdeaCard = ({task, type}) => {
  return (
    <Card className={styles.card}>
      <Typography className={styles.task}>{task}</Typography>
      <Typography className={styles.category}>{type}</Typography>
    </Card>
  );
};

export default IdeaCard;
