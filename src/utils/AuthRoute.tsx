import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return {
        isAuthenticated
    }
}

const AuthRoute: React.FC<any> = ( ) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
       return <Navigate to="/login" />
    }
    return <div><Outlet/></div>
};

export default AuthRoute;

