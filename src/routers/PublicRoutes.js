import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoutes = ({
    component: Component,
    ...rest
}) => {
    return (
     <Route {...rest}
        component={(props)=>{
            <Component {...props} />
        }}
     />
    )
}

export default PublicRoutes
