require('dotenv').config()

var Dictionary = require('./dictionary'),
	
	//pass the constructor a config object with your key
	dict = new Dictionary({
		key: process.env.id
	});
console.log(process.env.id)
console.log(process.argv[2])
//sample method
var word = "avalanche"

dict.define(word, function(error, result){
	console.log(word)
	if (error == null) {
		for(var i=0; i<result.length; i++){
			console.log(i+'.');
			console.log('Part of speech: '+result[i].partOfSpeech);
			console.log('Definitions: '+result[i].definition);
			console.log(result[i].definition)
		}
	}
	else if (error === "suggestions"){
		console.log(word + ' not found in dictionary. Possible suggestions:');
		for (var i=0; i<result.length; i++){
			console.log(result[i]);
		}
	}
	else console.log(error);
});


//test words
// charlatan
// patutukis
// doodle