import React from "react";
import styles from "./CompletedChallenges.module.scss";

const CompletedChallenges = ({ doneIdeas }) => {
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
            {doneIdeas.length === 0 ? (
              <tr>
                <td colSpan={4}>No done ideas yet</td>
              </tr>
            ) : (
              doneIdeas.map((idea, index) => (
                <tr key={idea.key}>
                  <td>{index + 1}</td>
                  <td>{idea.activity}</td>
                  <td>{idea.type}</td>
                  <td>Last week</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompletedChallenges;
