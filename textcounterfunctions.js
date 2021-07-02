let resultObj = {
    "chars": 0,
    "words": 0,
    "alphabet": 0,
    "digits": 0,
    "specials": 0,
    "spaces": 0,
    "doublespace": 0
}

function update() {
    
    const value = document.querySelector('textarea').value;
    
    resultObj.chars = value.length;

    const words = value.split(' ');
    resultObj.words = countNoneSpaceChar(words);

    let alphabet = value.match(/[a-z]/gi);
    resultObj.alphabet = alphabet.length;

    let numeric = value.match(/[0-9]/gi);
    resultObj.digits = numeric == null ? 0 : numeric.length;

    let noneAlphaNumeric = value.match(/[^\w\*]/g);
    resultObj.specials = countNoneSpaceChar(noneAlphaNumeric);

    resultObj.spaces = value.match(/\s/g).length;

    let ds = value.match(/\s{2,}/g);
    resultObj.doublespace = ds == null ? 0 : ds.length;

    let currentValues = document.querySelectorAll('span');
    Array.from(currentValues).forEach(function(value) {
        Object.keys(resultObj).forEach(key => {
            if (key == value.id && resultObj[key] != 0) {
                value.textContent = resultObj[key];
            }
          });
    });

    textarea.onkeyup = update;
	textarea.oninput = function() {
		textarea.onkeyup = null;
		update();
	};
    
};

function countNoneSpaceChar(arr) {
    let wordCount = 0;
    arr.forEach(element => {
        if (element != " " 
        && element != "" 
        && element != "\n")
        {
            wordCount++
        }
    });
    return wordCount;
}



