import React from 'react';
import './mainArea.css';
import LeftPane from './LeftPane.jsx';
import dummyData from "../../data.js";

export default function MainArea() {
  const [textData, setTextData] = React.useState("Kindly Enter Difficulty and Timer first");
  const [state, setState] = React.useState([]);
  const [currInd, setCurrInd] = React.useState(0);
  const [characterCount, setCharacterCount] = React.useState(0);
  const [correctCharCount, setCorrectCharCount] = React.useState(0);
  const [errorCharCount, setErrorCharCount] = React.useState(0);
  const [errWordCount, setErrWordCount] = React.useState(0);
  const [correctWord, setCorrectWord] = React.useState(0);
  const [wordInd, setWordInd] = React.useState(0);
  const [cursorStop, setcursorStop] = React.useState(true);
  const [backspace,setBackspace]=React.useState(false)

  const [timer, setTimer] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  const dataArray = textData.split(" ").filter(Boolean);
  function updateText() {
    if (!running) {
      setRunning(true);
    }
  }
   console.log(errWordCount)
   console.log(state)
   
  function handleLastKey(e) {
    const currText = e.target.value
    const lastKey = currText[currText.length-1]
    console.log(currText)
    console.log(currText.length)
    console.log(lastKey)
    if(state.length>currText.length){
      if(!backspace){
      console.log("here")
      setState(prevState => prevState.slice(0, -1));
         console.log(state.length)
         
      if(wordInd!==1){
        setWordInd(prev => prev-1)
        console.log(wordInd+"AyushChutiya")
      }else{
        setWordInd(0)
        setBackspace(true)
      }
     }else{
      const chartoAdd='!';
      const original=currText;
      const result=original.concat(chartoAdd)
      e.target.value=result
     }
    }
    else if (wordInd < dataArray[currInd].length && dataArray[currInd][wordInd] === lastKey) {
      setCharacterCount(prev => prev + 1);
      setCorrectCharCount(prev => prev + 1);
      setWordInd(prev => prev + 1);
      setBackspace(false)
      setState([...state, { color: "col-green", content: lastKey}]);
    } else if (wordInd < dataArray[currInd].length && dataArray[currInd][wordInd] !== lastKey && lastKey !== " ") {
      setCharacterCount(prev => prev + 1);
      setErrorCharCount(prev => prev + 1);
      setWordInd(prev => prev + 1);
      setBackspace(false)
      setState([...state, { color: "col-red", content: lastKey }]);
    } else if (lastKey === " " && wordInd === dataArray[currInd].length) {
      if (errorCharCount) {
        setErrWordCount(prev => prev + 1);
      } else {
        setCorrectWord(prev => prev + 1);
      }
      setWordInd(0);
      setCurrInd(prev => prev + 1);
      setErrorCharCount(0);
      setBackspace(true)
      setState([...state, { color: "col-green", content: lastKey }]);
    }else if(lastKey === " " && wordInd < dataArray[currInd].length){
        setcursorStop(false)
    }else if(wordInd === dataArray[currInd].length && lastKey !== " "){
      const original=currText.slice(0, -1);
      e.target.value=original
    }
  }

  return (
    <div className="uppercontainer">
      <div className="containerArea">
        <div className="leftPane">
          <LeftPane
            setTextData={setTextData}
            setTimer={setTimer}
            timer={timer}
            running={running}
            setRunning={setRunning}
          />
        </div>
        <div className="stageArea">
          <div className="textarea-div">
            <ul className="super-list">
              {state.map((item, index) => (
                <li key={index} className={item.color}>
                  {item.content}
                </li>
              ))}
              <li className="guiding-text">
                {dataArray[currInd].slice(wordInd, dataArray[currInd].length) +
                  " " +
                  dataArray.slice(currInd + 1, dataArray.length).join(" ")}
              </li>
            </ul>
          </div>
          <textarea 
            className="main-textarea" 
            onClick={updateText} 
            onInput={handleLastKey} 
            spellCheck="false"
          >
          </textarea>
        </div>
        <div className="bottomPane"></div>
      </div>
    </div>
  );
}
