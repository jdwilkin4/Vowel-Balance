import { useState } from "react";
import "./App.css";

function App() {
  const [isRulesShowing, setIsRulesShowing] = useState(false);

  function handleToggleRules() {
    setIsRulesShowing(!isRulesShowing);
  }

  return (
    <main>
      <h1>
        <span>Vowel</span> <span>Checker</span>
      </h1>
      <button className="toggle-rules-btn" onClick={handleToggleRules}>
        {isRulesShowing ? "Hide" : "Show"} Rules
      </button>

      {isRulesShowing && (
        <div className="container rules-container">
          <h2>Challenge Rules</h2>
          <p className="description">
            Provide a word or phrase and check whether the number of vowels in
            the first half of the string is equal to the number of vowels in the
            second half.
          </p>
          <ul>
            <li>The string can contain any characters.</li>
            <li>
              The letters a, e, i, o, and u, in either uppercase or lowercase,
              are considered vowels.
            </li>
            <li>
              If there's an odd number of characters in the string, ignore the
              center character.
            </li>
          </ul>
        </div>
      )}

      <form className="container phrase-container">
        <label className="phrase-label" htmlFor="phrase">
          Provide a word, phrase or sentence:
        </label>
        <div className="input-btn-container">
          <input
            className="phrase-input"
            id="phrase"
            type="text"
            placeholder="e.g. racecar, Kitty Ipsum, I love to code"
            required
          />

          <button className="check-phrase-btn" type="button">
            Check
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
