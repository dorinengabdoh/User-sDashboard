import React from 'react'
import useLocalStorageState from "use-local-storage-state";


export const Delete = () => {
  const [value, setValue] = useLocalStorageState("user", {
    defaultValue: {},
  });
  const deleteAcount = () => {
    localStorage.removeItem(user);
  };
  return (

    <div className="App">
    <button onClick={deleteAcount}>Delete</button>
  </div>
  )
}
