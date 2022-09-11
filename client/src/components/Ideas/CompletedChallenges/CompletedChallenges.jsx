import React from "react";
import differenceInDays from "date-fns/differenceInDays";
import styles from "./CompletedChallenges.module.scss";

const CompletedChallenges = ({ doneIdeas }) => {
  const countDays = (date) => {
    const result = differenceInDays(Date.now(), date)
    if(result === 0) {
      return 'Today'
    } else if (result === 1) {
      return 'Yesterday'
    } else if (result <= 7) {
      return 'This week'
    } else if (result > 7 && result <= 14) {
      return 'Last week'
    } 
    return `${result} days ago`
  };

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
                  <td>{countDays(idea.date)}</td>
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
