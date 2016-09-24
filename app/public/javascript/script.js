$(document).ready(function(){
  $('#submit-button').on('click', function(){
    //create newFriend object
    $.post(currentURL + '/api/friends', newFriend)
      .done(function (data) {
        console.log(data);
      });
    });
});
