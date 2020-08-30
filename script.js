var candidate = function(name) 
{  
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
    
  politician.tallyVotes = function()
  {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++)
    {
         this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return politician;
  
};
 
var diana = candidate("Wonder Woman");
var carol = candidate("Captain Marvel");

diana.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

carol.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

diana.electionResults[9] = 1;
carol.electionResults[9] = 28;

diana.electionResults[4] = 17;
carol.electionResults[4] = 38;

diana.electionResults[43] = 11;
carol.electionResults[43] = 27;

diana.tallyVotes();
carol.tallyVotes();

console.log(diana.totalVotes);
console.log(carol.totalVotes);

var winner = "";

if (diana.totalVotes > carol.totalVotes) {
    winner = diana.name;
  } else if (diana.totalVotes < carol.totalVotes) {
     winner = carol.name;
  } else {
    winner = "Draw.";
  }

console.log("And the winner is..." + winner + "!!!");