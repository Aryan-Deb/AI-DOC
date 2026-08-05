import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { me } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await me();

        setUser(data);
      } catch {
        localStorage.removeItem("token");
      }

      setLoading(false);
    };

    if (localStorage.getItem("token")) {
      init();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);