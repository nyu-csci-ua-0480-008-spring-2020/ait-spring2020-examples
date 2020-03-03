	* short answer + coding questions... 15 ~20 of lines of code each
	* 2/3 or 3/4 depending on how long each is
	* no computer... write solution
	* reference and boilerplate code available
	* questions based on homework that you've done
		* basic js
		* hof
		* net module, creating your own classes (maybe)
		* express bascis, callbacks, creating your own classes (maybe)
		* ??? forms...
2. hw
	* format of parsed objects
	* load transactions
const blocks = [
	{name: '0x12',
	 transactions: [{amt: 123, from: ...}, {amt: 123, from: ...}],
	 previous: '451'},
	{name: '0x12',
	 transactions: [{amt: 123, from: ...}],
	 previous: '451'},
	* loadAllTransactions... all data should be parsed and loaded into memory before listening
	* loading should be non blocking: callback based version, Promises


function loadAllTransaction(path, done) {
	// readdir gets you list of files: fileList
	for(const name of fileList) {
			readFile(name, (err, data) => {
				console.log(data);
				// guard this w/ ur life
				// our length of blocks is === length of fileList
				done(data)
			}); 
	}
}

recursiveFunction(fileList, done) {
	if(baseCase) {
		done()
	} else {
		call function again with either reduced file list
	}

}

// 1. wrap your readfile in a promise object
// 2. call then on promise to set resolve function... so resolve is function that gets called
//    when your read finishes
// 3. Promise.all <--- populate an array of promises... call Promise.all passing in that Array... 
// .... in addition array, resolve func.... this resolve will be called when all promises resolve
// 4. async await







loadAllTransactions('transactions', (blocks) => {
	// work w/ blocks in here
	console.log(blocks)
})


3. review forms 
4. new material










