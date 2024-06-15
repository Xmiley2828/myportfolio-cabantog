/* Mobile menu on clicking the humburger */
const width = window.innerWidth;
const mobileMenu = document.querySelector('#menu-icon');
const mobileNav = document.querySelector('#mobile-nav');
const logo = document.querySelector('#logo');
const closeIcon = document.querySelector('#close img');
const menuList = document.querySelectorAll('.mobile-nav');

function show() {
  mobileNav.style.display = 'flex';
  mobileMenu.style.display = 'none';
  logo.style.display = 'none';
}

function close() {
  if (width < 768) {
    logo.style.display = '';
    mobileMenu.style.display = '';
    mobileNav.style.display = 'none';
  }
}

mobileMenu.addEventListener('click', show);
closeIcon.addEventListener('click', close);
menuList.forEach((nav) => nav.addEventListener('click', close));

/* Store projects' data in javascript objects */
const projects = [
  {
    id: 1,
    name: ['Exaggeration Drawing', 'Exaggeration Drawing'],
    description: ["An exaggerated drawing bursting with larger-than-life characters and whimsical scenarios, where reality takes a backseat to imagination, inviting viewers into a world of playful exaggeration and delightful surprises.", 'Crafted on GIMP, this exaggerated drawing bursts with larger-than-life characters and whimsical scenarios, where reality takes a backseat to imagination. Dive into a world of playful exaggeration and delightful surprises, meticulously brought to life pixel by pixel.'],
    image: ['media/F-a2.png', 'media/F-a2.png'],
    technologies: ['GIMP Application'],
    sourceLink: 'https://drive.google.com/drive/folders/1NNrO5WZhYvT6CsMpOHfJI51UEY3_1gDj?usp=sharing',
  },
   {
    id: 2,
    name: ['Series Of Movements Drawing', 'Series Of Movements Drawing'],
    description: ["It is like a Flipbook, but it is just only in a one paper. This shows a continous Movements on how to do a tumbling.", 'Imagine a flipbook compressed onto a solitary sheet of paper, offering a seamless visual narrative of successive movements depicting the intricate steps involved in executing a tumbling routine. Each frame intricately captures the fluidity and dynamism of the performance, providing a comprehensive guide through the intricate motions of tumbling.'],
    image: ['media/PR-a2.jpg', 'media/PR-a2.jpg'],
    technologies: ['Free Hand Drawing'],
    sourceLink: 'https://drive.google.com/drive/folders/1EQvo9JYw0nb5wfXvAsqFq58YK-wKeo08?usp=drive_link',
  },
   {
    id: 3,
    name: ['Fruit Drawing', 'Fruit Drawing'],
    description: ["It is a drawing of orange fruits, where I use a different shading technique to achieve the best resullt of having realistic drawing. ", 'This artwork portrays oranges rendered with meticulous attention to detail, employing varied shading techniques to achieve a lifelike appearance. Through the careful application of shading, the artist has skillfully captured the nuances of light and shadow, enhancing the realism of the drawing and imbuing it with depth and dimension. Each stroke of the pencil or brush is purposefully executed to evoke the texture and vibrancy of the oranges, resulting in a visually captivating depiction that invites the viewer to marvel at its realism.'],
    image: ['media/PR-a3.jpg', 'media/PR-a3.jpg'],
    technologies: ['Free Hand Drawing'],
    sourceLink: 'https://drive.google.com/drive/folders/1GybhZemWNbLBVWDxL_Gmo-R5jHRN8JSD?usp=drive_link',
  },
   {
    id: 4,
    name: ['Logo', 'Logo'],
    description: ["I created a logo with of the company I wanted to have, that's why I created the Dev Sync Programming company.", 'Crafted with GIMP, the logo for Dev Sync Programming ingeniously merges the letters "D" and "S" to form the acronym. This overlapping design embodies unity and synchronization, essential in programming. Visually striking, it succinctly conveys your brand commitment to harmony and collaboration in software development.'],
    image: ['media/MT-a1.jpeg', 'media/MT-a1.jpeg'],
    technologies: ['GIMP Application'],
    sourceLink: 'https://drive.google.com/drive/folders/15X0oAeqc5iqEXOTR2Q633EtJ_xbyRY6b?usp=drive_link',
  },
   {
    id: 5,
    name: ['Two Point Perspective Hallway Drawing', 'Two Point Perspective Hallway Drawing'],
    description: ["It is created using the two point perspective drawing which is to simulate a first person view of a one place. ", 'Utilizing the two-point perspective drawing technique, the logo is meticulously crafted to evoke the sensation of traversing through a hallway. This approach is aimed at immersing viewers in a first-person perspective, offering a lifelike sense of depth and dimension. The result is an experience that closely mirrors the sensation of navigating through a physical space, enhancing the logos visual impact and resonance.'],
    image: ['media/MT-a2-1.png', 'media/MT-a2-1.png'],
    technologies: ['GIMP Application'],
    sourceLink: 'https://drive.google.com/drive/folders/1lyQEcqAeITvtftQjt-syjGXmoc5sKGxE?usp=drive_link',
  },
   {
    id: 6,
    name: ['Two Point Perspective Railway Drawing', 'Two Point Perspective Railway Drawing'],
    description: ["It is created using the two point perspective drawing which is to simulate a first person view of a one place. ", 'The logo is designed utilizing the two-point perspective drawing method, aiming to replicate the viewpoint of a train driver observing the mountains ahead. This technique effectively simulates depth and dimension, providing viewers with an immersive experience akin to being in the driver seat. The result is a captivating journey, mirroring the sensation of witnessing the landscape unfold from the front of a moving train.'],
    image: ['media/MT-a2-2.png', 'media/MT-a2-2.png'],
    technologies: ['GIMP Application'],
    sourceLink: 'https://drive.google.com/drive/folders/1DZksiN7mhQinGgUT_1mYTBYab9yuJWwa?usp=drive_link',
  },
   {
    id: 7,
    name: ['Making a Realistic Digital Art', 'Making a Realistic Digital Art'],
    description: ["It is created using the smudge tool to imply the technique of shading, this is the digital art of my Prelim activity 3.", 'This digital artwork, crafted as part of my Preliminary Activity 3, intricately utilizes the smudge tool to effectively simulate shading. By employing this digital technique, I aim to convey depth and dimension within the piece, showcasing my proficiency in digital artistry.'],
    image: ['media/MT-a3.jpeg', 'media/MT-a3.jpeg'],
    technologies: ['GIMP Application'],
    sourceLink: 'https://drive.google.com/drive/folders/1wpQM10HD_8ayKIZ9jbqZzyRePcbUY-vo?usp=drive_link',
  },
  {
    id: 8,
    name: ['Anticipation Drawing', 'Anticipation Drawing'],
    description: ["Discover anticipation drawing with GIMP! Use GIMP's features to bring movement, emotion, and storytelling to your digital art.", 'Using GIMP, start by sketching Donald Duck in a pose that anticipates for an action like running. Then, refine the sketch with color and shading to bring out his personality and charm, creating a captivating anticipation drawing.'],
    image: ['media/F-a1.jpg', 'media/F-a1.jpg'],
    technologies: ['GIMP Application'],
    sourceLink: 'https://drive.google.com/drive/folders/1ZDEMFgOaBvYsxwQucwPkxOOKKNb_ho_1?usp=drive_link',
  },
];

/* Render projects dynamicaaly to the HTML document */

const works = document.querySelector('#project-items');
const articlElement = document.querySelector('article');

articlElement.innerHTML = `
<h2 id="article-h" class="project-title">${projects[0].name[0]}</h2>
<p  class="article-p text">${projects[0].description[0]}</p>
<ul class="btn no-style-deco" id="article-btn">
    <li> <button type="button" class="grey-button">${projects[0].technologies[0]}</button></li>
</ul>
<div>
<button type="button" class="art-btn link-btn">See project</button>
</div>
`;

projects.forEach((work, value) => {
  if (value > 0) {
    const proj = document.createElement('li');
    proj.classList.add('project-item');
    proj.innerHTML = `
    <img class="proj-img"src="${projects[value].image[0]}" alt="projects">
    <h2 class="title">${projects[value].name[0]}</h2>
    <p class="text">${projects[value].description[0]}</p>
    <ul class="btn no-style-deco">
        <li> <button type="button" class="grey-button">${projects[value].technologies[0]}</button></li>
    </ul>
<button type="button" class="orange-button link-btn">See project</button> 
  `;
    works.appendChild(proj);
  }
});

/* Add modal to the website upon clicking the projects' link */
const body = document.querySelector('body');

const linkButton = document.querySelectorAll('.link-btn');

linkButton.forEach((par, index) => {
  par.addEventListener('click', () => {
    const modal = document.createElement('div');
    const overlay = document.createElement('div');
    modal.className = 'modal';
    if (width < 768) {
      modal.innerHTML = `<div class="modal-header">
    <h2 class="project-title">${projects[index].name[0]}</h2>
    <div id="modal-close"><img src="media/Icon.png" alt="close"></div>
    </div>
    <ul class="btn no-style-deco" id="btn-modal">
        <li> <button type="button" class="grey-button modal-btn">${projects[index].technologies[0]}</button></li>      
    </ul>
    <div id="modal-main">
    <img id="image" src="${projects[index].image[1]}" alt="popup image">
    <div class="modal-p">
    <p class="text">${projects[index].description[2]}</p>
   <div id="mod-btn">
    <a href="${projects[index].sourceLink}" target="_blank">
    <button type="button" class="art-btn link-btn">See source<img class="modal-icon" src="media/gD.png" alt="icon"></button>
  </a> 
    </div>
    </div>
    </div>
 `;
    } else {
      modal.innerHTML = `<div class="modal-header">
        <h2 class="project-title">${projects[index].name[1]}</h2>
        <div id="modal-close"><img src="media/Icon.png" alt="close"></div>
        </div>
        <ul class="btn no-style-deco" id="btn-modal">
            <li> <button type="button" class="grey-button modal-btn">${projects[index].technologies[0]}</button></li>       
        </ul>
        <div id="modal-main">
        <img id="image" src="${projects[index].image[1]}" alt="popup image">
        <div class="modal-p">
        <p class="text">${projects[index].description[1]}</p>
       <div id="mod-btn">
       <a href=${projects[index].sourceLink} target="_blank">
         <button type="button" class="art-btn link-btn">See source<img class="modal-icon" src="media/gD.png" alt="icon"></button>
       <a>  
        </div>
        </div>
        </div>
     `;
    }

    body.insertAdjacentElement('afterBegin', modal);
    overlay.className = 'blur';
    body.appendChild(overlay);
    const closeBtn = document.querySelector('#modal-close');
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', () => {
      body.removeChild(modal);
      body.removeChild(overlay);
    });
  });
});

/* Validate form email field by restricting to small letters only */

const form = document.querySelector('#contact-form');
const mail = form.elements.email;
const container = document.querySelector('#field');
const msg = document.createElement('small');

form.addEventListener('submit', (event) => {
  const emailRegex = (/[A-Z]/);
  if (emailRegex.test(mail.value)) {
    event.preventDefault();
    msg.innerHTML = 'Please enter lowercase letters only in your email.';
    mail.style.border = '1px solid red';
    container.appendChild(msg);
  }
});
mail.addEventListener('click', () => container.removeChild(msg));

const fName = form.elements.fname;
const lName = form.elements.lname;
const mInput = form.elements.messege;

const data = JSON.parse(localStorage.getItem('formData'));

if (data) {
  fName.value = data.fname;
  lName.value = data.lname;
  mail.value = data.email;
  mInput.value = data.messege;
}
form.addEventListener('input', () => {
  const formData = {
    fname: fName.value,
    lname: lName.value,
    email: mail.value,
    messege: mInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
