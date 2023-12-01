console.log('%c HI', 'color: firebrick')

/*
Add JavaScript that:
    on page load, fetches the images using the url above ⬆️
    parses the response as JSON
    adds image elements to the DOM for each 🤔 image in the array

After the first challenge is completed, add JavaScript that:

    on page load, fetches all the dog breeds using the url above ⬆️
    adds the breeds to the page in the <ul> provided in index.html
*/

document.addEventListener('DOMContentLoaded', initializePage);

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let dogArray = [];

function initializePage() {
    fetchData(imgUrl, challengeOne);
    fetchData(breedUrl, challengeTwo);
}

function fetchData(url, cb) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

// This is the 1st function that runs during initialization. It receives the data from the fetch.
// listofDogs contains the message (an array)
// imageContainer gets the <div> where the images will go
// forEach of the elements in the array which happen to be URLs, we'll create an <img> and set the source to the URLs. We then append the img to the imageContainer
function challengeOne(data) {
        const listofDogs = data.message;
        const imageContainer = document.getElementById('dog-image-container');

        listofDogs.forEach(dog => {
            let img = document.createElement('img');
            img.src = dog;
            imageContainer.appendChild(img);
            });
        }

// This is the 2nd function that runs during initialization. It receives the data from the fetch.
// This data happens to be an Object of dogs so we use a for...in to:
// Push each dog into the dogArray
// Create an <li> & <span> elements, set the ID of both to the iteration
// Append <span> to <li>, append <li> to the <ul>
// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes.
function challengeTwo(data) {
        const message = data.message;
        for(let dog in message) {
            dogArray.push(dog)
            const dogBreeds = document.querySelector('#dog-breeds');
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.id = dog;
            span.innerText = dog;
            li.appendChild(span)
            dogBreeds.appendChild(li);
            span.addEventListener('click', (e) => {
                const clicked = e.target;
                if (clicked.id === clicked.id) {
                    clicked.style.color = 'purple';
                };
            })
            };
        }

document.addEventListener('DOMContentLoaded', () => {
    // Grabbing the <select> dropdown
    const selectBox = document.querySelector('select#breed-dropdown'); 
    
    // Adds an EL that looks for a change. That change is (e).
    // selectedValue is the event's target & value
    // We set the <ul> to EMPTY upon the event
    // forEach dog within the dogArray, we match the selectedValue with the firstLetter & if there's a match, we create an <li> & a <span> and set the iterated dogs to the <span>. We append the <span> to the <li> and append the <li> to the <ul>
    selectBox.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        document.querySelector('#dog-breeds').innerText = "";
        dogArray.forEach(dog => {
            const firstLetter = dog.charAt(0).toLowerCase();
            if (selectedValue === firstLetter) {
                const li = document.createElement('li');
                const span = document.createElement('span');
                span.innerText = dog;
                li.appendChild(span);
                document.querySelector('#dog-breeds').appendChild(li);
            }
        })
    })

})

/*
Problems: My original forEach statement wasn't working because my original reasoning was that I had to remove the other unselected values from the drop down on the DOM. The solution was to find a way to have an array of the dog breeds that I could work with without destroying the elements within it every time I selected a new letter from the dropdown. By populating a variable called dogArray with the challengeTwo function, I was able to use this array for my filter EL. 
*/