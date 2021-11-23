// button to hide contact form and display message -
// "Thank you for your message. We will get back to you as soon as possible."
// form class .contactForm
// btn class .btn-contact
$(document).ready(function() {
    $(".btn-contact").click(function() {
        $(".contactForm").replaceWith("<h2>Thank you for your message! <br>We will get back to you as soon as possible.</h2>");
    })
})


// Event Cards
// More info btn, on click- show more info.
// button class="btn-showMoreInfo"
$(document).ready(function() {
    $(".btn-showMoreInfo1").click(function() {
        $("#more1").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo2").click(function() {
        $("#more2").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo3").click(function() {
        $("#more3").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo4").click(function() {
        $("#more4").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo5").click(function() {
        $("#more5").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo6").click(function() {
        $("#more6").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo7").click(function() {
        $("#more7").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo8").click(function() {
        $("#more8").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo9").click(function() {
        $("#more9").toggle( "slow", function() {
        });
    });

    $(".btn-showMoreInfo10").click(function() {
        $("#more10").toggle( "slow", function() {
        });
    });
})