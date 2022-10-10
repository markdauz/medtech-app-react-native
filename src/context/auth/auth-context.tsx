import { useReducer, createContext, ReactNode } from 'react';

import { initialState, authReducer } from './reducers/index';
import { login, logout } from './actions/index';

const AuthContext = createContext({});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const context = { state, dispatch };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
