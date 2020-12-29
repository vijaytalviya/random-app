import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";
class IndecisionApp extends React.Component{
   state = {
   options : [] ,
   selectedOption : undefined
   };
    
    componentDidMount(){
        
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
         if(options){ this.setState(()=>({options}));
    }}
    componentDidUpdate(prevprops,prevstate){
        if(prevstate.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);

        }
    }
    componentWillunmount(){
        console.log("componentwillunmound");
    }
    hasDelete =()=> {
        this.setState(() =>({ options:[]}));
    }   
    hasDeleteOption =(option)=>{
        this.setState((prev)=>({
            options : prev.options.filter((optionD)=> option !== optionD )

        }));
    }
    
    handlePick = ()=>{
       
        const option =this.state.options[ Math.floor(Math.random()* this.state.options.length)];
           this.setState(()=>({
               selectedOption : option
           })
          );
          
    }

    hasAddOption = (option)=>{
            if(!option) {
             return "enter something";
            
            }else if(this.state.options.indexOf(option) > -1) {
                        return "data already exist";
                            }
        
                            
        this.setState((prev)=>({options: prev.options.concat(option)}));
    }
     close =()=>{
         this.setState(()=>({
                 selectedOption : undefined}));
     }

    render(){
       const title = "indecision";
       const subtitle ="!!put your life in the hand of a computer";
     
        return(
            <div>
            
                <Header title = {title} subtitle = {subtitle} />
               <div className ="container">
               <Action hasOptions = { this.state.options.length > 0 }
                        pick={this.handlePick} />
                
                <div className="widget">
                        <Options options ={this.state.options} 
                        delete={this.hasDelete}
                        hasDeleteOption={ this.hasDeleteOption}/>
                <AddOption hasAddOption= {this.hasAddOption}/>
               </div>
               </div> 
                <OptionModal selectedOption ={this.state.selectedOption}
                        close ={this.close}/>
            </div>

        );

    }
}





 





 
export default IndecisionApp;