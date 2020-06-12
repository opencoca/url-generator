const words = ['Amazing', 'Awesome', 'Blithesome', 'Excellent', 'Fabulous',
'Fantastic', 'Favorable', 'Fortuitous', 'Gorgeous', 'Incredible', 'Ineffable',
'Mirthful', 'Outstanding', 'Perfect', 'Propitious', 'Remarkable', 'Rousing',
'Spectacular', 'Splendid', 'Stellar', 'Stupendous', 'Super', 'Upbeat', 'Unbelievable',
'Wondrous'];

const subjects = ['Art','Geography','History','French','German','Spanish','Music','Science','Reading','Writing']

const randomSubject = () =>  {
  const word = words[Math.floor(Math.random() * words.length - 1)]
  const subject = subjects[Math.floor(Math.random() * subjects.length - 1)]
  return Promise.resolve(word + subject)
}

export default randomSubject
