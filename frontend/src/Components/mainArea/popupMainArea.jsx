import React from 'react';
import './popupMainArea.css';
import './LeftPane.css'
import { useAuth } from '../../store/auth';

const Modal = (props) => {
    const {correctCharCount, errorCount, errWordCount, correctWord,
        setTextData,setState,setCurrInd,setCorrectCharCount,setErrorCharCount,
        setErrorCount,setCorrectWord,setWordInd,setBackspace,setTimer,setRunning,
        setVisibleButtonDiff, setVisibleButtonTimer,timerTrue,currInd
    }=props.results
    console.log(timerTrue)
    const setShowPopup=props.setShowPopup
    const {user,token} =useAuth()
    console.log(user.image)
    console.log(user._id)
    const id=user._id
    const accuracy=Math.floor((correctWord/currInd)*100)
    const minute=timerTrue/60
    const WPM=Math.floor(correctWord/minute)
    const errors=currInd-correctWord
    const totalcnt=errorCount+correctCharCount
    let score=WPM
    console.log(token)
    const onClose=async()=>{
        try {
            const res = await fetch(`http://localhost:3000/highscore/${id}`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${token}`
            },
            body: JSON.stringify({
              score
            })
          });
          if(res.ok){
            const data=await res.json();
            console.log(data)
            //localStorage.setItem("token",data.token)
           } 
          
          else{
           console.log("some error")
          }
          } catch (error) {
            console.error('Error:', error);
          }
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
