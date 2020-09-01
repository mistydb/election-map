var candidate = function(name, partyColor) 
{  
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
    
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
 
var diana = candidate("Wonder Woman", [132, 17, 11]);
var carol = candidate("Captain Marvel", [245, 141, 136]);

console.log(diana.name + "'s Party Color is..." + diana.partyColor);
console.log(carol.name + "'s Party color is... " + carol.partyColor);

diana.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

carol.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


diana.electionResults[9] = 1;
carol.electionResults[9] = 28;

diana.electionResults[4] = 17;
carol.electionResults[4] = 38;

diana.electionResults[43] = 11;
carol.electionResults[43] = 27;

var setStateResults = function(state){
 
    theStates[state].winner = null;
 
    if (diana.electionResults[state] > carol.electionResults[state]) {
        theStates[state].winner = diana; 
    } else if (diana.electionResults[state] < carol.electionResults[state]) {
        theStates[state].winner = carol;
    }
  
  var stateWinner = theStates[state].winner;
 
if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
  
}

var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0];
var body = stateInfoTable.childre[1];
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnerName = body.children[2].children[1];
stateName.innerText = theStates[state].nameFull;


diana.tallyVotes();
carol.tallyVotes();


var winner = "";

if (diana.totalVotes > carol.totalVotes) {
    winner = diana.name;
  } else if (diana.totalVotes < carol.totalVotes) {
     winner = carol.name;
  } else {
    winner = "Draw.";
  }

var countryInfoTable = document.getElementById('countryResults');
 
countryInfoTable.children[0].children[0].children[0].innerText = diana.name;
countryInfoTable.children[0].children[0].children[1].innerText = diana.totalVotes;
countryInfoTable.children[0].children[0].children[2].innerText = carol.name;
countryInfoTable.children[0].children[0].children[3].innerText = carol.totalVotes;
countryInfoTable.children[0].children[0].children[5].innerText = winner;