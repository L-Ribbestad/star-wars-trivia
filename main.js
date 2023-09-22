const urlApi = "https://swapi.dev/api/";
let character1Name = "";
let character2Name = "";
const dataBtn = document.querySelector("#data-btn")
const character1Div = document.querySelector("#character1-div")
const character2Div = document.querySelector("#character2-div")
const char1H2 = document.querySelector("#char1-h2")
const char2H2 = document.querySelector("#char2-h2")
const compareBtn = document.querySelector("#compare-btn")
const hairColorP1 = document.getElementById("haircolor-p1")
const heightP1 = document.getElementById("height-p1")
const massP1 =document.getElementById("mass-p1")
const genderP1 = document.getElementById("gender-p1")
const skinColorP1 = document.getElementById("skincolor-p1")
const eyeColorP1 = document.getElementById("eyecolor-p1")
const moviesP1 = document.getElementById("movies-p1")
const hairColorP2 = document.getElementById("haircolor-p2")
const heightP2 = document.getElementById("height-p2")
const massP2 = document.getElementById("mass-p2")
const genderP2 = document.getElementById("gender-p2")
const skinColorP2 = document.getElementById("skincolor-p2")
const eyeColorP2 = document.getElementById("eyecolor-p2")
const moviesP2 = document.getElementById("movies-p2")
const char1Img = document.getElementById("char1-img");
const char2Img = document.getElementById("char2-img");

let character1;
let character2;

class Character{
    constructor(name, gender, height, mass, hair_color, skin_color, eye_color, films){
        this.name = name
        this.gender = gender
        this.height = Number(height)
        this.mass = Number(mass)
        this.hair_color = hair_color
        this.skin_color = skin_color
        this.eye_color = eye_color
        this.movies = Number(films)
        this.pictureUrl = `images/${name}.png`
    }
}

const select1 = document.querySelector("#character-list1")
select1.addEventListener("change", (e) => {
    character1Name = e.target.value;
    if(select1.value != "default" && select2.value != "default"){
        dataBtn.disabled = false;
    }
})
const select2 = document.querySelector("#character-list2")
select2.addEventListener("change", (e) => {
    character2Name = e.target.value;
    if(select1.value != "default" && select2.value != "default"){
        dataBtn.disabled = false;
    }
})


dataBtn.addEventListener("click", () => {
    fetch(`${urlApi}people/?search=${character1Name}`)
    .then(res => res.json())
    .then(data => {
        let char1Data = data.results[0];
        let{name, gender, height, mass, hair_color, skin_color, eye_color, films, pictureUrl} = char1Data
        character1 = new Character(
            name, gender, height, 
            mass, hair_color, skin_color, 
            eye_color, films.length, pictureUrl);
            console.log(character1);
            char1H2.textContent = character1.name;
            char1Img.src = character1.pictureUrl;
    })
     fetch(`${urlApi}people/?search=${character2Name}`)
    .then(res => res.json())
    .then(data => {
        let char2Data = data.results[0];
        let{name, gender, height, mass, hair_color, skin_color, eye_color, films, pictureUrl} = char2Data
        character2 = new Character(
             name, gender, height, 
             mass, hair_color, skin_color, 
             eye_color, films.length, pictureUrl);
             console.log(character2);
             char2H2.textContent = character2.name;
             char2Img.src = character2.pictureUrl;
    })
    compareBtn.hidden = false;
    document.getElementById("info-div1").hidden = true;
    document.getElementById("info-div2").hidden = true;
    char1Img.hidden = false;
    char2Img.hidden = false;
})
compareBtn.addEventListener("click", () => {
    if(character1.hair_color === character2.hair_color){
        hairColorP1.textContent = `Haircolor: ${character1.hair_color}`;
        hairColorP2.textContent = `Haircolor: ${character2.hair_color}`;
        hairColorP1.style.color = "#49e282";
        hairColorP2.style.color = "#49e282";
    } else{
        hairColorP1.textContent = `Haircolor: ${character1.hair_color}`;
        hairColorP2.textContent = `Haircolor: ${character2.hair_color}`;
        hairColorP1.style.color = "black";
        hairColorP2.style.color = "black";
    }

    if(character1.height < character2.height){
        heightP2.innerHTML = `<u>Height: ${character2.height}</u>`;
        heightP1.innerHTML = `Height: ${character1.height}`;
    } else if(character2.height < character1.height){
        heightP1.innerHTML = `<u>Height: ${character1.height}</u>`;
        heightP2.innerHTML = `Height: ${character2.height}`;
    } else {
        heightP1.innerHTML = `<u>Height: ${character1.height}</u>`;
        heightP2.innerHTML = `<u>Height: ${character2.height}</u>`;
    }

    if(character1.mass < character2.mass){
        massP2.innerHTML = `<u>Mass: ${character2.mass}</u>`;
        massP1.innerHTML = `Mass: ${character1.mass}`;
    } else if(character2.mass < character1.mass){
        massP1.innerHTML = `<u>Mass: ${character1.mass}</u>`;
        massP2.innerHTML = `Mass: ${character2.mass}`;
    } else {
        massP1.innerHTML = `<u>Mass: ${character1.mass}</u>`;
        massP2.innerHTML = `<u>Mass: ${character2.mass}</u>`;
    }

    if(character1.movies < character2.movies){
        moviesP2.innerHTML = `<u>Movies: ${character2.movies}</u>`;
        moviesP1.innerHTML = `Movies: ${character1.movies}`;
    } else if(character2.movies < character1.movies){
        moviesP1.innerHTML = `<u>Movies: ${character1.movies}</u>`;
        moviesP2.innerHTML = `Movies: ${character2.movies}`;
    } else {
        moviesP1.innerHTML = `<u>Movies: ${character1.movies}</u>`;
        moviesP2.innerHTML = `<u>Movies: ${character2.movies}</u>`;
    }

    if(character1.gender === character2.gender){
        genderP1.textContent = `Gender: ${character1.gender}`;
        genderP2.textContent = `Gender: ${character2.gender}`;
        genderP1.style.color = "#49e282";
        genderP2.style.color = "#49e282";
    }else{
        genderP1.textContent = `Gender: ${character1.gender}`;
        genderP2.textContent = `Gender: ${character2.gender}`;
        genderP1.style.color = "black";
        genderP2.style.color = "black";
    }
    
    if(character1.skin_color === character2.skin_color){
        skinColorP1.textContent = `Skincolor: ${character1.skin_color}`;
        skinColorP2.textContent = `Skincolor: ${character2.skin_color}`;
        skinColorP1.style.color = "#49e282";
        skinColorP2.style.color = "#49e282";
    } else {
        skinColorP1.textContent = `Skincolor: ${character1.skin_color}`;
        skinColorP2.textContent = `Skincolor: ${character2.skin_color}`;
        skinColorP1.style.color = "black";
        skinColorP2.style.color = "black";

    }

    if(character1.eye_color === character2.eye_color){
        eyeColorP1.textContent = `Eyecolor: ${character1.eye_color}`;
        eyeColorP2.textContent = `Eyecolor: ${character2.eye_color}`;
        eyeColorP1.style.color = "#49e282";
        eyeColorP2.style.color = "#49e282";
    } else{
        eyeColorP1.textContent = `Eyecolor: ${character1.eye_color}`;
        eyeColorP2.textContent = `Eyecolor: ${character2.eye_color}`;
        eyeColorP1.style.color = "black";
        eyeColorP2.style.color = "black";
    }
    compareBtn.hidden = true;
    document.getElementById("info-div1").hidden = false;
    document.getElementById("info-div2").hidden = false;
})
    







