//Toggle navbar
$('.hamburger').click(function() {
    $('.nav').toggleClass("hide");
    $('.nav').toggleClass("show");
});

//Show notification on click
$('.bell-wrapp').click(function() {
    $('.notification').slideDown('fast');
});

var notifications = $('.notification li');
//append remove button to each notification
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

$('.times li').click(function(event) {
    var target = $(event.target);
    //remove class and add it just at target
    $('.times li').removeClass('active-time');
    target.addClass('active-time');
    //hide all canvas from first chart
    $('.firstchart canvas').css('display', 'none');
    //check which li is target and show the canvas from that target
    if (target.is('.hourly')) {
        $('#chart1h').css('display', 'block');
    } else if (target.is('.daily')) {
        $('#chart1d').css('display', 'block');
    } else if (target.is('.weekly')) {
        $('#chart1w').css('display', 'block');
    } else if (target.is('.monthly')) {
        $('#chart1m').css('display', 'block');
    }
});

//get members from json file
$.getJSON("js/users.json",function(data) {
  var result = '<ul>';
  $.each(data,function(key,val) {
      result+= '<li>';
      result+= '<h3>' + val.name + '</h3>';
      result+= '<a href="mailto:' + val.email + '">' + val.email + '</a>';
      result+='</li>';
  });
  result+='</ul>';
  $('.recent-members').append(result);
});
