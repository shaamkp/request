import React, { useEffect , useState} from "react";
import axios from "axios";

export default function Request() {

    const [users, setUsers] = useState([])
        useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(function (response) {
        console.log(response.data.data);
        setUsers(response.data.data);
        console.log(users)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);
  let renderItems = () =>{
      return users.map((user) => (
        <div key={user.id} style = {{border:"1px solid #000"}}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>   
            <h1>
                {user.first_name} {user.last_name}
            </h1>
            <a href = {`mailto:${user.email}`}>{user.email}</a>
        </div>

      ))
  } 
  return (
    <div>
      {renderItems()}
    </div>
  );
}
