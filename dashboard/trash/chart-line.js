$(function () {
  //get the line chart canvas
  var ctx = $("#line-chartcanvas");

  //line chart data
  var data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "계획 누계공정률",
        data: [1, 2.5, 4, 5, 7],
        backgroundColor: "blue",
        borderColor: "lightblue",
        fill: false,
        lineTension: 0,
        radius: 2,
      },
      {
        label: "실제 공정률",
        data: [1, 3, 6, 9, 10],
        backgroundColor: "green",
        borderColor: "lightgreen",
        fill: false,
        lineTension: 0,
        radius: 2,
      },
    ],
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "공정진행",
      fontSize: 13,
      fontColor: "#eee",
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#eee",
        fontSize: 11,
      },
    },
  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
});
