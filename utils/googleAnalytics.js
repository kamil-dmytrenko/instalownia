import ReactGA from "react-ga"

const initGA = () => {
  ReactGA.initialize("UA-122998941-5")
};

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
};

export default {initGA, logPageView};
