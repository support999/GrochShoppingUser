import React, {createContext, useState} from 'react';

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(true);
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        auth,
        setAuth,
        firstLaunch,
        setFirstLaunch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
