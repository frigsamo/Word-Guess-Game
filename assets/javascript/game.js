window.onload = function () {
    var wordArray = [];
    var myKey = "";
    var usedLettes = [];
    var showArray = [];
    var count = 15;
    var wins = 0;
    var eventKey = false;
    var lost = 0;



    var game = {
        words: ["success", "passion", "wishes", "constancy", "dedication", "believe"],
        get start() {
            var myWord = Math.floor(Math.random() * this.words.length);
            return (this.words[myWord]);
        },
        get show() {
            for (var i = 0; i < showArray.length; i++) {
                document.getElementById("word_selected").innerHTML += "<p>" + showArray[i] + "</p>"
            }
        },
        get findLetter() {
            var indices = [];

            var indx = wordArray.indexOf(myKey);
            if (indx > -1) {
                while (indx > -1) {
                    indices.push(indx);
                    indx = wordArray.indexOf(myKey, indx + 1)
                }
                if (indices.length == 1) {
                    showArray[indices[0]] = myKey;
                    console.log(showArray);
                } else {
                    indices.forEach(function (value) {
                        showArray[value] = myKey;
                    })
                    console.log(showArray);
                }
                console.log(indices);

            } else {
                if (usedLettes.indexOf(myKey) == -1 && myKey != "Enter") {
                    console.log(usedLettes)
                    console.log(usedLettes.indexOf(myKey))
                    usedLettes.push(myKey);
                    count--;
                    document.getElementById('guesses').innerHTML = "<h2>" + usedLettes + "</h2>";
                }
            }
        },
        get toWin() {
            if (showArray.indexOf("_") == -1) {
                wins++;
                usedLettes = [];
                
                document.getElementById("myImg").src = "assets/images/last1.png";
                document.getElementById('guesses').innerHTML = "";
                game.start;
                count = 15;
                eventKey = false;
            }
        },

        get toLoose() {
            if (count == 0) {
                usedLettes = [];
                showArray = [];
                document.getElementById("myImg").src = "assets/images/finalsupa.png";
                document.getElementById('guesses').innerHTML = "";
                count = 15;
                
                game.start;
                eventKey = false;
                lost++;
            }
        },
    }
    document.addEventListener('keydown', start);

    document.getElementById("playAgain").addEventListener('click', function(){
        location.reload();
    });

    function start(event){
        if (event.keyCode == 13) {
            eventKey = true;

            usedLettes = [];
            showArray = [];
            var wordSelected = game.start;
            wordArray = wordSelected.split("");
            document.getElementById("myImg").src = "assets/images/first-fixed.png";


            while (showArray.length != wordArray.length) {
                showArray.push("_")
            }
            for (var i = 0; i < showArray.length; i++) {
                document.getElementById("word_selected").innerHTML += "<p>" + showArray[i] + "</p>"
            };
        }
        if (eventKey) {
            myKey = event.key;
            game.findLetter;
            if (count == 0) {
                game.toLoose;
            } else {
                game.toWin;
            }
            document.getElementById("word_selected").innerHTML = '';
            for (var i = 0; i < showArray.length; i++) {
                document.getElementById("word_selected").innerHTML += "<p>" + showArray[i] + "</p>"
            }
            document.getElementById("remain").innerHTML = count;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("lost").innerHTML = lost;
        }
    }

    

}



