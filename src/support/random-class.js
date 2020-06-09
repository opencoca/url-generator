const words = ['Amazing', 'Awesome', 'Blithesome', 'Excellent', 'Fabulous',
'Fantastic', 'Favorable', 'Fortuitous', 'Gorgeous', 'Incredible', 'Ineffable',
'Mirthful', 'Outstanding', 'Perfect', 'Propitious', 'Remarkable', 'Rousing',
'Spectacular', 'Splendid', 'Stellar', 'Stupendous', 'Super', 'Upbeat', 'Unbelievable',
'Wondrous'];


const randomClass = () =>  {
  	const word = words[Math.floor(Math.random() * words.length - 1)];
    return word
  }

export default randomClass