var dom = document.getElementById("barchart");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

// JSON 파일 경로
var jsonFilePath = "data1.json";

// JSON 파일을 비동기로 로드
fetch(jsonFilePath)
  .then((response) => response.json())
  .then((data) => {
    // 데이터 변환
    var xAxisData = data.map((item) => item.name);
    var seriesData = data.map((item) => ({
      value: item.value,
      itemStyle: item.name === "도장" ? { color: "#a90000" } : {},
    }));

    var option = {
      xAxis: {
        type: "category",
        data: xAxisData,
        axisLabel: {
          rotate: 45, // X축 레이블 회전
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: seriesData,
          type: "bar",
        },
      ],
    };

    // ECharts 옵션 설정
    myChart.setOption(option);
  })
  .catch((error) => {
    console.error("Error loading JSON file:", error);
  });

window.addEventListener("resize", myChart.resize);
