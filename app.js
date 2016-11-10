(function() {
  /*
   *  Create functions
   */
  function winner(bal, stake, odds, rep, err) {
    var balance = bal,
        win = 0,
        lost = 0;
    console.log("Starting balance is " + bal);
    console.log("Stake is " + stake);
    console.log("Odds are " + odds);
    console.log("Ran for " + rep + " times");
    console.log("Add lost every " + err + " times");


    for (var i=1; i < rep; i++) {

      // The uses a percentage of the stake
      stake = balance / 20;
      if(i % err === 2){
        // error Ie, it didnt win
        balance = balance - stake;
        console.log(i + ". Loss, new balance " + balance);
        lost++;
      } else {
        balance = balance - stake + stake * odds;
        console.log(i + ". Won, new balance " + balance);
        win++
      }
    }
    console.log("Win total " + win);
    console.log("Lost total " + lost);
  }

  /*
   *  Set Variables
   */
  var submit   = document.getElementById("submit"),
      balance  = document.getElementById("balance"),
      stake    = document.getElementById("stake"),
      odds     = document.getElementById("odds"),
      repeat   = document.getElementById("repeat"),
      error    = document.getElementById("error");

  /*
   *  Create events
   */
  submit.addEventListener(
    'click',
    function(e){
      e.preventDefault();
      winner(balance.value, stake.value, odds.value, repeat.value, error.value)
  })

})();
