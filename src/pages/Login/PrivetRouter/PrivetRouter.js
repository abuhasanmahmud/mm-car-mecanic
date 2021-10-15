import userEvent from '@testing-library/user-event';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './../../../Hooks/useAuth';


const PrivetRouter = ({children,...rest}) => {
    const {user,isLoding}=useAuth();
    if(isLoding){
        return  <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
         {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
        >
            
        </Route>
    );
};

export default PrivetRouter;