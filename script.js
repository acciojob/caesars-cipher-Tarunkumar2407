// Your Script here.
let lookup ={
	'A':'N',
	'B':'O',
	'C':'P',
    'D':'Q',
    'E':'R',
    'F':'S',
    'G':'T',
    'H':'U',
    'I':'V',
    'J':'W',
    'K':'X',
    'L':'Y',
    'M':'Z',
    'N':'A',
    'O':'B',
    'P':'C',
	'Q':'D',
	'R':'E',
	'S':'F',
	'T':'G',
	'U':'H',
    'V':'I',    
    'W':'J',
    'X':'K',
    'Y':'L',
    'Z':'M',
	'?':'?',
	',':','
};
function rot13(encodedStr){
	var words = encodeStr.split(" ");
	let decryptedWords = [];
	for (let i = 0; i < words.length; i++) {
		var encryptedWord = words[i];
		var decryptedWord = "";
		for (var j=0 ; j <encryptedWord.length ; j++) {
			decryptedWord += lookup[encryptedWord.charAt(j)];
		}
		decryptedWords.push(decryptedWord);
	}
	return decreptedWords.join(" ");
}
module.exports = rot13;
