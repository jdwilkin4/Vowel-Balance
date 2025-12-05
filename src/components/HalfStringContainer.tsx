import clsx from "clsx";
import { isVowel } from "../utils";
import "./HalfStringContainer.css";

type HalfStrContainerProps = {
  containerName: string;
  characterLength: number;
  resultString: string;
  vowelCount: number | null;
};

export function HalfStrContainer({
  containerName,
  characterLength,
  resultString,
  vowelCount,
}: HalfStrContainerProps) {
  const charactersArr = resultString.split("");

  return (
    <div className="half-container">
      <h2>{containerName}</h2>
      <p className="character-length">{characterLength} characters</p>
      <div className="list-of-characters-container">
        {charactersArr.map((char, index) => (
          <div
            key={`curr-char-${char}-${index}`}
            className={clsx("char", isVowel(char) && "vowel-char")}
          >
            {char}
          </div>
        ))}
      </div>
      <div className="vowel-count-container">
        <p>Vowel Count</p>
        <p>{vowelCount}</p>
      </div>
    </div>
  );
}
