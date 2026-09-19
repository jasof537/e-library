import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if(savedUser) {
            setUser(savedUser);
        }
        setLoading(false);
    },[]);

    const login = async (req) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(req)
            });

            const data = await response.json();

            if(!data.success) {
                throw new Error(data.message || 'Login failed. please try again.');
            } 

            localStorage.setItem("user", JSON.stringify(data));
            window.location.href='/home';
        } catch (err) {
            setError(err.message || 'something went wrong when login, please try again!');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user", null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout, loading, setLoading, error, setError}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);