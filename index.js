function buildHistogram(magazine){
    let hash = {};
    for (let i = 0; i< magazine.length; ++i) {
        let letter = magazine[i];
        if (hash[letter]) {
            hash[letter] += 1;
        }
        else {
            hash[letter] = 1;
        }
    }   
    return hash; 
}

function canBuildNote(magazine,note) {
    let collection = buildHistogram(magazine);
    let noteArray = [...note];
    for(let i = 0; i < noteArray.length; ++i) {
        let char = noteArray[i];        
        if (collection[char] && collection[char] > 0) {
            collection[char]-= 1;
        }
        else {
            return false;
        }
    }

    return true;
}