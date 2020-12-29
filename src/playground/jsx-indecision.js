
console.log("still its app is runing");


//jsx-javascript Xml
const app ={
    title: 'indecision app',
   subtitle: 'put your life in the computer ',
    options: []
};


const onFormSubmit = (e) => {
     e.preventDefault();
   const option=e.target.elements.option.value;

     if(option){
        app.options.push(option);
        e.target.elements.option.value ='';
        render();

    }

};


const remove = () =>{
    
    app.options = [] ;
    render();
    
}
const onMakeDecision = ()=> {
    const randomNum = Math.floor(Math.random()* app.options.length)
    const option =app.options[randomNum];
    alert(option);

}



const appRoot = document.getElementById("app");


const render = () => {
    
    const template = (
        <div>
            
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ?'here are your option' : 'no option'}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>what should i do</button>
            <button onClick ={remove}>removeAll</button>
            <ol> {
                app.options.map( (option) =><li key ={option}>{option}</li>)
            
            }
              </ol>
           
           
            <form onSubmit = {onFormSubmit}>
              
              <input type='text' name='option'></input>
              <button>add</button>  
              
            </form>
        
        </div>
        
    );
    
    ReactDOM.render(template,appRoot);

}


render();


 