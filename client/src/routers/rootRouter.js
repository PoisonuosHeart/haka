import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from '../pages/MainPage'
// import {RegistrationPage} from '../pages/RegistrationPage'
import {SendTarget} from '../pages/SendTarget'
import {RegistrationPage} from '../pages/RegistrationPage'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path = "/" exact><MainPage/></Route> 
            {/* <Route path = "/registration" exact><RegistrationPage/></Route> */}
            <Route path= "/registration"><RegistrationPage/></Route>
            <Route path = "/sendtarget" exact><SendTarget/></Route>
            <Redirect to ="/"/>
        </Switch>
    )
}