import React from "react";
import CreatePlayer from "./pages/CreatePlayer";
import EditPlayer from "./pages/EditPlayer";
import SearchPlayer from "./pages/SearchPlayer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="my-5 mx-5">
          <Navbar />
          <Routes>
            <Route path="/" element={<CreatePlayer />} />
            <Route path="/edit" element={<EditPlayer />} />
            <Route path="/search" element={<SearchPlayer />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
