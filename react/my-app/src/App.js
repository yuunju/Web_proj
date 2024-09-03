import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
// 회원가입 페이지 컴포넌트도 추가해야 합니다.
import Join from "./components/join"; // Join 컴포넌트를 추가하세요.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
