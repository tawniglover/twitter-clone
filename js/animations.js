$(document).ready(function(){

  $('#tweet-controls').hide();

  $(document).on('click', '.tweet-compose', function() {
    $('#tweet-controls').show();
    $(this).css('height', '5em');
  });

  $('.tweet-compose').keyup(function() {
        var charsleft = 140 - $(this).val().length - 1;
        $('#char-count').text(charsleft);
        if (charsleft <= 10) {
            $('#char-count').css('color', 'rgba(255,0,0, 0.4)')
        } else {
            $('#char-count').css('color', '#999')
        }
        if (charsleft < 0) {
            $('.button').prop('disabled', true);
        } else {
            $('.button').prop('disabled', false);
        }
    });

    $('#tweet-submit').on('click', function () {
      var submittedTweet = $('.tweet-compose').val();
      var user = '@alagoon';
      var photoUrl = 'img/alagoon.jpg';
      var fullName = 'Samwise';
      var tweet = $('.tweet').first().clone();
      tweet.find('.tweet-text').html(submittedTweet)
      tweet.find('.username').html(user);
      tweet.find('.avatar').attr('src', photoUrl);
      tweet.find('.fullname').html(fullName);
      $('#stream').prepend(tweet)
    });

    $('.tweet').hover(function () {
      $(this).find('.tweet-actions').show();
    }, function() {
      $('.tweet-actions').mouseleave('.tweet-actions').hide();

    })

    $(document).on('click', '.tweet', function() {
      $(this).find('.stats').show();
      $(this).find('.reply').show();

    });

    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.reply').hide();

});
