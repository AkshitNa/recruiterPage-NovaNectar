//For Routing
import {
  Outlet,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router";

//Layout
import {
  Footer,
  Header,
  Error,
  ReferEarn,
} from "./Components/Layout/IndexLayout";

//Pages
import {
  About,
  Blog,
  Contact,
  FAQ,
  HomeImages,
  Process,
  Testimonials,
} from "./Components/Home/ZHomeIndex";

//Map

import NovaNectarMap from "./Components/Home/NovaNectarMap";

//Toastify
import { ToastContainer } from "react-toastify";

//AppLayout
const AppLayout = () => {
  return (
    <div>
      <ScrollRestoration /> {/* To get to top */}
      <Header />
      <ToastContainer
        position="top-center"
        draggable={true}
        toastStyle={{ marginTop: "100px" }}
      />
      <main>
        <Outlet /> {/* Populate our other pages and components */}
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            {" "}
            <HomeImages />
            <About />
            <Process />
            <Blog />
            <Testimonials />
            <Contact />
            <FAQ />
          </>
        ),
      },
    ],
  },
  {
    path: "/process",
    element: <AppLayout />,
    children: [
      {
        path: "/process",
        element: (
          <>
            <Process />
            <Blog />
            <Testimonials />
          </>
        ),
      },
    ],
  },
  {
    path: "/blog",
    element: <AppLayout />,
    children: [
      {
        path: "/blog",
        element: (
          <>
            <Blog />
            <Testimonials />
            <Contact />
          </>
        ),
      },
    ],
  },
  {
    path: "/referAndEarn",
    element: <AppLayout />,
    children: [
      {
        path: "/referAndEarn",
        element: (
          <>
            <ReferEarn />
            <Blog />
            <Testimonials />
          </>
        ),
      },
    ],
  },
  {
    path: "/contact",
    element: <AppLayout />,
    children: [
      {
        path: "/contact",
        element: (
          <>
            {" "}
            <Contact />
            <NovaNectarMap/>
          </>
        ),
      },
    ],
  },
  {
    path: "/apply",
    element: <AppLayout />,
    children: [
      {
        path: "/apply",
        element: (
          <>
            {" "}
            <Navigate to="/" />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
