/** This is a class based component */

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummydata",
        location: "defaultloc",
        avatar_url: "",
      },
    };

    console.log("Constructor is called");
  }
  async componentDidMount() {

    console.log("Component Did Mount Called")
    //API Calls
    const data = await fetch("https://api.github.com/users/rahulnainala");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    //console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update Called");
  }

  componentWillUnmount(){
    console.log("Component will unmount Called")
  }
  render() {

    console.log("Render is called");
    /**
     * defining const{name, location} so that i dont have to call
     * value as this.props.name
     */

    const { name, location, avatar_url, public_repos } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3>
          Count : {count}{" "}
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            {" "}
            Count Increase{" "}
          </button>
        </h3>
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location} </h3>
        <h3>Contact : @formlessdrac</h3>
        <h3>Number of Repos : {public_repos}</h3>
      </div>
    );
  }
}

export default UserClass;


/*********
 * 
 *  -----MOUNTING-----
 * 
 * Constructor (dummy data)
 * Render (dummy data)
 *          <HTML Dummy created>
 *      <API calls>
 *      <this.setState> ---> State Variable is updated
 * 
 * 
 *  ------UPDATE-------
 * 
 *          render(API data)
 *          <HTML (new API data)>
 *      then ComponentDidUpdate will be triggered
 *  
 */