let express = require("express");
let app = express();
let mysql = require("mysql");
const cors = require("cors");

//모듈 설치
//npm i nodemon express mysql
//npm i cors ejs

//CORS 허용
app.use(
  cors({
    origin: "*", // 모든 출처 허용 옵션. true 를 써도 된다.
  })
);

const port = process.env.PORT || 3030;

//뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect mysql database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "samsung_shipyard",
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  return res.json({
    error: false,
    message: "Welcome to dashboard node js.",
  });
});

// 대시보드 html 요청
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// 용접불량율 리스트 요청 - REST API
// URL : GET localhost:3030/list
app.get("/list1", (req, res) => {
  conn.query(
    "SELECT reason_code, COUNT(project_number) as count FROM five_welding_defect_rate WHERE usage_decision='보류' GROUP BY reason_code",
    (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        return res.status(500).json({
          error: true,
          message: "Database query error",
        });
      }

      let message = "";
      if (results === undefined || results.length == 0) {
        message = "welding table is empty";
      } else {
        message = "Successfully retrieved all welding";
      }

      return res.json({
        error: false,
        message: message,
        data: results,
      });
    }
  );
});
app.get("/list2", (req, res) => {
  conn.query(
    "select nde_code,inspection_method, usage_decision, count(project_number) as count from five_welding_defect_rate where nde_code='NC1' group by  nde_code,inspection_method, usage_decision order by  nde_code,inspection_method, usage_decision",
    (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        return res.status(500).json({
          error: true,
          message: "Database query error",
        });
      }

      let message = "";
      if (results === undefined || results.length == 0) {
        message = "welding table is empty";
      } else {
        message = "Successfully retrieved all welding";
      }

      return res.json({
        error: false,
        message: message,
        data: results,
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
