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
// on tweet click capture submittedTweet and prepend it to stream



    $('#tweet-submit').on('click', function () {
      var submittedTweet = $('.tweet-compose').val();
      var tweet = $('.tweet').first().clone()
      tweet.find('.tweet-text').html(submittedTweet)

      $('#stream').prepend(tweet)

      //grab tweet html insert our code and prepen

    })

});
