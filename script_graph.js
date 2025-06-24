const ctx = document.getElementById('fitnessChart').getContext('2d');

const customerData = {
  labels: ['Beginner', 'Intermediate', 'Advanced'],
  datasets: [{
    label: 'Fitness Score',
    data: [30, 60, 90], // Dummy data, replace with real data if needed
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(75, 192, 192, 0.5)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    borderWidth: 1
  }]
};

new Chart(ctx, {
  type: 'bar',
  data: customerData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
