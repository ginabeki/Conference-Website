const arrData = [
  {
    id: 1,
    name: 'Shyla Preston',
    role: 'Art Director',
    img: './images/passport-1.jpg',
    info: ' In charge of developing and maintaining a creative vision that speaks to the reader, viewer, or user',
  },

  {
    id: 2,
    name: 'Dakota Taylor',
    role: 'Artists',
    img: './images/passport-4.jpg',
    info: 'Capable of transforming a few humble materials into objects which are imbued with spiritual and aesthetic',
  },

  {
    id: 3,
    name: 'Emery Bowers',
    role: 'Designer',
    img: './images/passport-2.jpg',
    info: " Comprehending a client's vision, the company's core values, and defining a brand's visual identity",
  },

  {
    id: 4,
    name: 'Shyla Preston',
    role: 'Illustrator',
    img: './images/passport-5.jpg',
    info: 'Specialised in a particular design medium, such as drawing, photography or digital illustration',
  },
  {
    id: 5,
    name: 'Carly Cohen',
    role: 'Industrial Designer',
    img: './images/passport-3.jpg',
    info: 'Create concepts and translate them in to visual form-by sketches, models and then through computer software',
  },
  {
    id: 6,
    name: 'Leo Richardson',
    role: 'Curator',
    img: './images/passport-6.jpg',
    info: 'Prepares the exhibition locations',
  },

];

const team = document.querySelector('.team-container');

for (let i = 0; i < arrData.length; i += 1) {
  const viewSpeakers = team.innerHTML;
  team.innerHTML = `
      <div class="individual">
        <div class="frame">
          <img src="${arrData[i].img}" alt="Passport photo" />
        </div>
        <div class="team-details">
          <h5 class="name">${arrData[i].name}</h5>
          <h6 class="role">${arrData[i].role}</h6>
          <span class="line"></span>
          <div class="info">${arrData[i].info}  
          </div>
        </div>
      </div>${viewSpeakers}`;
}
