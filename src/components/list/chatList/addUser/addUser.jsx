import React from "react";
import "./addUser.css";
export const AddUser = () => {
   return (
      <div className="addUser">
         <form action="">
            <input type="text" placeholder="Username" name="username" />
            <button>Search</button>
         </form>
         <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Sam Sam</span>
            </div>
            <button>Add User</button>
         </div>
      </div>
   );
};
