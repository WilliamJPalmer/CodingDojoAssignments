// new file main.js  was created
// this will handle all the jquery functions
$(document).ready(function(){


  $('#login-form-link').click(function(e) {
  $("#login-form").delay(100).fadeIn(100);
  $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
  $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  });








});

// for the Login/Reg
// from https://bootsnipp.com/snippets/jvamD
