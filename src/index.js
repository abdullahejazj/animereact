import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import DataContext from "./context/DataContext";
import DataProvider from "./context/DataProvider";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <DataContext.Consumer>
          {(data) => <App data={data} />}
        </DataContext.Consumer>
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
