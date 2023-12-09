import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import User from "./pages/User";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/users" element={<User />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;