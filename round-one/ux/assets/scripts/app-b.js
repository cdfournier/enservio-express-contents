$(document).ready(function(){
  $(".save").click(function(){
    // Get input name
    var name = $("#insured-name").val();
    var street = $("#loss-street").val();
    var city = $("#loss-city").val();
    var state = $("#loss-state").val();
    var zip = $("#loss-zip").val();
    var peril = $("#peril").val();
    var limits = $("#contents-limit").val();

    // Store data
    localStorage.setItem("name", name);
    localStorage.setItem("street", street);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("zip", zip);
    localStorage.setItem("peril", peril);
    localStorage.setItem("limits", limits);
  });
});

$(document).ready(function(){
  $(".save").click(function(){
    // Get input name
    var living = $("#living-room").val();
    var kitchen = $("#kitchen").val();
    var bathroom = $("#bathroom").val();
    var bedroom = $("#bedroom").val();
    var basement = $("#basement").val();

    // Store data
    localStorage.setItem("living", living);
    localStorage.setItem("kitchen", kitchen);
    localStorage.setItem("bathroom", bathroom);
    localStorage.setItem("bedroom", bedroom);
    localStorage.setItem("basement", basement);
  });
});
