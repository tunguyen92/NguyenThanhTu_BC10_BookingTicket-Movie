import "antd/dist/antd.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Detail from "./pages/Detail/Detail";
// import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";

export const history = createBrowserHistory();

const CheckoutTemplateLazy = lazy(() =>
  import("./templates/CheckoutTemplate/CheckoutTemplate")
);

function App() {
  
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} />

        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/add-new" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate
          path="/admin/films/showtime/:id/:tenPhim"
          exact
          Component={ShowTime}
        />
        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        {/* <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} /> */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <CheckoutTemplateLazy
            path="/checkout/:id"
            exact
            Component={Checkout}
          />
        </Suspense>
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
