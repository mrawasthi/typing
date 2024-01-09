import React from 'react';
import './popupMainArea.css';
import './LeftPane.css'

const Modal = (props) => {
    const {correctCharCount, errorCount, errWordCount, correctWord,
        setTextData,setState,setCurrInd,setCorrectCharCount,setErrorCharCount,
        setErrorCount,setCorrectWord,setWordInd,setBackspace,setTimer,setRunning,
        setVisibleButtonDiff, setVisibleButtonTimer
    }=props.results
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
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Typing Test Results</h2>
        <p>WPM: {correctWord}</p>
        <p>Accuracy: {correctWord}%</p>
        <p>Errors: {errorCount}</p>
        <p>Characters Typed: {errorCount+correctCharCount}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
