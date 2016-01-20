/*
* Error-first callback;
* Error-first callbacks are used to pass errors and data. 
* The first argument is always an error object that the programmer has to check if something went wrong. 
* Additional arguments are used to pass data.
*/

fs.readFile(filePath, function(err, data) {  
  if (err) {
    //handle the error
  }
  // use the data object
});


/*
* Callback Hells
* Modularization: break callbacks into independent functions
* use Promises
* use yield with Generators
*/

query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
  query("SELECT * FROM transactions WHERE clientId=" + id, function(transactions){
    transactions.each(function(transac){
      query("UPDATE transactions SET value = " + (transac.value*0.1) + " WHERE id=" + transac.id, function(error){
        if(!error){
          console.log("success!!");
        }else{
          console.log("error");
        }
      });
    });
  });
});

var logError = function(error){
	if(!error){
    	console.log("success!!");
    }else{
        console.log("error");
    }
}, handleClient = function(id){
	query("SELECT * FROM transactions WHERE clientId=" + id, handleTransaction);
}, handleTransaction = function(ts){
	ts.each(updateTs);
}, updateTs = function(transac){
	query("UPDATE transactions SET value = " + (transac.value*0.1) + " WHERE id=" + transac.id, logError);
} 

queryOperation("SELECT clientId FROM clients WHERE clientName='picanteverde';", handleClient);


/*
* How can you listen on port 80 with Node?
* You should not try to listen with Node on port 80 (in Unix-like systems) - to do so you would need superuser rights, 
* but it is not a good idea to run your application with it.
* Still, if you want to have your Node.js application listen on port 80, 
* here is what you can do. Run the application on any port above 1024, 
* then put a reverse proxy like nginx in front of it.
*/

/*
* What's the difference between operational and programmer errors?
* Operation errors are not bugs, but problems with the system, like request timeout or hardware failure.
* On the other hand programmer errors are actual bugs.
*/
