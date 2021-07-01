import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

//hook para acceder el contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //efecto para hacer la comprobación de usuario (si existe o no) una sola vez
    useEffect(() => {
        //comprobamos cuando el estado de autenticación cambia
        const signOut = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return signOut //retornamos ese valor cuando salimos de la app 
    }, [])

    return ( 
        <AuthContext.Provider value={{user: user}}>
            {!loading && children}
        </AuthContext.Provider>
     );
}
 
export { AuthProvider, AuthContext, useAuth };