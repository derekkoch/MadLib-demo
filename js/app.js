$(document).ready(function() {

  $("#submit-btn").click(function(){

  	var exclamation = $("#exclamation").val();
    var adverb = $("#adverb").val();
    var noun = $("#noun").val();
    var verb = $("#verb").val();

    var mad_lib = "'" + exclamation + "!' he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";

    $("#mad_lib").hide();
    $("#mad_lib").text(mad_lib).fadeIn("slow").css("color","#0000ff");

    });
});