var stripe = require('stripe@6.25.1');

module.exports = function(context, cb) {
    console.log(context.body.id);
    console.log(context.body.email);

    stripe(context.secrets.stripeSecretKey).charges.create({
        amount: 2000,
        currency: 'usd',
        source: context.body.id,
        description: 'Drunk Business Advice',
        receipt_email: context.body.email,
    }, function (error, charge) {
        var status = error ? 400 : 200;
        var message = error ? error.message : 'Thanks the beers!';
        cb(null, {status: status, message: message});
    });
}
