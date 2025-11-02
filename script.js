$(document).ready(function() {
  console.log("jQuery is ready!");

  // Task 1 – Selectors & CSS
  $("#mainTitle").text("Changed with jQuery");
  $(".description").html("<b>Bold paragraph using .html()</b>");
  $("div:first").css({
    "color": "blue",
    "background-color": "lightgray",
    "padding": "10px"
  });

  // Task 2 – Visibility
  $("#hide").click(() => $("#text").hide());
  $("#show").click(() => $("#text").show());
  $("#toggle").click(() => $("#text").toggle());

  // Task 3 – Fade
  $("#fadeOut").click(() => $("#pic").fadeOut());
  $("#fadeIn").click(() => $("#pic").fadeIn());
  $("#fadeToggle").click(() => $("#pic").fadeToggle());

  // Task 4 – Slide
  $("#slideDownBtn").click(() => $("#panel").slideDown());
  $("#slideUpBtn").click(() => $("#panel").slideUp());
  $("#slideToggleBtn").click(() => $("#panel").slideToggle());

  // Task 5 – Add & Remove
  $("#add").click(() => $("#list").append("<li>New Item</li>"));
  $("#remove").click(() => $("#list li:last").remove());

  // Task 6 – Modifying Attributes
  $("#changeImg").click(() => $("#myImg").attr("src", "https://via.placeholder.com/150/ff0000"));
  $("#changeLink").click(() => $("#myLink").attr("href", "https://youtube.com").text("YouTube"));

  // Task 7 – Form Interaction
  $("input").on("keyup", function(){
    let name = $("#name").val();
    let email = $("#email").val();
    $("#output").text(`Name: ${name}, Email: ${email}`);
  });

  // Task 8 – Basic Animation
  $("#animateBtn").click(() => {
    $("#box").animate({left: '200px', width: '150px', height: '150px'});
  });

  // Task 9 – Sequential Animations
  $("#seqBtn").click(() => {
    $("#seqBox")
      .animate({left: '200px'}, 500)
      .animate({top: '100px'}, 500)
      .animate({width: '50px', height: '50px'}, 500)
      .animate({left: '0', top: '0', width: '100px', height: '100px'}, 500);
  });

  // Task 10 – Combined Animation
  $("#comboBtn").click(() => {
    $("#comboBox").animate({
      left: '150px',
      opacity: 0.5,
      width: '200px',
      height: '200px'
    }, 1000);
  });

  // Task 11 – Mini Project: Image Gallery
  $(".thumb").click(function(){
    let newSrc = $(this).attr("src").replace("100", "300");
    $("#large").fadeOut(200, function(){
      $(this).attr("src", newSrc).fadeIn(200);
    });
  });
});
