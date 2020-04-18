import React  from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios'



class App extends  React.Component {
  constructor(props){
    super(props);
    this.state={
      // candidates:"",
      // questions:"",
      // applications:""
    }
  }

  
   async componentWillMount(){
 
   await  axios.get("http://localhost:5000/candidates")
      .then(res => this.setState({candidates:res}))
      .catch((e) => console.log("error.....", e))
    
   await  axios.get("http://localhost:5000/questions")
      .then(res => this.setState({questions:res}))
      .catch((e) => console.log("error.....", e))
    
   await  axios.get("http://localhost:5000/applications")
      .then(res => this.setState({applications:res.data.applications}))
      .catch((e) => console.log("error.....", e))
   
   } 

render(){
  const { candidates, questions, applications} = this.state
  console.log(applications)
  return(
    <div>
      {/* {JSON.stringify(candidates.candidates)} */}
        <select>
        {
          
          candidates.map((item, i) => {
                   console.log("item...", item)
                return (
                  <option key={i} value={item.id}>{item.id}</option>
                )
        })}
        </select>

    </div>
  )}

}

export default App;
