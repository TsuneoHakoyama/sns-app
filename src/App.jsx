import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

export function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
