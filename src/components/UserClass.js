import { config } from "process";
import React from "react";

 class UserClass extends React.Component {
    constructor (props){
        super(props)
        console.log(props)

        this.state ={
            // count: 0,
            config:""
        }

    }
     
   async componentDidMount(){
      const gitData = await fetch("https://api.github.com/users/devsm9");
      const jsonGitData = await gitData.json();
      this.setState({
        config :jsonGitData
      })
    }
    
  render() {
    const {name, location ,bio ,public_repos,avatar_url} = this.state.config
    return (

    <div className="user-info">
        {/* <h2 className="user-infoh">Count :{this.state.count}</h2> */}
        {/* <button onClick={()=>{this.setState({count:this.state.count+1}) }}>Increment</button> */}
        
        <img className="git-profile" src={avatar_url} alt="Git Profile" width="60" height="60"></img>
        <h4 className="user-infoh">Name :{name}</h4>
        <h4 className="user-infoh">Location:{location}</h4>
        <h4 className="user-infoh">Information:{bio}</h4>
        <h4 className="user-infoh">Public Repos:{public_repos}</h4>
    </div>
    );
  }
}

export default UserClass;


