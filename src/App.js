import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy Face",
  "❤️": "Love",
  "🥰": "Smiling Face with Love",
  "🤪": "Zany Face",
  "🎂": "Cake",
  "⚽": "Football",
  "🧼": "Soap",
  "🎄": "Xmas Tree",
  "☀️": "Sun",
  "🇮🇳": "Jai Hind!!"
};

var emojisWeknow = Object.keys(emojiDictionary);
var headingText = "Inside Outt";
// var likeCounter = 0;
// var color = "blue";
// var userName = prompt("Give me Your Name");

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't Have this in our database";
    }

    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "2rem" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
