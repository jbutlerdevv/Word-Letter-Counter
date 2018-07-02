function wordProcessor () {

  var userInput = document.getElementById("input").value;

  var totalWords = 1;
  var totalSentences = 0;
  var avgWords;
  var totalSpaces = 0;
    for(var i = 0; i < userInput.length; i++){
      if(userInput[i]===" ") {
        totalWords++;
        totalSpaces++;
      }
      if(userInput[i]==="." || userInput[i]==="?" || userInput[i]==="!"){
        totalSentences++;
      }
    }
  avgWords = totalWords / totalSentences;

    document.getElementById("totalWords").innerHTML = totalWords;
    document.getElementById("totalSentences").innerHTML = totalSentences;
    document.getElementById("avgWords").innerHTML = avgWords;
    document.getElementById("totalSpaces").innerHTML = totalSpaces;

}
