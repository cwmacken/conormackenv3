$("#start-now-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#start-now").offset().top
    }, 2000);
});

$("#send-video").click(function() {
    // console.log("send video")
    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
    // ga('send', 'event', "Form", "click");
});

// var handler = StripeCheckout.configure({
//   key: 'pk_live_NpNQNdC3AZz6n0oftSzFxuZM',
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   token: function(token) {
//     // You can access the token ID with `token.id`.
//     // Get the token ID to your server-side code for use.
//     $('#processing').show();
//     $('#processing-img').show();
//
//     $.ajax('https://wt-8fb2abcdf9f0daebea424feb83d2f0c0-0.sandbox.auth0-extend.com/startbootstrap-landing-page', {
//       type: 'POST',
//       data: { id: token.id, email: token.email},
//       success: function (res) {
//         if(res.status !== 200){
//           $('#msg').html("There was an error processing your card. Please try again or contact <a href='mailto:iwillvetyourbusinessideadrunk@gmail.com'>iwillvetyourbusinessideadrunk@gmail.com</a>");
//           $('#processing').hide();
//           $('#processing-img').hide();
//         }else{
//           window.location.replace("/thank-you");
//         }
//       },
//       error: function (res){
//         $('#msg').html("There was an error processing your card. Please try again or contact <a href='mailto:iwillvetyourbusinessideadrunk@gmail.com'>iwillvetyourbusinessideadrunk@gmail.com</a>");
//         $('#processing').hide();
//         $('#processing-img').hide();
//       }
//     });
//   }
// });

// document.getElementById('customButton').addEventListener('click', function(e) {
//   // ga('send', 'event', "Payment", "click");
//   // Open Checkout with further options:
//   handler.open({
//     name: 'I Will Vet Your Business Idea Drunk',
//     description: 'Please and Thank You',
//     amount: 2000
//   });
//   e.preventDefault();
// });
//
// // Close Checkout on page navigation:
// window.addEventListener('popstate', function() {
//   handler.close();
// });
