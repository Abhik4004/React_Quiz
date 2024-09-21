/**
 *
 * Here is a fun trick in increasing the progress bar with clicking the
    answer in this case we are transforming the boolean into a number if
    answer have some value it returns True it becomes 1 and if it returns
    false then it becomes 0 

    @tag progress @param is value
    @returns increase in progress bar with click
 */

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
