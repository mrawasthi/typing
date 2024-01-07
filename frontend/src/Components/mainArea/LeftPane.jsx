import React from 'react'
import './LeftPane.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const leftPane = ()=>{
    const [toggleButtonDifficulty, setToggleButtonDifficulty]=React.useState(false);
    const [toggleButtonTimer, setToggleButtonTimer]=React.useState(false);
    const [visibleButtonTimer, setVisibleButtonTimer]=React.useState({
        color: "dark",
        text: "Timer"
    })
    const [visibleButtonDiff, setVisibleButtonDiff]=React.useState({
        color: "dark",
        text: "Difficulty"
    })

    function handleToggleDifficulty(){
        setToggleButtonTimer(false);
        setToggleButtonDifficulty(!toggleButtonDifficulty);
    }
    function handleToggleTimer(){
        setToggleButtonDifficulty(false);
        setToggleButtonTimer(!toggleButtonTimer);
    }
    function changeStateTimer(e){
        const eventid=e.target.id;
        handleToggleTimer();
        if(eventid==1){
            setVisibleButtonTimer((prev)=>{
                return {...prev, text: "1 MINUTE"};
            })
        }
        else if(eventid==2){
            setVisibleButtonTimer((prev)=>{
                return {...prev, text: "2 MINUTE"};
            })
        }
        else if(eventid==3){
            setVisibleButtonTimer((prev)=>{
                return {...prev, text: "5 MINUTE"};
            })
        }
    }
    function changeStateDiff(e){
        const eventid=e.target.id;
        handleToggleDifficulty();
        if(eventid==4){
            setVisibleButtonDiff((prev)=>{
                return {...prev, color: "success", text: "Easy"};
            })
        }
        else if(eventid==5){
            setVisibleButtonDiff((prev)=>{
                return {...prev, color: "warning", text: "Medium"};
            })
        }
        else if(eventid==6){
            setVisibleButtonDiff((prev)=>{
                return {...prev, color: "danger", text: "Hard"};
            })
        }
    }
    
    return(
        <>
            <p class="d-inline-flex gap-1 left-toggle">
                <a class={`btn btn-${visibleButtonDiff.color} leftpaneout`} onClick={handleToggleDifficulty} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    {visibleButtonDiff.text}
                </a>
                {toggleButtonDifficulty && 
                    <div className="card menulist">
                        <button type="button" class="btn btn-success btn-option" id="4" onClick={changeStateDiff}>Easy</button>
                        <button type="button" class="btn btn-warning btn-option" id="5" onClick={changeStateDiff}>Medium</button>
                        <button type="button" class="btn btn-danger btn-option" id="6" onClick={changeStateDiff}>Hard</button>
                    </div>  
                }
                <a class={`btn btn-${visibleButtonTimer.color} leftpaneout`} onClick={handleToggleTimer} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    {visibleButtonTimer.text}
                </a>
                {toggleButtonTimer && 
                    <div className="card menulist">
                        <button type="button" class="btn btn-success btn-option" id="1" onClick={changeStateTimer}>1 MINUTE</button>
                        <button type="button" class="btn btn-warning btn-option" id="2" onClick={changeStateTimer}>2 MINUTE</button>
                        <button type="button" class="btn btn-danger btn-option" id="3" onClick={changeStateTimer}>5 MINUTE</button>
                    </div>  
                }
            </p>
        </>
    )
}

export default leftPane;