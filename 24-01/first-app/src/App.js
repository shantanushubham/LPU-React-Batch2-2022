import React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RouteContainer,
} from "react-router-dom";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import TaskComponent from "./components/TaskComponent";
import Counter from "./components/Counter";
import higherOrderComponent from "./components/HOC";
import LOC from "./components/LOC";
import RenderPropComponent from "./components/RenderPropsComponent";
import TestComponent from "./components/ButtonComponent";
import I18NComponent from "./I18NComponent";
import ErrorBoundary from "./components/ErrorBoundary";

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
                  <TestComponent />
                  <Outlet />
                </>
              }
            >
              <Route path={"help"} element={<h1>Help</h1>} />
            </Route>
          </Route>
          <Route path={"/task"} element={<TaskComponent />} />
          <Route
            path={"/count"}
            element={
              <ErrorBoundary>
                <Counter />
              </ErrorBoundary>
            }
          />
          <Route path={"/render"} element={<RenderPropComponent />} />
          <Route path={"/i18"} element={<I18NComponent />} />
          <Route path={"*"} element={<h1>404</h1>} />
        </RouteContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
