import React, { createContext, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RouteContainer,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import TaskComponent from "./components/TaskComponent";
import RenderPropComponent from "./components/RenderPropsComponent";
import TestComponent from "./components/ButtonComponent";
import I18NComponent from "./I18NComponent";
import ErrorBoundary from "./components/ErrorBoundary";
import { counterReducer } from "./reducers/CounterReducer";
const Counter = lazy(() => import("./components/Counter"));
const ReduxCounter = lazy(() => import("./components/ReduxCounter"));

export const AnupamaContext = createContext({ favoriteCharacter: "Anupama" });
export const BreakingBadContext = createContext();

const myReduxStore = createStore(counterReducer);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
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
                  <AnupamaContext.Provider
                    value={{ favoriteCharacter: "Anupama" }}
                  >
                    <BreakingBadContext.Provider
                      value={{
                        favoriteCharacter: "Walter White",
                        worstCharacter: "Jessie Pinkman",
                      }}
                    >
                      <Counter />
                    </BreakingBadContext.Provider>
                  </AnupamaContext.Provider>
                </ErrorBoundary>
              }
            />
            <Route path={"/render"} element={<RenderPropComponent />} />
            <Route path={"/i18"} element={<I18NComponent />} />
            <Route path={"/redux-counter"} element={<ReduxCounter />} />
            <Route path={"*"} element={<h1>404</h1>} />
          </RouteContainer>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

const MyApp = () => {
  return (
    <Provider store={myReduxStore}>
      <App />
    </Provider>
  );
};

export default MyApp;

// Lazy Loading === Code Splitting

//     App
//      |
//    Counter
//      |
//    ChildComponent
//  ........
//      |GGGGGGGComponent

// Every Context has a provider and a consumer.
// Provider is a component that provides the context value;
