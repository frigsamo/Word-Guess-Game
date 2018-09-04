window.onload = function () {
    var wordArray = [];
    var myKey = "";
    var usedLettes = [];
    
    

    var game = {
        words: ["success", "passion", "wishes", "constancy", "dedication", "believe"],
         get start()  {
          var myWord = Math.floor(Math.random() * this.words.length);
          return ( this.words[myWord]);
        },
        get word() {

        },
        get findLetter() { 
            var indices = [];
            
            var indx = wordArray.indexOf(myKey);
            if(indx > -1){
                while(indx > -1){
                    indices.push(indx);
                    indx = wordArray.indexOf(myKey, indx +1)
                }
                if(indices.length == 1){
                    
                }
                console.log(indices);
                
            }else{
               usedLettes.push(myKey);
               console.log(usedLettes);
            }
        }
    }



    document.getElementById("start").addEventListener("click", function () {
        usedLettes = [];
        var wordSelected = game.start;
        wordArray = wordSelected.split("");
        //var showArray = new Array[wordArray.length]
        var showArray = [];
        while(showArray.length != wordArray.length){
            showArray.push("_")
        }
       for(var i = 0; i < showArray.length; i++){
        
        document.getElementById("word_selected").innerHTML  += "<p>" + wordArray[i] + "</p>"
        document.getElementById("word_selected").innerHTML  += "<p>" + showArray[i] + "</p>"
        document.getElementById("start").disabled = "true";
       };
      // document.getElementById("word_selected").innerHTML = wordArray;
    });

    
        document.addEventListener('keydown', function(event) {
            myKey = event.key;
           game.findLetter;
   
         });
        
}



