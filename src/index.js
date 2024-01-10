document.addEventListener('DOMContentLoaded', fetchImages);


function fetchImages() {
    const dogArray = [];
    const dogList = document.querySelector('#dog-breeds')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(image => {
            const div = document.querySelector('#dog-image-container')
            const img = document.createElement('img')
            img.src = image
            div.appendChild(img)
        })
    })

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        for (let breed in data.message) {
            dogArray.push(breed)
            const li = document.createElement('li')
            li.innerText = breed;
            dogList.appendChild(li)

            li.addEventListener('click', (e) => {
                e.target.style.color = "pink"
            })
        }
    })


    const dropdown = document.querySelector('#breed-dropdown')
    
    dropdown.addEventListener('change', (e) => {
        const selected = e.target.value
        dogList.innerHTML = ""
        dogArray.forEach(dog => {
            const firstLetter = dog.charAt(0).toLowerCase()
            if (selected === firstLetter) {
                const li = document.createElement('li')
                li.innerText = dog
                dogList.appendChild(li)
            }
        })
    })


}