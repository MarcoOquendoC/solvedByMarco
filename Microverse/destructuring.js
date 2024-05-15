// It can be done with array instead of map
console.log("Hello");
const projects = new Map();

projects.set('p1', {
  image: { src: 'images/desktopPopupImg.png', alt: 'article image four' },
  title: 'Multi-Post',
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript', 'html'],
  info: 'Lorem, totam!',
});
projects.set('p2', {
  img: { src: 'images/desktopPopupImg.png', alt: 'article image four' },
  title: 'Stories Gain+Glory',
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript', 'html'],
  info: 'Lorem, totam!',
});
projects.set('p3', {
  img: { src: 'images/desktopPopupImg.png', alt: 'article image four' },
  title: 'Multi-Post Gain+Glory',
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript', 'html'],
  info: 'Lorem, totam!',
});

projects.forEach((e, key) => console.log(key));

// console.log(projects.size)
// console.log(projects)
console.log(projects.get('p2').img.src);

// destructuring example
// const {image, title, ...rest} = projects.get('p1')
// console.log(title)
// console.log(rest)

// let arr=['p1', 'p2', 'p3']
// console.log(projects.get('p1'))

// let x = `<div>${title}</div>`

// projects.forEach(e => {
//   const {image,title,text,info} = e
//   let x = `<div>${title}</div>`
//   //console.log(e)
//   //console.log(x)
// })
// console.log(x)
