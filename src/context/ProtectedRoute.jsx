import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
    const {user, setError, loading} = useAuth();

    if(loading) {
        return <div>Loading authentication status ...</div>;
    }

    if(!user){
        setError('Please login!')
        return <Navigate to="/" replace/>
    }

    return <Outlet/>;
}

export default ProtectedRoute;