import { usePersistedState } from "../hooks/usePersistedState";
import AuthContext from "./AuthContext";
import { users } from "../data/users";
import storageKeys from "../constants/storageKeys";

const AuthProvider = ({ children }) => {
  const [loggedIn, setIsLoggedIn] = usePersistedState(
    storageKeys.isLogedin,
    false
  );
  const [username, setUsername] = usePersistedState(storageKeys.username, []);
  const [accessLevel, setAccessLevel] = usePersistedState(
    storageKeys.accessLevel,
    []
  );

  function login(username, password) {
    for (const user of users) {
      if (username === user.user && password === user.password) {
        setIsLoggedIn(true);
        setUsername(username);
        setAccessLevel(user.accessLevel);
      }
    }
  }

  function logout() {
    setIsLoggedIn(false);
    setUsername("");
    setAccessLevel(2);
  }

  const providerValues = {
    login: login,
    logout: logout,
    username: username,
    loggedIn: loggedIn,
    accessLevel: accessLevel,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
