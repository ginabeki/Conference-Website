const arrData = [
  {
    id: 1,
    name: 'Shyla Preston',
    role: 'Art Director',
    img: './images/passport-1.jpg',
    alt: 'Headshot of a man in black shirt',
    info: ' In charge of developing and maintaining a creative vision that speaks to the reader, viewer, or user',
  },

  {
    id: 2,
    name: 'Dakota Taylor',
    role: 'Artists',
    img: './images/passport-4.jpg',
    alt: 'Headshot of a woman',
    info: 'Capable of transforming a few humble materials into objects which are imbued with spiritual and aesthetic',
  },

  {
    id: 3,
    name: 'Emery Bowers',
    role: 'Designer',
    img: './images/passport-2.jpg',
    alt: 'Headshot of a man in black suit and red tie',
    info: " Comprehending a client's vision, the company's core values, and defining a brand's visual identity",
  },

  {
    id: 4,
    name: 'Shyla Preston',
    role: 'Illustrator',
    img: './images/passport-5.jpg',
    alt: 'Headshot of a woman in blue top',
    info: 'Specialised in a particular design medium, such as drawing, photography or digital illustration',
  },
  {
    id: 5,
    name: 'Carly Cohen',
    role: 'Industrial Designer',
    img: './images/passport-3.jpg',
    alt: 'Headshot of a man in a light blue suit',
    info: 'Create concepts and translate them in to visual form-by sketches, models and then through computer software',
  },
  {
    id: 6,
    name: 'Leo Richardson',
    role: 'Curator',
    img: './images/passport-6.jpg',
    alt: 'Headshot of a man in a navy blue suit',
    info: 'Prepares the exhibition locations',
  },

];

const team = document.querySelector('.team-container');

for (let i = 0; i < arrData.length; i += 1) {
  const viewSpeakers = team.innerHTML;
  team.innerHTML = `
      <div class="individual">
        <div class="frame">
          <img src="${arrData[i].img}" alt="${arrData[i].alt}" />
        </div>
        <div class="team-details">
          <h4 class="name">${arrData[i].name}</h4>
          <p class="role">${arrData[i].role}</p>
          <span class="line"></span>
          <div class="info">${arrData[i].info}  
          </div>
        </div>
      </div>${viewSpeakers}`;
}
