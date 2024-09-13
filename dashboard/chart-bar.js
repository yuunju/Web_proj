var dom = document.getElementById("chart");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

// 서버에서 데이터 가져오기
fetch("http://localhost:3030/data")
  .then((response) => response.json())
  .then((data) => {
    // 데이터 변환
    var xAxisData = data.map((item) => item.직영책임부서);
    var seriesData = data.map((item) => item.DataCount); // 수정된 부분: 단순 값 배열로 변환

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
          data: seriesData, // 수정된 부분
          type: "bar",
        },
      ],
    };

    // ECharts 옵션 설정
    myChart.setOption(option);
  })
  .catch((error) => {
    console.error("데이터 가져오기 오류:", error);
  });

window.addEventListener("resize", myChart.resize);
