$(document).ready(function () {
  // if user is scrolling down, start showing the sticky nav
  // else, (if the user is scrolling up) remove the sticky nav
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "56px", // 20px(font) + 18px(margin) + 16px(padding) + 2px(box-shadow)
    }
  );
  // scroll on buttons
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-features").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      500
    );
  });
  // scroll animations
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass(
        "animate__animated animate__fadeIn animate__faster"
      );
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass(
        "animate__animated animate__fadeInUp animate__fast"
      );
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--plan-box-premium").addClass("animate__animated animate__pulse");
    },
    {
      offset: "40%",
    }
  );
});
