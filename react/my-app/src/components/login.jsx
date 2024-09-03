import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직을 여기에 추가
    console.log("Logging in with:", username, password);
  };

  const handleJoin = () => {
    navigate("/join"); // "join" 페이지로 이동
  };

  return (
    <div
      id="wrap"
      className="container-fluid p-4"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="row">
        <div
          className="container-fluid bg-white"
          style={{ maxWidth: "1200px", borderRadius: "20px" }}
        >
          <div className="row">
            {/* 입력폼 */}
            <form onSubmit={handleLogin}>
              <div className="col-12">
                <h1 className="my-5 text-center">Login</h1>
                <div
                  id="alert"
                  className="alert alert-success"
                  role="alert"
                  style={{ display: "none" }}
                >
                  로그인 성공했습니다.
                </div>
                <div className="mb-3 d-flex flex-row">
                  <div className="d-flex me-2 justify-content-center align-items-center">
                    <i className="fa-solid fa-user fa-xl"></i>
                  </div>
                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      name="inputName"
                      placeholder="admin"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex flex-row">
                  <div className="d-flex me-2 justify-content-center align-items-center">
                    <i className="fa-solid fa-lock fa-xl"></i>
                  </div>
                  <div style={{ width: "100%" }}>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      name="inputPassword"
                      placeholder="1234"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* 버튼들 */}
                <div className="mb-3 d-flex flex-row justify-content-center align-items-center gap-3">
                  <div className="text-center my-5">
                    <button type="submit" className="btn btn-primary">
                      로그인
                    </button>
                  </div>
                  <div className="text-center my-5">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleJoin}
                    >
                      회원가입
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
