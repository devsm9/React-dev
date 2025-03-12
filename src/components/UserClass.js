import { config } from "process";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      // count: 0,
      config: "",
    };
  }

  async componentDidMount() {
    const gitData = await fetch("https://api.github.com/users/devsm9");
    const jsonGitData = await gitData.json();
    this.setState({
      config: jsonGitData,
    });
  }

  render() {
    const { name, location, bio, public_repos, avatar_url } = this.state.config;
    return (
      <div className="mt-6 h-40 w-75 mr-5  hover:bg-gray-100 border border-gray-200 rounded-lg shadow-sm flex items-center justify-between pl-3 pr-3">
        {/* <div className="flex justify-between items-center  "> */}
        <img
          className="w-22 h-22 rounded-full object-cover border-2 border-gray-300 shadow-md"
          src={avatar_url}
          alt="Git Profile"
        ></img>
         <div className="w-px h-16 bg-gray-400"></div>
        <div>
          <h4 className="user-infoh">Name :{name}</h4>
          <h4 className="user-infoh">Location:{location}</h4>
          <h4 className="user-infoh">Information:{bio}</h4>
          <h4 className="user-infoh">Public Repos:{public_repos}</h4>
        </div>
        </div>
      // </div>
    );
  }
}

{/* <h2 className="user-infoh">Count :{this.state.count}</h2> */}
{/* <button onClick={()=>{this.setState({count:this.state.count+1}) }}>Increment</button> */}
export default UserClass;
