import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// creating a context
export const AuthContext = createContext();

// creating a provider

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));


 

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth  }}>
      {children}
    </AuthContext.Provider>
  );
};
