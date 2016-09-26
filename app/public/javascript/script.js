$(document).ready(function(){
  $('#submit-button').on('click', function(){
    var newFriend = {
      name: $('#name').val().trim(),
      photo: $('#photo').val().trim(),
      question1: parseInt($('#question1').val().replace(/[^0-9 | ^.]/g, '')),
      question2: parseInt($('#question2').val().replace(/[^0-9 | ^.]/g, '')),
      question3: parseInt($('#question3').val().replace(/[^0-9 | ^.]/g, '')),
      question4: parseInt($('#question4').val().replace(/[^0-9 | ^.]/g, '')),
      question5: parseInt($('#question5').val().replace(/[^0-9 | ^.]/g, '')),
      question6: parseInt($('#question6').val().replace(/[^0-9 | ^.]/g, '')),
      question7: parseInt($('#question7').val().replace(/[^0-9 | ^.]/g, '')),
      question8: parseInt($('#question8').val().replace(/[^0-9 | ^.]/g, '')),
      question9: parseInt($('#question9').val().replace(/[^0-9 | ^.]/g, '')),
      question10: parseInt($('#question10').val().replace(/[^0-9 | ^.]/g, ''))
    }
    $.post('http://localhost:3000/api/friends', newFriend).then(function(){
      //change link to Heroku link
      //modal pop up
    });
      return false;
    });
});
