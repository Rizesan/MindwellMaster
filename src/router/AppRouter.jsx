import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "../common/navbar";
import {HomePage} from "../pages/home";
import {AboutPage} from "../pages/about";
import {FormPage} from "../pages/form";
import {LoginPage} from "../pages/login";
import {ServicesPage} from "../pages/services";
import {Footer} from "../common/footer";
import {Dashpage} from "../pages/dashpage";
import {TodayPage} from "../pages/info/feelings/today";
import {ToolsPage} from "../pages/tools";
import {ProfilePage} from "../pages/profile";
import {UpdateProfile} from "../pages/form/formUser";
import {Profile} from "../components/profile";


export const AppRouter = () => {
    const userContext = JSON.parse(localStorage.getItem("user"))
    const requireAuth = (element) => {
        return userContext ? element : <></>;
    };

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/feelings-today" element={<TodayPage />} />
                <Route path="/dashboard" element={<Dashpage />} />
                <Route path={"/profile"} element={<ProfilePage/>}/>
                <Route path={"/profile-edit"} element={<Profile/>}/>
                <Route path={"/update-profile"} element={<UpdateProfile/>}/>
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer/>
        </Router>
    );
};
