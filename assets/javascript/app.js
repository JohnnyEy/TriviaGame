$(document).ready(function() {

    var totalQuiz = 6,
        answers = ["LarkBunting", "Broncos", "64", "french", "7", "MountElbert"],
        data = $("input"),
        correctAnswer = 0,
        incorrectAnswer = 0,
        blank = 0,
        count = 15;

    function scoreCount() {
        for (var i = 0; i < data.length; i++) {

            if (data[i].checked) {

                if (answers.indexOf(data[i].value) !== -1) {
                    correctAnswer++;
                } else {
                    incorrectAnswer++;
                }
            }
        }
        
        var totalAnswered = correctAnswer + incorrectAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuiz) {
            blank = totalQuiz - totalAnswered;
        }

        $('#correct').html(" " + correctAnswer);
        $('#incorrect').html(" " + incorrectAnswer);
        $("#blank").html(" " + blank);

    } 
    $("#quiz, #results").hide();

    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");

        var startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);

            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
            }
        }, 1000);

    });

    $("#done").click(function() {
        $("#quiz, #timer").hide("slow");
        $("#results").show("slow");
        clearInterval(timer);
        scoreCount();
    });

    $("#restart").click(function() {
        location.reload();
    });
});