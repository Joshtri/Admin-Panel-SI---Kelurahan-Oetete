const labels = ["Laki-Laki", "Perempuan"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],

      data: [2, 10],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    plugins:{
      title:{
        display: true,
        text: 'Custom Chart Title'
      }
    }
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);