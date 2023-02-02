const lyrics = 'Tumi Bondhu kala pakhi ami jeno ki. bosonto kale tomai vulte pari ni. sada sada kala kala rong jomese sada kala';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.')
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = ['Tumi Bondhu kala pakhi ami jeno ki. bosonto kale tomai vulte pari ni. sada sada kala kala rong jomese sada kala'];

const newSong = lines.join('. ')
console.log(newSong)