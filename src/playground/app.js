class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.hasDelete = this.hasDelete.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.hasAddOption=this.hasAddOption.bind(this);
        this. hasDeleteOption=this.hasDeleteOption.bind(this);
        this.state ={
            options : []
        };
    }
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
    hasDelete() {
        this.setState(() =>({ options:[]}));
    }   
    hasDeleteOption(option){
        this.setState((prev)=>({
            options : prev.options.filter((optionD)=> option !== optionD )

        }));
    }
    
    handlePick(){
       
        const option =this.state.options[ Math.floor(Math.random()* this.state.options.length)];
           
        alert(option); 
    }
    hasAddOption(option){
            if(!option) {
             return "enter something";
            
            }else if(this.state.options.indexOf(option) > -1) {
                        return "data already exist";
                            }
        
                            
        this.setState((prev)=>({options: prev.options.concat(option)}));
    }

    render(){
       const title = "indecision";
       const subtitle ="!!put your life in the hand of a computer";
     
        return(
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action hasOptions = { this.state.options.length > 0 }
                        pick={this.handlePick}/>
                <Options options ={this.state.options} 
                        delete={this.hasDelete}
                        hasDeleteOption={ this.hasDeleteOption}/>
                <AddOption hasAddOption= {this.hasAddOption}/>
            </div>

        );

    }
}

const Header = (props)=> {
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    ) ;

}


const Action =(props)=>{
    return (
        <div>
        <button onClick ={props.pick}
                disabled={ !props.hasOptions}

                >what should i do?</button>
        </div>
    );

}

 const Options = (props) => {
    
        
        return(
            <div>
            <button onClick={props.delete}>remove all</button>
            {props.options.length == 0&& <p>enter somthing</p>}
          {
              props.options.map((option)=> <Option key = {option} optionText={option}
              hasDeleteOption= { props.hasDeleteOption}/>)

          }
            
            </div>
        );
 }
 const Option =(props)=>{
    return(
        <div>
           {props.optionText}
           <button onClick={(e)=>{
               (props.hasDeleteOption(props.optionText));
            } }>remove</button>
        </div>
    );

 }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error : undefined
        };
        this.hasAddOption =this. hasAddOption.bind(this);
    }
    hasAddOption(e){
        e.preventDefault();
        
        const option =e.target.elements.option.value.trim();
        
      


    
    const error = this.props.hasAddOption(option);
    
    this.setState(()=> ({error : error}));
    if(!error){
        e.target.elements.option.value =" ";
    }
}
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.hasAddOption}>
            <input type="text" name = "option" />
            <button>add</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById("app"));

