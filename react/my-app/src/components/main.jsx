// src/MonitoringPage.js
import React, { useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Chart, registerables } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import data from "./data.json";
// 차트 모듈
// npm i chart.js react-chartjs-2
// 부트스트랩 모듈
// npm install bootstrap react-bootstrap chart.
Chart.register(...registerables);

const MonitoringPage = () => {
  useEffect(() => {
    const ctx1 = document.getElementById("myChart1");
    const ctx2 = document.getElementById("myChart2");
    const ctx3 = document.getElementById("myChart3");
    const ctx4 = document.getElementById("myChart4");

    const drawChart = (ctx, type) => {
      new Chart(ctx, {
        type: type,
        data: {
          labels: ["FCAW", "EGW", "FCSA", "FAB", "SAW"],
          datasets: [
            {
              label: "용접불량률%",
              data: [12, 19, 3, 5, 2],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    drawChart(ctx1, "line");
    drawChart(ctx2, "bar");
    drawChart(ctx3, "pie");
    drawChart(ctx4, "line");
  }, []);

  return (
    <Container fluid className="p-4" style={{ backgroundColor: "#eee" }}>
      <Container
        fluid
        className="p-4"
        style={{
          backgroundColor: "white",
          maxWidth: "1200px",
          borderRadius: "20px",
        }}
      >
        <Row>
          <div className="center" style={{ height: "100px" }}>
            <h4
              className="center p-2 border border-2 rounded-pill"
              style={{ width: "100%" }}
            >
              공정현황 대시보드
            </h4>
          </div>
        </Row>
        <Row>
          <Col
            id="aside"
            className="col-4 d-flex flex-column justify-content-between"
          >
            <div className="aside-top">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>용접현황</Accordion.Header>
                  <Accordion.Body>용접현황1</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>설계현황</Accordion.Header>
                  <Accordion.Body>설계현황1</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>개정도현황</Accordion.Header>
                  <Accordion.Body>개정도현황1</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="aside-bottom">
              <p>홍길동 님, 환영합니다.</p>
              <a href="#logout">로그아웃</a>
            </div>
          </Col>
          <Col id="section" className="col-8">
            <Row>
              <Col className="border" style={{ height: "300px" }}>
                <canvas id="myChart1"></canvas>
              </Col>
              <Col className="border" style={{ height: "300px" }}>
                <canvas id="myChart2"></canvas>
              </Col>
              <Col className="border" style={{ height: "300px" }}>
                <canvas id="myChart3"></canvas>
              </Col>
              <Col className="border" style={{ height: "300px" }}>
                <canvas id="myChart4"></canvas>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .aside-top {
            margin-bottom: 20px;
          }

          .aside-bottom {
            margin-top: 20px;
          }

          .border {
            border: 1px solid #dee2e6;
            border-radius: 5px;
          }
        `}
      </style>
    </Container>
  );
};

export default MonitoringPage;
