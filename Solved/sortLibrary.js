function sort(library) {
  let library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      libraryID: 1254,
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      libraryID: 4264,
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      libraryID: 3245,
    },
  ];
  console.log(library.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0)));
}
console.log('smile');
