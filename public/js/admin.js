// $(function(){
//   $("#update-score").click(function(){
//     const scoreA = $("#score-a").val();
//     const scoreB = $("#score-b").val();
//     const notify = $("#score-notify:checked").val();
//     $.post("/admin/match/"+MATCH_INDEX+"/score", {
//       scoreA, scoreB, notify
//     }, function(data){
//       console.log(data)
//     })
//     return false;
//   })
//   $("#video-new").click(function(){
//     $.post("/admin/match/"+MATCH_INDEX+"/videos", { video: $("#video-id").val() }, function(data){})
//   })
//   $("#bid-new").click(function(){
//     $.post("/admin/match/"+MATCH_INDEX+"/bids", {
//       time: $("#bid-time").val(),
//       half: $("#bid-half").val(),
//       team: $("#bid-team").val(),
//       subject: $("#bid-subject").val(),
//       description: $("#bid-description").val()
//     }, function(data){

//     })
//   })
// });

$(function() {
  $("#update-score").click(function() {
    const scoreA = $("#score-a").val()
    const scoreB = $("#score-b").val()
    const notify = $("#score-notify:checked").val();
    $.post("/admin/match/"+MATCH_INDEX+"/score", {
      scoreA, scoreB, notify
    },  function(data){
        console.log(data)
    })
    return false;
  })
  $("#video-new").click(function(){
        $.post("/admin/match/"+MATCH_INDEX+"/videos", { video: $("#video-id").val() }, function(data){})
  })
  $("#bid-new").click(function(){
    $.post("/admin/match/"+MATCH_INDEX+"/bids", {
      time: $("#bid-time").val(),
      half: $("#bid-half").val(),
      team: $("#bid-team").val(),
      subject: $("#bid-subject").val(),
      description: $("#bid-description").val()
    }, function(data){

    })
})
});