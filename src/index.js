import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Assignments from "./pages/Assignments";
import NoPage from "./pages/NoPage";
import More from './pages/More';

export default function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Team" element={<Team />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="More" element={<More />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}
document.title = 'QUArch'
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

