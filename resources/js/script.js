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
  // var waypoints = $("#handler-first").waypoint(
  //   function (direction) {
  //     notify(this.element.id + " hit 25% from top of window");
  //   },
  //   {
  //     offset: "25%",
  //   }
  // );
});
