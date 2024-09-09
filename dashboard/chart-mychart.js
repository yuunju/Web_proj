const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");
const ctx3 = document.getElementById("myChart3");
const ctx4 = document.getElementById("myChart4");
drawChart(ctx1, "line");
drawChart(ctx2, "bar");
drawChart(ctx3, "pie");
drawChart(ctx4, "line");

function drawChart(ctx, type) {
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
}
