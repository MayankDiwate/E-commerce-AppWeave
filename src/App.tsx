import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/Header";
import "./globals.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { persistor, store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename="/">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
        <Toaster position="top-center" reverseOrder={false} />
      </PersistGate>
    </Provider>
  );
}

export default App;
