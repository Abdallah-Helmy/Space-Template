const job = document.querySelector('.l-side h2');
const desc = document.querySelector('.l-side h1');
const about = document.querySelector('.l-side p');
const personImg = document.querySelector('.r-side img');
const allPersons = document.querySelectorAll('.description span');
const myPersons = [
  {
    job: 'COMMANDER',
    desc: 'DOUGLAS HURLEY',
    about: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    personImg: '../imgs/firstperson.png',
  },
  {
    job: 'Mission Specialist ',
    desc: 'MARK SHUTTLEWORTH',
    about: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    personImg: '../imgs/secondone.png',
  },
  {
    job: 'PILOT',
    desc: 'Victor Glover',
    about: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    personImg: '../imgs/thiedone.png',
  },
  {
    job: 'Flight Engineer',
    desc: 'Anousheh Ansari',
    about: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    personImg: '../imgs/lastone.png',
  },
];

allPersons.forEach(ele => {
  ele.addEventListener('click', function () {
    allPersons.forEach(el => {
      el.classList.remove('on');
    });
    ele.classList.add('on');

    let currentIndex = ele.getAttribute('data-index');
    console.log(currentIndex);

    job.textContent = myPersons[currentIndex].job;
    desc.textContent = myPersons[currentIndex].desc;
    about.textContent = myPersons[currentIndex].about;
    personImg.src = myPersons[currentIndex].personImg;
  });
});
