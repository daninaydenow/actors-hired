import { Route, Navigate } from "react-router-dom";
const ProtectedRoute = ({auth, component: Component, ...rest}) => {
      return(
          <Route {...rest} />
      )
}

export default ProtectedRoute;
