/* OVERALL FEEDBACK:
// An excellent job, overall, Carl! First and foremost, your piglatinzer works as expected,
// and meets all acceptance criteria
// I especially like the styling you added to your page
// With only a few exceptions, your code is clean and readable

// challenge: instead of printing a comma separated list of words,
// print out a sentence with words separated by spaces
// this might be useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// another challenge: clear the input after a submission is made
*/

/*global $*/

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
    $('#submit').click(function(){
        var pigSentence = $('#input').val();
        var transformedPig = sentenceToPigLatin(pigSentence);
        $("#display").text(transformedPig);
        // FEEDBACK: it is best practice to remove console.logs once you are done debugging
        console.log(transformedPig);
    });
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
// Create the sentenceToPigLatin function that takes a sentence as a parameter
    //Loops through all the words in the sentence and transforms each word
    //It should return a transfromed sentance
    
function wordToPigLatin(word){
    // FEEDBACK: the following two lines do not accomplish anything,
    // even though they do hint at a cleaner way of writing this function
    // challenge: use the logic hinted at in these two lines instead of your
    // multiple if statements to detect vowels
    var vowles = ["a","e","i","o","u"];
    vowles.indexOf(word[0])>-1;
    if(word[0]==="a"){
      // FEEDBACK: keep tab size consistent (the next two lines is indented 2 spaces, where you normally use 4)
      return word + "ay";  
    }
    else if(word[0]==="e"){
        return word + "ay";
    }
    else if(word[0]==="i"){
        return word + "ay";
    }
    else if(word[0]==="o"){
        return word + "ay";
    }
    else if(word[0]==="u"){
        return word + "ay";
    }
    else{
        // FEEDBACK: nice!
        return word.slice(1, word.length) + word.slice(0,1) + "ay";
        
    }
}
 var  sentenceToPigLatin= function (sentence){
	var pigWords = sentence.split(' ');
    // FEEDBACK: use spaces to make your code more readable e.g. var i = 0; i < pigWords...
    for(var i=0; i<pigWords.length; i++){
        var word=pigWords[i];
        var latinPigWord=wordToPigLatin(word);
        pigWords[i]=latinPigWord;
    }
    return pigWords;
};