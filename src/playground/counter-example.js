class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count:props.count
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinysOne=this.handleMinysOne.bind(this)
        this.handleReset=this.handleReset.bind(this);
    }
    componentDidMount(){
        const a = localStorage.getItem("count");
        const count = parseInt(a,10);
         this.setState(()=>({
            count : count ;
         }));
    }
    componentDidUpdate(prevprops,prevState){
        
        localStorage.setItem("count",this.state.count);
    }
    handleAddOne(){
    this.setState((prevState)=>{ 
       return {count : prevState.count +1
    };
 });

    }
    handleMinysOne(){
    this.setState((prevState)=>{ 
        return{ count: prevState.count -1
        };
    });

    }
    handleReset(){
        this.setState((prevState)=>{ 
            return{ count: 0
            };
        });
    }
    
    render() {
        return(
            <div>
            <h1>count:{this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinysOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
            );
    }
}
Counter.defaultProps ={
    count : 0
};

ReactDOM.render(<Counter />,document.getElementById('app'));












/*let count =0;
   const addOne =()=>{ 
    count++;   
    renderCounterApp();};
   const minsOne =()=>{
    count --;
    renderCounterApp();
    }
   const reset =()=>{
       count =0;
       renderCounterApp();
   } 
    
   const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minsOne}>-1</button>
        <button onClick ={reset}>reset</button>
        </div>
        );

        ReactDOM.render(templateTwo,appRoot);

}
renderCounterApp();*/