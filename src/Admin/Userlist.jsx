import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Auth/Firebase';
import { getAuth, onAuthStateChanged  } from "firebase/auth";
const Userlist = () => {
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const users = auth.fetchAllUsers;

  onAuthStateChanged(auth, (users) => {
  if (users) {
  
  const email = users.email;
  const uid = users.uid;
  } else {
    // User is signed out
    // ...
  }
});

  return (
    <div>
      <h2>All Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
       
          
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.email}</strong>
              <p>{`${user.email}`}</p>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Userlist;
