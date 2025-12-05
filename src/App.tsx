import { useState, type FormEvent } from "react";
import "./App.css";

function App() {
  const [isRulesShowing, setIsRulesShowing] = useState(false);
  const [hasInvalidInput, setHasInvalidInput] = useState<boolean>(false);
  const [userInput, setUserInput] = useState("");

  function handleToggleRules() {
    setIsRulesShowing(!isRulesShowing);
  }

  function isInputEmpty() {
    return userInput === "";
  }

  function handleVowelCheckResults(e: FormEvent) {
    e.preventDefault();

    if (isInputEmpty()) {
      setHasInvalidInput(true);
      return;
    }

    setHasInvalidInput(false);
  }

  function handleUpdateInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
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

      <form
        onSubmit={handleVowelCheckResults}
        className="container phrase-container"
      >
        <label className="phrase-label" htmlFor="phrase">
          Provide a word or phrase:
        </label>
        <div className="input-btn-container">
          <input
            onChange={(e) => handleUpdateInput(e)}
            value={userInput}
            className="phrase-input"
            id="phrase"
            type="text"
            placeholder="e.g. racecar, Kitty Ipsum"
          />
          <button className="check-phrase-btn">Check</button>
        </div>
        {hasInvalidInput && (
          <p className="input-error-msg">
            Please provide a word, or phrase to check.
          </p>
        )}
      </form>
    </main>
  );
}

export default App;
