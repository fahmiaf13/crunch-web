import "./App.css";
import Router from "./router";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <ProSidebarProvider>
      <Router />
    </ProSidebarProvider>
  );
}

export default App;
