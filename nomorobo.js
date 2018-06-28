const got = require('got');

exports.handler = function(context, event, callback) {

    let spammer = false;
    const account_sid = context.ACCOUNT_SID;
    const auth_token = context.AUTH_TOKEN;

    const caller = event.caller;
    const called = event.called;

    const twilio = context.getTwilioClient();

    /*
        This requires that you have enabled the 
        NomoRobo AddOn enabled on your Twilio on your account
    */
   
    const n_uri_base = "https://lookups.twilio.com";
    const nomorobo_url = n_uri_base + "/v1/PhoneNumbers/" + caller + "/?AddOns=nomorobo_spamscore&AddOns.nomorobo_spamscore.secondary_address=" + called;

    got.get(nomorobo_url, {
        auth: account_sid + ":" + auth_token,
    })
    .then( (response_string) => {
        
        const response = JSON.parse(response_string.body);
        const score = response.add_ons.results.nomorobo_spamscore.result.score;
        let result = "human";
        if (score === 1) {
            result = "robot";
        }
        callback(null, result);
    })
    .catch( (error) => {
        console.log(error);
        callback(error, null);
    });
    
};