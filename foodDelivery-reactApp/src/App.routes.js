import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/common/Header'
import Category from './pages/Category'
import SelectedItems from './pages/SelectedItems'
import Login from './pages/Login'
import PaymentOptions from './pages/PaymentOptions'
import OrderSuccess from './pages/OrderSuccess'
import AboutUs from './pages/AboutUs'

const appRoutes = [
    { path: '/', element: <Login /> },
    { path: '/category/:slug', element: <Category /> },
    { path: '/selected', element: <SelectedItems /> },
    { path: '/home', element: <Home /> },
    { path: "/payment-options", element: <PaymentOptions/>},
    { path: "/order-success", element: <OrderSuccess/>},
    { path: "/about-us", element: <AboutUs /> },
]

export const createRoute = (path, component, props, level) => {
    if (level) {
        return (
            <Route path={path} key={path} element={component} {...props}>
                {getApplicationRoutes(level)}
            </Route>
        )
    } else {
        return <Route path={path} key={path} element={component} {...props} />
    }
}

export const getApplicationRoutes = (routes) => {
    return routes.map((route) =>
        createRoute(route.path, route.element, route.props, route.level)
    )
}

const AppRouter = () => {
    const location = useLocation();
    const applicationRoutes = getApplicationRoutes(appRoutes);

    return (
        <div>
            {location.pathname !== '/' && <Header />}
            <Routes>{applicationRoutes}</Routes>
        </div>
    )
}

export default AppRouter
