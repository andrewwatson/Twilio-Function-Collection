# Twilio-Function-Collection
A Collection of useful Twilio Functions

## Open For Business

This function can detect whether a call or text is coming in during business hours.

[Business Hours](business_hours.js)

## NomoRobo Detection

This function can be used in a Studio Flow to detect whether the caller entering your flow is a robo caller.

[Nomo Robo](nomorobo.js)

## MixPanel Integration

This function calls MixPanel's Event API so that you can track customer/visitor activity via MixPanel and have an idea of what parts of your call flow are most heavily used.

[Mix Panel](mixpanel.js)

## Send SMS to 3rd party

Normal Studio flows can only send SMS to the number that originated the flow but this function allows you to send a message to any* number.

* The number has to be a twilio number or a number that you've verified ownership of with Twilio

[Third Party SMS](this_party_sms.js)