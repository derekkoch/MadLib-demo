$(document).ready(function() {

  $("#submit-btn").click(function(){

    var exclamation = $("#exclamation").val();
    var adverb = $("#adverb").val();
    var noun = $("#noun").val();
    var verb = $("#verb").val();

    var mad_lib = "'" + exclamation + "!' he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";

    console.log(mad_lib);

    });
});