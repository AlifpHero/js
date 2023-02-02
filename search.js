const lyrics = 'Tumi Bondhu kala pakhi ami jeno ki. bosonto kale tomai vulte pari ni. sada sada kala kala rong jomese sada kala';

const searchString = 'paKhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLocaleLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

//---------------------------------------------
// indexOff 

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

// 

if(lyrics.indexOf('sadadada') != -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

//startsWith
console.log(lyrics.startsWith('2mi'))

//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')

