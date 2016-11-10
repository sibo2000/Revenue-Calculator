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

console.log(winner(40, 2, 1.6, 100, 4));
