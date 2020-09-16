import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./redux";
import { FakeForm } from "./pages";

const App = () => (
  <StoreProvider store={store}>
    <FakeForm />
  </StoreProvider>
);

export default App;
