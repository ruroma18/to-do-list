import React from "react";
import styles from "./CompletedChallenges.module.scss";

const CompletedChallenges = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Completed challenges</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Type</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>How to find a job....</td>
              <td>Education</td>
              <td>Last week</td>
            </tr>
            <tr>
              <td>2</td>
              <td>How to find a job....</td>
              <td>Education</td>
              <td>Last week</td>
            </tr>
            <tr>
              <td>3</td>
              <td>How to find a job....</td>
              <td>Education</td>
              <td>Last week</td>
            </tr>
            <tr>
              <td>4</td>
              <td>How to find a job....</td>
              <td>Education</td>
              <td>Last week</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompletedChallenges;
