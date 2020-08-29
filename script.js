var candidate = function(name) 
{  
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  
  candidate.announceResults = function()
  {
    console.log(politician.name + " received a total of " + politician.totalVotes + " votes.");
  };
  
  candidate.announceResults();
  
  return candidate;
};

var candidate1 = candidate("Wonder Woman");
var candidate2 = candidate("Captain Marvel");