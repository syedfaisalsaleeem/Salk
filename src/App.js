import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import { theme } from "./Theme";
import Loader from "./Components/UI/Loader/Laoder";
import "aos/dist/aos.css";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

const Layout = lazy(() => import("./Hoc/Layout/Layout"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 199, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 700, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<Loader />}>
              <Layout>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Suspense fallback={<Loader />}>
                        <Home />
                      </Suspense>
                    )}
                  />
                  <Route
                    exact
                    path="/about"
                    render={() => (
                      <Suspense fallback={<Loader />}>
                        <About />
                      </Suspense>
                    )}
                  />
                  <Route
                    exact
                    path="/contact"
                    render={() => (
                      <Suspense fallback={<Loader />}>
                        <Contact />
                      </Suspense>
                    )}
                  />
                  <Route
                    exact
                    path="/privacy-policy"
                    render={() => (
                      <Suspense fallback={<Loader />}>
                        <PrivacyPolicy />
                      </Suspense>
                    )}
                  />
                </Switch>
              </Layout>
            </Suspense>
          )}
        />
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
