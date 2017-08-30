//Toggle navbar
$('.hamburger').click(function() {
  $('.nav').toggleClass("hide");
  $('.nav').toggleClass("show");
  //At mobile screen width of main is 100% when the nav is hided
  $('main').toggleClass("main-show");
});

//Show notification on click
$('.bell-wrapp').click(function() {
  $('.notification').slideDown('fast');
  $('.glass').slideDown('fast');

});

var notifications = $('.notification li');

$('.notification li').append('<span class="remove">X</span>');

//Remove notification when X is clicked
function removeNot(event) {
  var target = $(event.target);
  if (target.is('.remove')) {
    target.parent().remove();
  }
}
$('.remove').click(removeNot);

//Close notification panel when X is clicked
$('.close').click(function() {
  $('.notification').slideUp('fast');
  $('.glass').slideUp('fast');

});

//Close the alert
$('.alert-close').click(function() {
  $(this).parent().remove();
});

//First Chart

var ctx = document.getElementById("chart1").getContext('2d');

var myChart = new Chart(ctx, {
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

//When the time is selected change the data of the chart1

function changeTime(event) {
  var target = $(event.target);
  //remove class from all li and add class just to li clicked
  $('li').removeClass('active-time');
  target.addClass('active-time');

  if (target.is('.hourly')) {
    myChart = new Chart(ctx, {
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
  } else if (target.is('.daily')) {
    myChart = new Chart(ctx, {
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
  } else if (target.is('.weekly')) {
    myChart = new Chart(ctx, {
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
  } else if (target.is('.monthly')) {
    myChart = new Chart(ctx, {
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
  }
}

$('li').click(changeTime);

//Second chart

var ctx2 = document.getElementById("chart2").getContext('2d');

var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [{
      data: [200, 600, 350, 250, 700, 500, 400],
      borderWidth: 1,
      lineTension: 0,
      backgroundColor: "rgb(52, 90, 187)",
      pointBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "rgba(47, 89, 162, 0.86)",
      pointRadius: 5

    }]
  },
  options: globalOptions
});

myChart2.options.title = {
  display: true,
  text: 'DAILLY TRAFFIC',
  fontStyle:"bold",
  fullWidth:true,
  padding:10,
  position:"top",
  weight:2000
}

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
      pointRadius: 5

    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
          display: true,
          text: 'Mobile Users'
      },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    }
  }
});
