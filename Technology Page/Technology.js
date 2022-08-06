const terminology = document.querySelector('.content h1');
const paragraph = document.querySelector('.content p');
const terminologyImg = document.querySelector('.tech img');

const allTerminology = document.querySelectorAll('.tech span');

const myElements = [
  {
    terminologyImg: '../imgs/First img.jpg',
    terminology: 'LAUNCH VEHICLE',
    paragraph: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!',
  },
  {
    terminologyImg: '../imgs/Second.jpg',
    terminology: 'SPACEPORT',
    paragraph: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    terminologyImg: '../imgs/Third.jpg',
    terminology: 'SPACE CAPSULE',
    paragraph: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth is atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
  },
];

allTerminology.forEach(ele => {
  ele.addEventListener('click', function () {
    allTerminology.forEach(el => {
      el.classList.remove('on');
    });

    let currentIndex = ele.getAttribute('data-index');

    ele.classList.add('on');

    terminologyImg.src = myElements[currentIndex].terminologyImg;
    terminology.textContent = myElements[currentIndex].terminology;
    paragraph.textContent = myElements[currentIndex].paragraph;
  });
});
