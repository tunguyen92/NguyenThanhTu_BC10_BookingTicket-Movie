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
// import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import News from "./pages/News/News";
// import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
// import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
// import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
// import ListFilm from "./pages/ListFilm/ListFilm";
import User from "./pages/Admin/User/User";

export const history = createBrowserHistory();

const CheckoutTemplateLazy = lazy(() =>
  import("./templates/CheckoutTemplate/CheckoutTemplate")
);

// const HomeTemplateLazy = lazy(() =>
//   import("./templates/HomeTemplate/HomeTemplate")
// );

const AdminTemplateLazy = lazy(() =>
  import("./templates/AdminTemplate/AdminTemplate")
);

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router history={history}>
        <Switch>
          <HomeTemplate
            path="/Nhom12_BC10_BookingTicket-Movie"
            exact
            Component={Home}
          />
          <HomeTemplate
            path="/contact"
            exact
            Component={lazy(() => import("./pages/Contact/Contact"))}
          />
          <HomeTemplate
            path="/news"
            exact
            Component={lazy(() => import("./pages/News/News"))}
          />
          <HomeTemplate
            path="/profile"
            exact
            Component={lazy(() => import("./pages/Profile/Profile"))}
          />
          <HomeTemplate
            path="/danh-sach-phim"
            exact
            Component={lazy(() => import("./pages/ListFilm/ListFilm"))}
          />

          <HomeTemplate
            path="/detail/:id"
            exact
            Component={lazy(() => import("./pages/Detail/Detail"))}
          />

          <AdminTemplateLazy path="/admin" exact Component={Dashboard} />
          <AdminTemplateLazy path="/admin/films" exact Component={Films} />
          <AdminTemplateLazy
            path="/admin/showtimes"
            exact
            Component={ShowTime}
          />

          <UserTemplate path="/login" exact Component={Login} />
          <UserTemplate path="/register" exact Component={Register} />

          <AdminTemplateLazy path="/admin" exact Component={Dashboard} />
          <AdminTemplateLazy path="/admin/films" exact Component={Films} />
          <AdminTemplateLazy
            path="/admin/films/add-new"
            exact
            Component={AddNew}
          />
          <AdminTemplateLazy
            path="/admin/films/edit/:id"
            exact
            Component={Edit}
          />
          <AdminTemplateLazy
            path="/admin/films/showtime/:id/:tenPhim"
            exact
            Component={ShowTime}
          />
          <AdminTemplateLazy path="/admin/" exact Component={Dashboard} />
          <AdminTemplateLazy path="/admin/user" exact Component={User} />

          {/* <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} /> */}
          <HomeTemplate path="/" exact Component={Home} />

          <CheckoutTemplateLazy
            path="/checkout/:id"
            exact
            Component={Checkout}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
