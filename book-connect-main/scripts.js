import { books } from "./data.js";            //imports books, authors, and genres from the data.js file
import { authors } from "./data.js";
import { genres } from "./data.js";

// created document fragment and extract a set of books from the books array defined in the data.js file that we imported.
const fragment = document.createDocumentFragment()
let startIndex = 0;
let endIndex = 36;
const extracted = books.slice(startIndex, endIndex)
  for (let i = 0; i < extracted.length; i++) {    //loop generates a preview for each book extracted and appends it to the document fragment.
      const preview = document.createElement('dl')
      preview.className = 'preview'
      preview.dataset.id = books[i].id
      preview.dataset.title = books[i].title
      preview.dataset.image = books[i].image
      preview.dataset.subtitle = `${authors[books[i].author]} (${(new Date(books[i].published)).getFullYear()})`
      preview.dataset.description = books[i].description
      preview.dataset.genre = books[i].genres
      preview.innerHTML= /*html*/`
      <div>
      <image class='preview__image' src="${books[i].image}" alt="book pic"}/>
      </div>
      <div class='preview__info'>
      <dt class='preview__title'>${books[i].title}<dt>
      <dt class='preview__author'> By ${authors[books[i].author]}</dt>
      </div>`
      fragment.appendChild(preview)
}
const booklist = document.querySelector('[data-list-items]')
booklist.appendChild(fragment)          // append the document fragment containing the book previews to a booklist in the HTML file.


//SearchButton
const searchbutton = document.querySelector("[data-header-search]");
//eventHandler for searchButton
const showSearchButtonToggle = (event) => { 
  document.querySelector("[data-search-overlay]").style.display = "block";    // show the search overlay when the button is clicked.

};
//eventlistener for searchButton
searchbutton.addEventListener('click', showSearchButtonToggle);


//SearchCancel Button
const searchCancel = document.querySelector("[data-search-cancel]");
//eventhandler for searchCancel Button
const searchCancelToggle = () => {
  document.querySelector("[data-search-overlay]").style.display = "none";     //disabled the the search overlay when the button is clicked
};
//eventlistener for searchCancel Button
searchCancel.addEventListener('click', searchCancelToggle);


//SettingsButton
const settingbutton = document.querySelector("[data-header-settings]");
const settingbuttonToggle = () => {                 //eventHandler
  document.querySelector("[data-settings-overlay]").style.display = "block";      //show the overlay when the button is clicked 
};
//eventlistener for settingsButton
settingbutton.addEventListener('click', settingbuttonToggle);


//settingCancel
const settingCancel = document.querySelector('[data-settings-cancel]');
//eventHandler for ettingsCancelToggle
const SettingsCancelToggle = () => {
  document.querySelector("[data-settings-overlay]").style.display = "none";     //disabled the overlay when the button is clicked
};
//eventListner for ettingsCancelToggle
settingCancel.addEventListener('click', SettingsCancelToggle);



//code to display book details
//declares a constant variable named detailsToggle and assigns it an arrow function that takes an event object as a parameter.
/*
*declared variables that will hold references to elements in the HTML document. 
*The querySelector method is used to select elements based on the value of their data-attribute.

*/
  const detailsToggle = (event) => {
    const overlay1 = document.querySelector('[data-list-active]');
    const title = document.querySelector('[data-list-title]')
    const subtitle = document.querySelector('[data-list-subtitle]')
    const description = document.querySelector('[data-list-description]')
    const image1 = document.querySelector('[data-list-image]')
    const imageblur = document.querySelector('[data-list-blur]')

//checking if the event object has a dataset.id property. If it does, then the display property of the overlay1 element is set to "block", which makes it visible. 
    if (event.target.dataset.id) {
        overlay1.style.display = "block";
    }
// checking if the event object has a dataset.description property. If it does, then the innerHTML property of the description element is set to the value of the dataset.description property.    
    if (event.target.dataset.description) {
        description.innerHTML = event.target.dataset.description;
    }
//checking if the event object has a dataset.subtitle property. If it does, then the innerHTML property of the subtitle element is set to the value of the dataset.subtitle property.    
    if (event.target.dataset.subtitle) {
        subtitle.innerHTML = event.target.dataset.subtitle;
    }
//checking if the event object has a dataset.title property. If it does, then the innerHTML property of the title element is set to the value of the dataset.title property    
    if (event.target.dataset.title) {
        title.innerHTML = event.target.dataset.title;
    }
//checking if the event object has a dataset.image property. If it does, then the src attribute of the image1 element is set to the value of the dataset.image property.    
    if (event.target.dataset.image) {
        image1.setAttribute('src', event.target.dataset.image);
        imageblur.setAttribute('src', event.target.dataset.image);
    }
};


//For detailsclose
//defining a constant variable detailsClose using the document.querySelector method.
const detailsClose = document.querySelector('[data-list-close]');
// defining a function called handleDetailsCloseToggle that takes an event object as its parameter.
const handleDetailsCloseToggle = (event) => {
  document.querySelector("[data-list-active]").style.display = "none";
};
// added an event listener to the detailsClose element that listens for a "click" event.
detailsClose.addEventListener('click', handleDetailsCloseToggle);

//Bookclick
//sets up an event listener on a clickable element with a specific attribute, and calls a function when the element is clicked
const bookclick = document.querySelector('[data-list-items]')
bookclick.addEventListener('click', detailsToggle)

//Selecting Authors
//Created new option of All authors and appended it
const authorSelect = document.querySelector("[data-search-authors]"); 

const NewAuthor = document.createElement('option');
NewAuthor.value = 'All Authors'
NewAuthor.textContent = 'All Authors'
authorSelect.appendChild(NewAuthor);

//sets up a for...in loop to iterate over the keys (author IDs) of the authors object. For each key, the loop will execute the following code block.
for (const authorId in authors) {
  const optionElement = document.createElement('option')
  optionElement.value = authorId
  optionElement.textContent = authors[authorId]
  authorSelect.appendChild(optionElement)
};


//For Genres
const genreSelect = document.querySelector("[data-search-genres]");

//Created new option for Allgenres 
const NewGenre = document.createElement('option')
NewGenre.value = 'All genre'
NewGenre.textContent = 'All genre'
genreSelect.appendChild(NewGenre);

for (const genreId in genres) {
  const optionElement = document.createElement('option')    //creating a new <option> element using the document.createElement() method and assigns it to the optionElement variable.
  optionElement.value = genreId               // setting the value attribute of the <option> element to the current author ID.
  optionElement.textContent = genres[genreId]       //setting the text content of the <option> element to the author name associated with the current author ID in the authors object.
  genreSelect.appendChild(optionElement)            //appends the <option> element to a dropdown menu with the ID authorSelect
};

//changing themes
//defined two objects, day and night, with two properties each. Each property is a string representing an RGB color value that will be used later
const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};
const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

// used the document.querySelector() method to select an element with the attribute data-settings-theme and assigns it to a variable called dataSettingsTheme
const dataSettingsTheme = document.querySelector('[data-settings-theme]')     //selecting the element with the data-settings-theme attribute using queryselector
const saveButton = document.querySelector("body > dialog:nth-child(5) > div > div > button.overlay__button.overlay__button_primary");
//attaches an event listener to the saveButton element that listens for a click event. When the button is clicked, the code inside the function is executed.
saveButton.addEventListener('click', (event) =>{
    event.preventDefault()      //The event.preventDefault() method prevents the default behavior of the button click
//checking the value of the dataSettingsTheme variable. If it is 'day', the body element's --color-dark and --color-light CSS properties are set to the values of day.dark and day.light
  if (dataSettingsTheme.value === 'day') {
    document.querySelector('body').style.setProperty('--color-dark', day.dark)
    document.querySelector('body').style.setProperty('--color-light', day.light)
    document.querySelector('[data-settings-overlay]').style.display = 'none'      //the same element with the attribute data-settings-overlay has its display property set to 'none'.
  }
//If the dataSettingsTheme value is 'night', the body element's --color-dark and --color-light
  if (dataSettingsTheme.value === 'night') {
    document.querySelector('body').style.setProperty('--color-dark', night.dark)
    document.querySelector('body').style.setProperty('--color-light', night.light)
    document.querySelector('[data-settings-overlay]').style.display = 'none'

    }
})

//showMore button
//defined a function called displayBooks which takes in a parameter pageNum
function displayBooks(pageNum) {
  const booksPerPage = 36;        //define three constants: booksPerPage which determines the number of books to display per page
  const startIndex = (pageNum - 1) * booksPerPage;      //startIndex which calculates the starting index of the extracted subset of books based on the current page number
  const endIndex = pageNum * booksPerPage;              //endIndex which calculates the ending index of the extracted subset of books.
  const extracted = books.slice(startIndex, endIndex);    //The books.slice(startIndex, endIndex) method is used to extract a subset of books based on the startIndex and endIndex variables.

//created a new document fragment that can be used to store elements before appending them to the DOM.
  const fragment = document.createDocumentFragment();

// loop through the extracted subset of books and create a preview element for each book. 
  for (let i = 0; i < extracted.length; i++) {          //The preview element is an HTML definition list (<dl>) element with attributes and data attributes set to the book properties
    const preview = document.createElement('dl');
    preview.className = 'preview';
    preview.dataset.id = extracted[i].id;
    preview.dataset.title = extracted[i].title;
    preview.dataset.image = extracted[i].image;
    preview.dataset.subtitle = `${authors[extracted[i].author]} (${(new Date(extracted[i].published)).getFullYear()})`;
    preview.dataset.description = extracted[i].description;
    preview.dataset.genre = extracted[i].genres;
    preview.innerHTML = /*html*/`
      <div>
        <image class='preview__image' src="${extracted[i].image}" alt="book pic"/>
      </div>
      <div class='preview__info'>
        <dt class='preview__title'>${extracted[i].title}</dt>
        <dt class='preview__author'>By ${authors[extracted[i].author]}</dt>
      </div>`;
    fragment.appendChild(preview);
  }

  // get the HTML element with the data-list-items attribute and set its innerHTML property to an empty string, Then the fragment that contains the preview elements is appended to the booklist1 element.
  const booklist1 = document.querySelector('[data-list-items]');
  booklist1.innerHTML = '';
  booklist1.appendChild(fragment);
}

const nextPageButton = document.querySelector('[data-list-button]');
nextPageButton.textContent = 'show-more'
let currentPage = 1;      //get the HTML element with the data-list-button attribute and set its textContent property to 'show-more'. The currentPage variable is initialized to 1.

nextPageButton.addEventListener('click', () => {
  currentPage++;
  displayBooks(currentPage);
});
