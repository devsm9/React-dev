import React from "react";

 class UserClass extends React.Component {
    constructor (props){
        super(props)
        console.log(props)

        this.state ={
            count: 0
        }

    }
        

  render() {
    const {name, location ,contact} = this?.props

    return (

    <div className="user-info">
        <h2 className="user-infoh">Count :{this.state.count}</h2>

        <button onClick={()=>{this.setState({count:this.state.count+1}) }}>Increment</button>

        <h2 className="user-infoh">Name :{name}</h2>
        <h2 className="user-infoh">Location</h2>
        <h3 className="user-infoh">Information</h3>
        <h4 className="user-infoh">Contact</h4>
    </div>
    );
  }
}

export default UserClass;


