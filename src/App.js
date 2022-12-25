import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import AllRoutes from "./Routes/AllRoutes";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {AllRoutes.map((item, index) => {
          return item.private ? (
            <Route key={index} element={<PrivateRoute />}>
              <Route
                name={item.name}
                path={item.path}
                element={item.component}
                exact={true}
              />
            </Route>
          ) : (
            <Route key={index} element={<PublicRoute />}>
              <Route
                name={item.name}
                path={item.path}
                element={item.component}
                exact={true}
              />
            </Route>
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
