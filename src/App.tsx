import { useState } from "react";
import "./App.css";

function App() {
  const [isRulesShowing, setIsRulesShowing] = useState(false);

  function handleToggleRules() {
    setIsRulesShowing(!isRulesShowing);
  }

  return (
    <>
      <h1>VowelChecker</h1>
      <button onClick={handleToggleRules}>
        {isRulesShowing ? "Hide" : "Show"} Rules
      </button>

      {isRulesShowing && (
        <div className="rules-container">
          <h2>Challenge Rules</h2>
          <li>
            Given a string, determine whether the number of vowels in the first
            half of the string is equal to the number of vowels in the second
            half.
            <li>The string can contain any characters.</li>
            <li>
              The letters a, e, i, o, and u, in either uppercase or lowercase,
              are considered vowels.
            </li>
            <li>
              If there's an odd number of characters in the string, ignore the
              center character.
            </li>
          </li>
        </div>
      )}

      <form className="phrase-container">
        <label htmlFor="phrase">Provide a word, phrase or sentence.</label>
        <input id="phrase" type="text" placeholder="e.g. racecar" required />

        <button type="button">Check</button>
      </form>
    </>
  );
}

export default App;
