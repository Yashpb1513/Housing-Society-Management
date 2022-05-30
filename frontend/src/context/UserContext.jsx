import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState('');
  const [type, setType] = useState('');
  const [subType, setSubType] = useState('');
  const [username, setUsername] = useState(false);

  const setTypes = (t, s) => {
    if (t === "resident") {
       setType("resident");
    } else if (type === "admin") {
      setType("admin");
    }
    if(s === 'staff'){
      setSubType("staff");
    }
    else{
      setSubType("none");
    }
  }

const getTypes = () => {
  return {
    type: type,
    subType: subType
  }
}

  const manageToken = (token) => {
    if (token !== '') {
      setToken(token);
    }
    else {  
      setToken('');
    }
  };
  const manageUser = (user, n) => {
    if (token !== '') {
      setUser(true);
      setUsername(n);
    }
    else {
      setUser(false);
    }
  };
  const logout = () => {
    setUser(false);
    setToken('');
    setUsername('');
    localStorage.removeItem("user");
  };
  const getUserStatus = () => {
    return user;
  };
  const getUserName = () => {
    return username;
  };
  const getToken = () => {
    return token;
  };
  return <UserContext.Provider value={{manageToken, manageUser, getUserStatus, getToken, logout, getTypes, setTypes, getUserName}}>{children}</UserContext.Provider>;
};

