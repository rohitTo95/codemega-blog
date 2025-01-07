import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

// Headers 
import HomeHeader from "./Components/Header/HomeHeader/HomeHeader";
import DefaultHeader from "./Components/Header/DefaultHeader/DefaultHeader";
import AdminHeader from "./Components/Header/AminHeader/AdminHeader";
//Footer
import Footer from "./Components/Footer/Footer";
// Pages 
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AllPostPage from "./Pages/AllPostsPage/AllPostPage";
import AdminLoginPage from "./Pages/AdminLogin/AdminLogin";
import PostView from "./Pages/PostView/PostView";
// Dashboad page 
import OverviewPage from "./Pages/DashboardPages/OverviewPage/OverviewPage";
import UsersPage from "./Pages/DashboardPages/UserListPage/UserListPage";
import CategoriesTagsPage from "./Pages/DashboardPages/CategoriesAndTagsPage/CategoryTagList";
import AdminPostsView from "./Pages/DashboardPages/PostsPage_Admin_View/PostsPage";
import SettingsPage from "./Pages/DashboardPages/SettingsPage/SettingsPage";
// Error Page 
import ErrorPage from "./Pages/Error404Page/ErrorPage";

const Site_URL = import.meta.env.VITE_BASE_URL.replace(/\/+$/, "");

const HomePageLayout = () => (
  <>
    <HomeHeader />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const DefaultLayout = () => (
  <>
    <DefaultHeader />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const AdminPanelLayout = () => (
  <>
    <AdminHeader />
    <main>
      <Outlet />
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect `/` to `/home` */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Home Layout */}
        <Route path="/home" element={<HomePageLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Admin Layout */}
        <Route path={`/admin/dashboard`} element={<AdminPanelLayout />}>
          <Route path="overview" element={<OverviewPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="category-tag-list" element={<CategoriesTagsPage />} />
          <Route path="posts" element={<AdminPostsView />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Default Layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog-posts" element={<AllPostPage />} />
          <Route path="/post" element={<PostView />} />
          <Route path="/user/admin" element={<AdminLoginPage />} />
        </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
