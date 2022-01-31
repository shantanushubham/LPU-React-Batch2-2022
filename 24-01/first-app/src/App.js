import React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RouteContainer,
} from "react-router-dom";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import SumComponent from "./components/SumComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RouteContainer>
          <Route path={"/"} element={<h1>This is home page</h1>} />
          <Route path={"/about"} element={<h1>This is about page</h1>} />
          <Route path={"/contact"} element={<h1>This is contact page</h1>} />
          <Route path={"/signup"} element={<SignUpForm />}>
            <Route
              path={"test"}
              element={
                <>
                  <h1>Test</h1>
                  <Outlet />
                </>
              }
            >
              <Route path={"help"} element={<h1>Help</h1>} />
            </Route>
          </Route>
          <Route path={"*"} element={<h1>404</h1>} />
        </RouteContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
