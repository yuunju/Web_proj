let express = require("express");
let app = express();
let mysql = require("mysql");
const cors = require("cors");

// CORS 활성화
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
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "csv3",
});
conn.connect();

// MySQL 연결
conn.connect((err) => {
  if (err) {
    console.error("MySQL 연결 오류:", err);
    return;
  }
  console.log("MySQL에 연결됨");
});

app.get("/", (req, res) => {
  return res.json({
    error: false,
    message: "Welcome to dashboard node js.",
  });
});

// API 엔드포인트 정의
app.get("/california", (req, res) => {
  const query = `
    WITH FilteredData AS (
      SELECT 
        \`직영책임부서\`
      FROM 
        csv3
      WHERE 
        STR_TO_DATE(\`작업 출도실적\`, '%Y-%m-%d') IS NOT NULL
        AND STR_TO_DATE(\`작업 출도계획\`, '%Y-%m-%d') IS NOT NULL
        AND STR_TO_DATE(\`작업 출도실적\`, '%Y-%m-%d') < STR_TO_DATE(\`작업 출도계획\`, '%Y-%m-%d')
    )
    SELECT 
      \`직영책임부서\`,
      COUNT(*) AS DataCount
    FROM 
      FilteredData
    GROUP BY 
      \`직영책임부서\`;
      `;
  conn.query(query, (err, results) => {
    if (err) {
      console.error("MySQL 쿼리 오류:", err);
      res.status(500).json({ error: "데이터베이스 쿼리 오류" });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log("Listening on port %d", port);
});

module.exports = app;
