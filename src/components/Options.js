import React from 'react';
import Option from "./Option";
const Options = (props) => {
    
        
    return(
        <div>
        <div className="widget-header">
        <h3 className="widget-header__title" >Your option</h3>
        
        
        <button className="button button--link"
        onClick={props.delete}>remove all</button>
        </div>
        {props.options.length == 0&& <p className= "widget__msg">enter somthing</p>}
      {
          props.options.map((option,index)=> <Option key = {option} optionText={option}
         count ={index +1}
          hasDeleteOption= { props.hasDeleteOption}/>)

      }
        
        </div>
    );
}
export default Options;