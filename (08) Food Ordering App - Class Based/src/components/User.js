import { useEffect, useState } from "react";

const User = (props) => {
  const [Count] = useState(0);
  const [Count2] = useState(10);
  const [UserData, setUserData] = useState({
    name : "dummy_value",
    location : "dummy_location",
    avatar_url : "",
  });

  useEffect(() => {
    fetchData();
  }, [1]);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/rahulnainala");

    const json = await data.json();

    console.log(json);
   
    setUserData({
      name: json.name,
      location: json.location,
      avatar_url : json.avatar_url,
  });
  };
  return (
    <div className="user-card">
      <img src={UserData.avatar_url}/>
      <h3>Count : {Count}</h3>
      <h3>Count2 : {Count2}</h3>
      <h2>Name : {UserData.name}</h2>
      <h3>Location : {UserData.location}</h3>
      <h4>Contact : @formlessdrac</h4>
    </div>
  );
};

export default User;
