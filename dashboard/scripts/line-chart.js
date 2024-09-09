// scripts/chart.js

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["월", "계획 공정률", "실제 공정률"],
    ["1월", 1.4, 2],
    ["2월", 4, 3],
    ["3월", 6, 5],
    ["4월", 10.4, 10.1],
  ]);

  var options = {
    title: "공정률 추이",
    backgroundColor: "transparent",
    textStyle: {
      color: "white", // 범례 텍스트 색상 설정
    },
    hAxis: {
      textStyle: { color: "white" },
      titleTextStyle: { color: "white" },
    },
    vAxis: {
      textStyle: { color: "white" },
      titleTextStyle: { color: "white" },
    },
    titleTextStyle: { color: "white" },
    legend: { position: "bottom", textStyle: { color: "white" } },
  };

  var chartContainer = document.getElementById("line_chart");
  chartContainer.style.width = "700px"; // Adjust width
  chartContainer.style.height = "200px"; // Adjust height

  var chart = new google.visualization.LineChart(chartContainer);
  chart.draw(data, options);
}
