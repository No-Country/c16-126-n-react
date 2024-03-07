import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'
import { inicioSesion } from '../data/getData'
import { types } from './types/types'


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged:!!user,
        user:user,
    }
}


const AuthProvider = ({children}) => {

const [authState, dispatch] = useReducer(authReducer, {} ,init);

    
    const login = async ({email,password}) => {

        const res = await inicioSesion({email,password});

        if(res.error) return alert(res.data.error)
        

        console.log(res.cliente)
        const action = {
            type:types.login,
            payload:res.cliente
        }


        localStorage.setItem('user', JSON.stringify(res.cliente));
        dispatch(action)

    }


    const logout = () => {
        localStorage.removeItem('user');

        const action = {
            type:types.logout
        };

        dispatch(action);
    }
    
  return (
    <AuthContext.Provider value={{...authState,login,logout,dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
