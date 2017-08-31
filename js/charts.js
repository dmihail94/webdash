let globalOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            barPercentage: 0.5,
            ticks: {
                display: true,
                fontSize: 14
            },
            gridLines: {
                display: true,
                drawBorder: false
            }
        }],
        yAxes: [{
            ticks: {
                display: true,
                fontSize: 14
            },
            gridLines: {
                display: true,
                drawBorder: false
            }
        }]
    }
}

//First Chart

var ctxH = document.getElementById("chart1h").getContext('2d');
var ctxD = document.getElementById("chart1d").getContext('2d');
var ctxW = document.getElementById("chart1w").getContext('2d');
var ctxM = document.getElementById("chart1m").getContext('2d');

//hourly chart
var hourly = new Chart(ctxH, {
    type: 'line',
    data: {
        labels: ["00-01", "02-03", "04-05", "06-07", "08-09", "10-11", "12-13", "14-15", "16-17", "18-19", "20-21", "22-23"],
        datasets: [{
            data: [50, 100, 80, 250, 400, 300, 400, 150, 250, 400, 500, 400],
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: "rgba(57, 48, 113, 0.2)",
            pointBorderWidth: 2,
            pointBackgroundColor: "white",
            borderColor: "rgba(47, 89, 162, 0.86)",
            pointRadius: 5

        }]
    },
    options: globalOptions
});

//daily chart
var daily = new Chart(ctxD, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            data: [200, 600, 350, 250, 700, 500, 400],
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: "rgba(57, 48, 113, 0.2)",
            pointBorderWidth: 2,
            pointBackgroundColor: "white",
            borderColor: "rgba(47, 89, 162, 0.86)",
            pointRadius: 5

        }]
    },
    options: globalOptions
});

//chart weekly
var weekly = new Chart(ctxW, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [500, 1000, 750, 1500, 2000, 1500, 1750, 2200, 1500, 2000, 1750],
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: "rgba(57, 48, 113, 0.2)",
            pointBorderWidth: 2,
            pointBackgroundColor: "white",
            borderColor: "rgba(47, 89, 162, 0.86)",
            pointRadius: 5

        }]
    },
    options: globalOptions
});

//monthly chart
var monthly = new Chart(ctxM, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            data: [1000, 2000, 1500, 3500, 3000, 2500, 1750, 4200, 6500, 4000, 3750, 5000],
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: "rgba(57, 48, 113, 0.2)",
            pointBorderWidth: 2,
            pointBackgroundColor: "white",
            borderColor: "rgba(47, 89, 162, 0.86)",
            pointRadius: 5,
            maintainAspectRatio: true

        }]
    },
    options: globalOptions
});

//Second chart
var ctx2 = document.getElementById("chart2").getContext('2d');

var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        datasets: [{
            data: [300, 600, 350, 250, 550, 500, 400],
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: "rgb(52, 90, 187)",
            pointBorderWidth: 2,
            pointBackgroundColor: "white",
            borderColor: "rgba(47, 89, 162, 0.86)",
            pointRadius: 5

        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
              display: true,
              text: 'Daily Trafic',
              padding:10
          },
        legend: {
            display: false
        }
    }
});

//Third chart
var ctx3 = document.getElementById("chart3").getContext('2d');

var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Mobile"],
        datasets: [{
            data: [40, 20, 40],
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: "rgb(52, 90, 187)",
            pointBorderWidth: 2,
            pointBackgroundColor: "white",
            borderColor: "rgba(47, 89, 162, 0.86)",
            pointRadius: 5,
            backgroundColor: [
                'rgb(52, 90, 187)',
                '#64cd83',
                'steelblue'

            ],

        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
              display: true,
              text: 'Mobile Users',
              padding:10
          },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: 'rgba(2, 2, 2, 0.7)',
                fontSize: 16,
                boxWidth: 20,
                padding: 40
            }
        }
    }
});