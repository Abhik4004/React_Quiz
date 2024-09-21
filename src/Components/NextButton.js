/**
 * This takes the dispatch function and the answer value. *
 * to move to the next question *
 *
 */
function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
