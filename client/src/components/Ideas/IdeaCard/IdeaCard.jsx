import React from "react";
import cx from 'classnames';
import { Card, Typography } from "@mui/material";
import styles from './IdeaCard.module.scss'

const IdeaCard = ({task, type, isCurrent}) => {

  const categoryStyle = cx( {
    [styles.category] : true,
    [styles.hiddenCategory] : isCurrent === false
  })
  return (
    <Card className={styles.card}>
      <Typography className={styles.task}>{task}</Typography>
      <Typography className={categoryStyle}>{type}</Typography>
    </Card>
  );
};

export default IdeaCard;
