/*

    curl https://myapp.twil.io/sms_external \
      --data-urlencode message="Hi." \
      --data-urlencode from="+14045551212" \
      --data-urlencode to="+16785551212"

    The "From" number has to be a Twilio number or a number you've
    verified with Twilio.
    
*/

exports.handler = function(context, event, callback) {

    const message = event.message;
    const from = event.from;
    const to = event.to;
    
    const twilioClient = context.getTwilioClient();
    
    twilioClient.messages.create({
        from: from,
        to: to,
        body: message
    }, function(err, result) {
        console.log("message sent");
        callback();
    })

};