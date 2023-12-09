import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import User from "./pages/User";
import Form from "./pages/Form";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/users" element={<User />}></Route>
                    <Route path="/form" element={<Form />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;