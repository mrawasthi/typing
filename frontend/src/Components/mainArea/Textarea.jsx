import React, { useState, useEffect, useRef } from "react";
import content, { parcedCont } from "./Typing-content";
import dummyData from "../../data";
//test comment

var random = Math.floor(content.length * Math.random());
var parsed = dummmyData.easy[random];
var ind = 0;
var wordIndex = -1;
var lastWordIndex = -2;
var correctWordsNow = 0;
var correctWordsSoFar = 0;

function Text(props) {
  function updateText(e) {
    props.setRunningFlag(true);
    var input = e.target.value;

    if (!input) {
      setState([]);
      wordIndex = -1;
      lastWordIndex = -1;
      return;
    }

    var len = parsed.length;
    var parsedInput = input.split(" ").filter(Boolean);
    ind = parsedInput.length - 1;
    wordIndex = parsedInput[ind].length - 1;
    var char = parsedInput[ind][wordIndex];

    correctWordsNow = 0;
    for (var i = 0; i < parsedInput.length; i++) {
      if (parsed[i] === parsedInput[i]) {
        correctWordsNow++;
      }
    }

    if (
      parsedInput.length === len &&
      lastWordIndex >= parsed[len - 1].length - 1
    ) {
      var newRandom = Math.floor(content.length * Math.random());
      parsed = parcedCont[newRandom];
      ind = 0;
      wordIndex = -1;
      lastWordIndex = -2;
      correctWordsSoFar += correctWordsNow;
      e.target.value = "";
      setState([]);
    } else if (input.length < state.length) {
      setState(state.slice(0, -1));
    } else if (lastKeyPressed === " " && parsedInput[ind] === parsed[ind]) {
      setState([...state, { content: " ", color: "col-green", id: input }]);
      props.setTotalCharacters(props.totalCharacters + 1);
    } else if (lastKeyPressed === " ") {
      setState([...state, { content: " ", color: "col-red", id: input }]);
      props.setTotalCharacters(props.totalCharacters + 1);
      props.setErrors(props.errors + 1);
    } else if (
      wordIndex > parsed[ind].length ||
      char !== parsed[ind][wordIndex]
    ) {
      setState([...state, { content: char, color: "col-red", id: input }]);
      props.setTotalCharacters(props.totalCharacters + 1);
      props.setErrors(props.errors + 1);
    } else {
      setState([...state, { content: char, color: "col-green", id: input }]);
      props.setTotalCharacters(props.totalCharacters + 1);
    }

    props.setTotalCorrectWords(correctWordsSoFar + correctWordsNow);
    lastWordIndex = wordIndex;
  }

  function lastKey(e) {
    setLastKeyPressed(e.key);
  }
  var [state, setState] = useState([]);
  var [lastKeyPressed, setLastKeyPressed] = useState("");
  var box_ref = useRef();

  useEffect(() => {
    if (props.runningFlag === false) {
      ind = 0;
      wordIndex = -1;
      box_ref.current.value = "";
      lastWordIndex = -2;
      setState([]);
      props.setTotalCorrectWords(0);
      var newRandom = Math.floor(content.length * Math.random());
      parsed = parcedCont[newRandom];
    }
  }, [props.runningFlag]);
  return (
    <div className="long">
      <textarea
        className="text"
        onInput={updateText}
        ref={box_ref}
        onKeyDown={lastKey}
        spellCheck="false"
        autoComplete="off"
      />
      <div className="super">
        <ul className="super-list">
          {state.map((item) => (
            <li key={item.id} className={item.color}>
              {item.content}
            </li>
          ))}
          <li className="guiding-text">
            {parsed[ind].slice(wordIndex + 1, parsed[ind].length) +
              " " +
              parsed.slice(ind + 1, parsed.length).join(" ")}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Text;