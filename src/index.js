const urlBreeds = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_Mfoctkyb81AdTnvkuASKbgDMF3qZlosxU5mxt0kho40Taaq9x32aHUfQTzhcu54D"
let storedBreeds = []
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
const refs = {
    select: document.querySelector(".breed-select"),
    catInfo: document.querySelector(".cat-info"),
}

 fetch(urlBreeds,{
    headers: {
      'x-api-key': api_key
    }})
    .then((response) => {
    if(!response.ok){
      throw new Error
    } else {
      return response.json();
    }
   
 })
 .then((data) => fillSelect(data))


function fillSelect (cats) {

   const catsArr = cats.map(cat => `
    <option value="${cat.id}">${cat.name}</option>
    `).join("")
    refs.select.insertAdjacentHTML("beforeend", catsArr)
}


// setOutput();

refs.select.addEventListener("change", setOutput);

function setOutput(event) {
    event.preventDefault()
  const selectedOptionValue = refs.select.value;
//   const selectedOptionIndex = refs.select.selectedIndex;
  const selectedOptionText = refs.select.options[refs.select.selectedIndex].text;
  const urlImages = `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedOptionValue}`;

  fetch(urlImages,{
    headers: {
      'x-api-key': api_key
    }})
    .then((response) => {
    if(!response.ok){
      throw new Error
    } else {
      return response.json();
    }
   
 })
 .then((data) => {
    refs.catInfo.innerHTML = ""
    renderCat(...data)});
//  зображення і розгорнута інформація про кота: назва породи, опис і темперамент.

}

function renderCat(cat) {
    const breeds = {...cat.breeds[0]};
    console.log(breeds);
    const markup = `      
    <img src="${cat.url}" alt="">
    <h2>${breeds.name}</h2>
    <p>${breeds.description}</p>
    <p>${breeds.temperament}</p>`
    refs.catInfo.insertAdjacentHTML("beforeend", markup)
    console.log(cat);
}

// {
//     "breeds": [
//         {
//             "weight": {
//                 "imperial": "7 - 15",
//                 "metric": "3 - 7"
//             },
//             "id": "amis",
//             "name": "Australian Mist",
//             "temperament": "Lively, Social, Fun-loving, Relaxed, Affectionate",
//             "origin": "Australia",
//             "country_codes": "AU",
//             "country_code": "AU",
//             "description": "The Australian Mist thrives on human companionship. Tolerant of even the youngest of children, these friendly felines enjoy playing games and being part of the hustle and bustle of a busy household. They make entertaining companions for people of all ages, and are happy to remain indoors between dusk and dawn or to be wholly indoor pets.",
//             "life_span": "12 - 16",
//             "indoor": 0,
//             "lap": 1,
//             "alt_names": "Spotted Mist",
//             "adaptability": 5,
//             "affection_level": 5,
//             "child_friendly": 4,
//             "dog_friendly": 5,
//             "energy_level": 4,
//             "grooming": 3,
//             "health_issues": 1,
//             "intelligence": 4,
//             "shedding_level": 3,
//             "social_needs": 4,
//             "stranger_friendly": 4,
//             "vocalisation": 3,
//             "experimental": 0,
//             "hairless": 0,
//             "natural": 0,
//             "rare": 0,
//             "rex": 0,
//             "suppressed_tail": 0,
//             "short_legs": 0,
//             "wikipedia_url": "https://en.wikipedia.org/wiki/Australian_Mist",
//             "hypoallergenic": 0,
//             "reference_image_id": "_6x-3TiCA"
//         }
//     ],
//     "id": "weHGBmpb0",
//     "url": "https://cdn2.thecatapi.com/images/weHGBmpb0.jpg",
//     "width": 960,
//     "height": 854
// }
// setOutput();


//  <option value="1">Ксенія</option>
    
   
//    //filter to only include those with an `image` object
//    data = data.filter(img=> img.image?.url!=null)
   
//   storedBreeds = data;
   
//    for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
     
//      //skip any breeds that don't have an image
//      if(!breed.image)continue
     
//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
// document.getElementById('breed_selector').appendChild(option);
    
//     }
//    //show the first breed by default
//    showBreedImage(0)
// })
// .catch(function(error) {
//    console.log(error);
// });

// function showBreedImage(index)
// { 
//   document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
//   document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
//   document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
//   document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }