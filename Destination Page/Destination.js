const myplanets = [
  {
    imgsrc: '../imgs/Moon.png',
    planetname: 'MOON',
    planetinfo: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    planetkilometres: '384,400 km',
    planettime: '3 days',
  },
  {
    imgsrc: '../imgs/Mars.png',
    planetname: 'Mars',
    planetinfo: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    planetkilometres: '225 MIL. km',
    planettime: '9 months',
  },
  {
    imgsrc: '../imgs/Europa.png',
    planetname: 'Europa',
    planetinfo: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    planetkilometres: '628 MIL. km',
    planettime: '3 years',
  },
  {
    imgsrc: '../imgs/titan.png',
    planetname: 'titan',
    planetinfo: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    planetkilometres: '1.6 BIL. km',
    planettime: '7 years',
  },
];
let planetname = document.querySelector('.planet-info h1');
let planetinfo = document.querySelector('.planet-info p');
let planetkilometres = document.querySelector('.d-side h2:first-child ');
let planettime = document.querySelector('.d-side h2:last-child');
let planetimg = document.querySelector('.down img');
let lis = document.querySelectorAll('.info .for-click ul li');

// Manaing Active Class On Planets
lis.forEach(ele => {
  ele.addEventListener('click', function () {
    lis.forEach(el => {
      el.classList.remove('active');
    });

    ele.classList.add('active');
    // Changing info About Each Planet
    let currentIndex = ele.getAttribute('data-index');
    planetimg.src = myplanets[currentIndex].imgsrc;
    planetinfo.textContent = myplanets[currentIndex].planetinfo;
    planetname.textContent = myplanets[currentIndex].planetname;
    planetkilometres.textContent = myplanets[currentIndex].planetkilometres;
    planettime.textContent = myplanets[currentIndex].planettime;
  });
});
