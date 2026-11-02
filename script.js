const ctx = document.getElementById("revenueChart");

new Chart(ctx, {
  type: "line",

  data: {
    labels: [
      "Week 1", "Week 2", "Week 3",
      "Week 4", "Week 5", "Week 6",
      "Week 7", "Week 8", "Week 9",
      "Week 10", "Week 11", "Week 12"
    ],

    datasets: [
      {
        label: "Treated Market",
        data: [100,104,102,108,110,109,125,128,130,132,135,138],
        borderColor: "#54d6ee",
        tension: 0.3
      },
      {
        label: "Donor Market A",
        data: [98,100,101,103,105,106,108,109,111,112,114,115],
        borderColor: "#f6bd60",
        tension: 0.3
      },
      {
        label: "Donor Market B",
        data: [95,97,99,100,102,103,104,106,107,109,110,112],
        borderColor: "#a78bfa",
        tension: 0.3
      }
    ]
  },

  options: {
    responsive: true
  }
});
