import { useState, type FormEvent } from "react";
import { Check, Equal, EqualNot, X } from "lucide-react";
import clsx from "clsx";
import "./App.css";

type Results = {
  firstHalf: string;
  secondHalf: string;
  firstHalfVowelCount: number | null;
  secondHalfVowelCount: number | null;
  centerCharacter: string | null;
  isBalanced: boolean | null;
};

function App() {
  const [isRulesShowing, setIsRulesShowing] = useState(false);
  const [hasInvalidInput, setHasInvalidInput] = useState<boolean>(false);
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState<Results>({
    firstHalf: "",
    secondHalf: "",
    firstHalfVowelCount: null,
    secondHalfVowelCount: null,
    centerCharacter: null,
    isBalanced: null,
  });

  function handleToggleRules() {
    setIsRulesShowing(!isRulesShowing);
  }

  function isInputEmpty() {
    return userInput === "";
  }

  function getVowelCount(str: string) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let vowelCount = 0;

    for (const char of str) {
      if (vowels.has(char)) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  function isStrBalanced(str: string) {
    const lowerCaseString = str.toLowerCase();
    const middleIndex = Math.floor(lowerCaseString.length / 2);

    const firstHalfStr = lowerCaseString.slice(0, middleIndex);
    const secondHalfStr =
      lowerCaseString.length % 2 != 0
        ? lowerCaseString.slice(middleIndex + 1)
        : lowerCaseString.slice(middleIndex);

    setResults((prev) => ({
      ...prev,
      firstHalf: firstHalfStr,
      firstHalfVowelCount: getVowelCount(firstHalfStr),
      secondHalf: secondHalfStr,
      secondHalfVowelCount: getVowelCount(secondHalfStr),
    }));

    return getVowelCount(firstHalfStr) === getVowelCount(secondHalfStr);
  }

  function handleVowelCheckResults(e: FormEvent) {
    e.preventDefault();

    if (isInputEmpty()) {
      setHasInvalidInput(true);
      setResults({
        firstHalf: "",
        secondHalf: "",
        firstHalfVowelCount: null,
        secondHalfVowelCount: null,
        centerCharacter: null,
        isBalanced: null,
      });
      return;
    }

    setResults((prev) => ({
      ...prev,
      isBalanced: isStrBalanced(userInput),
    }));

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

      {results.firstHalf && (
        <>
          <div
            className={clsx(
              "result-container",
              results.isBalanced ? "balanced" : "unbalanced"
            )}
          >
            {results.isBalanced ? (
              <Check className="checkmark-icon" />
            ) : (
              <X className="error-icon" />
            )}
            <p>{results.isBalanced ? "Balanced" : "Unbalanced"} vowel count </p>
            <p className="result-count">
              {results.firstHalfVowelCount}{" "}
              {results.isBalanced ? <Equal /> : <EqualNot />}{" "}
              {results.secondHalfVowelCount}
            </p>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
