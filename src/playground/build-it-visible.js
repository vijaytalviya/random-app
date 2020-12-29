class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle =this.handleToggle.bind(this);
        this.state ={
            visible : false
        };
    }
    handleToggle(){
            this.setState((prev)=>{
                return {
                    visible : !prev.visible
            };
            });
    }
    render(){
        return(
            <div>
        <h1>vibility Toggle</h1>
        <button onClick ={this.handleToggle}>
        { this.state.visible? "show details" : "hide details" }</button>
        { this.state.visible&& <p>hey this is vijay welcome!!</p>}
    
    
    </div>
        );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));




