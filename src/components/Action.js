import React from "react";

const Action =(props)=>{
    return (
        <div>
        <button 
        className="big-button"
        onClick ={props.pick}
                disabled={ !props.hasOptions}

                >what should i do?</button>
        </div>
    );

}

export default Action ;
