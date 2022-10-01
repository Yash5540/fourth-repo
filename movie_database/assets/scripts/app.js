// const hdr = document.querySelector('header');
// const btn = hdr.lastElementChild;
// console.log(btn);
// const modal_class = document.querySelector('.modal');
// console.log(modal_class);

// btn.addEventListener('click', ()=>{
//   modal_class.classList.add('visible');
// })

//OR

// const addMovieModal = document.getElementById('add-modal');
const movies = [];
const ulForMovies = document.getElementById('movie-list');
let listItemIndex = -1;
const entryTextSection = document.getElementById('entry-text');

const deleteListItem = (listItemIndex)=>{
 movies.splice(listItemIndex, 1);
 ulForMovies.children[listItemIndex].remove();
 

}
const UpdateUIwithMovies = (title, url, rating)=>{
  const listItems = document.createElement('li');

  listItems.className = 'movie-element';
  listItems.innerHTML = `
  <div class= "movie-element__image">
  <img src="${url}" alt="${title}">
  </div>
  <div class= "movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 Stars</p>
  </div>
  `;
  
  ulForMovies.append(listItems);
  listItems.addEventListener('click' , deleteListItem.bind(null, listItemIndex));
};


const updateUI = ()=>{
  if(movies.length === 0){
entryTextSection.style.display = 'block';  
  }else{
    entryTextSection.style.display = 'none';// cuz we need to add movie List instead of this
  }
}

const addMovieModal = document.querySelector('#add-modal');
console.log(addMovieModal);
// const addMovieModal = document.body.children[1];
// const startAddMovieButton = document.querySelector('header button');
const startAddMovieButton = document.querySelector('header').lastElementChild;
console.log(startAddMovieButton);

const toggleMovieModal = () =>{
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();                   // can do this insted of writing another "addEvent.."
};


const backDropElement = document.getElementById('backdrop');

const toggleBackdrop = ()=> {
  backDropElement.classList.toggle('visible');
};
// // startAddMovieButton.addEventListener('click' , toggleBackdrop);
const closeMovieModalHandler = ()=>{

  // backDropElement.classList.remove('visible');
  // addMovieModal.classList.remove('visible');

//                 Or

toggleMovieModal();
clearMovieInputs();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backDropElement.addEventListener('click', closeMovieModalHandler);

const cancelMovieBtn = document.querySelector('.btn.btn--passive');
console.log(cancelMovieBtn);
cancelMovieBtn.addEventListener('click', closeMovieModalHandler);

const addMovieButton = document.querySelector('.btn.btn--success');
console.log(addMovieButton);

const userInputs = document.querySelectorAll('input');

const clearMovieInputs = ()=> {
  // userInputs[0].value = '';  
  // userInputs[1].value = '';  
  // userInputs[2].value = '';  

  //        OR

  for(const usrInput of userInputs){
    usrInput.value = '';
  }

}

const addMoviehandler = ()=>{
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if(titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim()=== '' || ratingValue === 'NaN' || parseInt(ratingValue)>5 || parseInt(ratingValue)<1){
    alert(" Please enter valid values(between 1 and 5");
  }else{
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  // We see that after this, the movie-modal doesn't close and the user-inputs dont get cleared. So,
  listItemIndex++;
  toggleMovieModal();
  clearMovieInputs();
  UpdateUIwithMovies(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
}
};



addMovieButton.addEventListener('click' , addMoviehandler);

