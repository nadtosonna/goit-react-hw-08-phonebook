import { Loader } from "components/Loader/Loader";
import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;