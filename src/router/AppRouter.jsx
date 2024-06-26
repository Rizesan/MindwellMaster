import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "../common/navbar";
import {HomePage} from "../pages/home";
import {AboutPage} from "../pages/about";
import {FormPage} from "../pages/form";
import {LoginPage} from "../pages/login";
import {ServicesPage} from "../pages/services";
import {Footer} from "../common/footer";
import {Dashpage} from "../pages/dashpage";
import {PrivateRoute} from "./privateroute";

export const AppRouter = () => {
  return <>
      <Router>
          <Navbar/>
          <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path={"/services"} element={<ServicesPage/>}/>
                <Route path={"/dashboard"} element={
                    <PrivateRoute>
                        <Dashpage/>
                    </PrivateRoute>
                }/>
              <Route path="/form" element={<FormPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer/>
      </Router>
  </>
}