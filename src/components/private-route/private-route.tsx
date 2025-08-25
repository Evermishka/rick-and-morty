import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-provider';
import { ROUTES } from '../../constants';

type PrivateRouteProps = {
    children: React.ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const auth = useAuth();
    const location = useLocation();

    if (auth?.user === null) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location.pathname }} replace />;
    }

    return children;
};
