import React from 'react';
import './popupMainArea.css';
import './LeftPane.css'

const Modal = (props) => {
    const {correctCharCount, errorCount, errWordCount, correctWord,
        setTextData,setState,setCurrInd,setCorrectCharCount,setErrorCharCount,
        setErrorCount,setCorrectWord,setWordInd,setBackspace,setTimer,setRunning,
        setVisibleButtonDiff, setVisibleButtonTimer,timerTrue,currInd
    }=props.results
    console.log(timerTrue)
    const setShowPopup=props.setShowPopup
    function onClose(){
        setShowPopup(false)
        setTextData("Kindly Enter Difficulty and Timer first")
        setState([])
        setCurrInd(0)
        setCorrectCharCount(0)
        setErrorCharCount(0)
        setErrorCount(0)
        setCorrectWord(0)
        setWordInd(0)
        setBackspace(false)
        setTimer(0)
        setRunning(false)
        setVisibleButtonDiff({
            color: "dark",
            text: "Difficulty"
        })
        setVisibleButtonTimer({
            color: "dark",
            text: "Timer"
        })
    }
    const accuracy=Math.floor((correctWord/currInd)*100)
    const minute=timerTrue/60
    const WPM=Math.floor(correctWord/minute)
    const errors=currInd-correctWord
    const totalcnt=errorCount+correctCharCount
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Typing Test Results</h2>
        <p>WPM: {WPM}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Errors: {errors}</p>
        <p>Characters Typed: {totalcnt}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
