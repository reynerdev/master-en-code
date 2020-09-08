let canvasLeft;
let contextLeft;
let canvasRight;
window.addEventListener('load', () => {
  console.log('onload');
  pokeball();
  console.log('finish Load');
});

let radiusPokeball = 200;
let radiusPokeballInside = radiusPokeball / 4;

window.addEventListener('resize', pokeball);

function pokeball() {
  console.log('Resize');
  canvasLeft = document.querySelector('#leftPokeball');
  contextLeft = canvasLeft.getContext('2d');

  canvasLeft.height = document.body.clientHeight;
  canvasLeft.width = document.body.clientWidth;

  console.log(canvasLeft.height, window.innerHeight);

  contextLeft.lineWidth = 20;
  contextLeft.strokeStyle = 'black';

  //  Upper circle Red

  contextLeft.beginPath();
  contextLeft.moveTo(canvasLeft.width / 2, canvasLeft.height / 2);
  contextLeft.arc(
    canvasLeft.width / 2,
    canvasLeft.height / 2,
    radiusPokeball,
    Math.PI,
    Math.PI + Math.PI / 2,
    false
  );

  contextLeft.fillStyle = '#FF3636';
  contextLeft.fill();

  //  Lower circle White

  contextLeft.beginPath();
  contextLeft.moveTo(canvasLeft.width / 2, canvasLeft.height / 2);
  contextLeft.fillStyle = 'white';
  contextLeft.arc(
    canvasLeft.width / 2,
    canvasLeft.height / 2,
    radiusPokeball,
    Math.PI / 2,
    Math.PI,
    false
  );

  contextLeft.fill();

  //Border Pokeball
  contextLeft.beginPath();

  contextLeft.arc(
    canvasLeft.width / 2,
    canvasLeft.height / 2,
    radiusPokeball + contextLeft.lineWidth / 2,
    Math.PI / 2,
    -Math.PI / 2,
    false
  );

  contextLeft.stroke();

  //centerLine

  contextLeft.beginPath();
  contextLeft.moveTo(canvasLeft.width / 2, canvasLeft.height / 2);
  contextLeft.lineTo(canvasLeft.width / 2 - 200, canvasLeft.height / 2);
  contextLeft.stroke();

  // small circle

  contextLeft.fillStyle = 'white';
  contextLeft.moveTo(canvasLeft.width / 2, canvasLeft.height / 2);
  contextLeft.beginPath();
  contextLeft.arc(
    canvasLeft.width / 2,
    canvasLeft.height / 2,
    radiusPokeballInside,
    Math.PI / 2,
    Math.PI / 2 + Math.PI,
    false
  );
  //   contextLeft.closePath();
  contextLeft.fill();
  contextLeft.stroke();

  //stroke alongside small circle

  contextLeft.beginPath();

  contextLeft.arc(
    canvasLeft.width / 2,
    canvasLeft.height / 2,
    radiusPokeballInside + contextLeft.lineWidth / 2,
    Math.PI / 2,
    Math.PI / 2 + Math.PI,
    false
  );

  contextLeft.stroke();

  //Right Pokeball

  console.log('Resize');
  canvasLeft = document.querySelector('#rightPokeball');
  console.log(canvasLeft);
  contextLeft = canvasLeft.getContext('2d');

  canvasLeft.height = document.body.clientHeight;
  canvasLeft.width = document.body.clientWidth;

  console.log(canvasLeft.height, window.innerHeight);

  contextLeft.lineWidth = 20;
  contextLeft.strokeStyle = 'black';

  //  Upper circle Red

  contextLeft.beginPath();
  contextLeft.moveTo(0, canvasLeft.height / 2);
  contextLeft.arc(
    0,
    canvasLeft.height / 2,
    radiusPokeball,
    Math.PI + Math.PI / 2,
    Math.PI + Math.PI / 2 + Math.PI / 2,
    false
  );

  contextLeft.fillStyle = '#FF3636';
  contextLeft.fill();

  //  Lower circle White

  contextLeft.beginPath();
  contextLeft.moveTo(0, canvasLeft.height / 2);
  contextLeft.fillStyle = 'white';
  contextLeft.arc(
    0,
    canvasLeft.height / 2,
    radiusPokeball,
    0,
    Math.PI - Math.PI / 2,
    false
  );

  contextLeft.fill();

  //Border Pokeball
  contextLeft.beginPath();

  contextLeft.arc(
    0,
    canvasLeft.height / 2,
    radiusPokeball + contextLeft.lineWidth / 2,
    -Math.PI / 2,
    Math.PI / 2,
    false
  );

  contextLeft.stroke();

  //centerLine

  contextLeft.beginPath();
  contextLeft.moveTo(0, canvasLeft.height / 2);
  contextLeft.lineTo(radiusPokeball, canvasLeft.height / 2);
  contextLeft.stroke();

  // small circle

  contextLeft.fillStyle = 'white';
  contextLeft.moveTo(0, canvasLeft.height / 2);
  contextLeft.beginPath();
  contextLeft.arc(
    0,
    canvasLeft.height / 2,
    radiusPokeballInside,
    -Math.PI / 2,
    Math.PI / 2,
    false
  );
  //   contextLeft.closePath();
  contextLeft.fill();
  contextLeft.stroke();
  //stroke alongside small circle

  contextLeft.beginPath();

  contextLeft.arc(
    0,
    canvasLeft.height / 2,
    radiusPokeballInside + contextLeft.lineWidth / 2,
    -Math.PI / 2,
    Math.PI / 2,
    false
  );

  contextLeft.stroke();
}

function Pokemon() {
  this.RetrieveByName = async function (idPokemon) {
    var resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    var data = await resp.json();
  };

  this.pokemonByPokedex = async function (pokedexid) {
    var resp = await fetch(`https://pokeapi.co/api/v2/pokedex/${pokedexid}`);
    var data = await resp.json();
    data.pokemon_entries.forEach((element) => {
      var pokemonName = element.pokemon_species.name;
      var pokemoid = element.entry_number;
      console.log(pokemoid);
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoid}`)
        .then((resp) => resp.json())
        .then((data) => {
          pokemonCards(
            pokemonName,
            data.sprites.other.dream_world.front_default,
            data.id
          );
        })
        .catch((erro) => console.log(erro));
    });
  };
}

console.log('Finish Test1');

$('document').on('shown.bs.modal', '#myModal', function (e) {
  // do something...
  console.log('insideneventmodal');
  console.log($(e.relatedTarget));
});

$('#myModal').on('shown.bs.modal', function (e) {
  // do something...
  console.log('insideneventmodal');
  console.log($(e.relatedTarget));
});

function listGeneration(generation) {
  let img = document.createElement('img');
}

function pokemonCards(pokemonName, imgLink, idPokemon) {
  //   console.log('StartPokemon');
  //   console.log(idPokemon);
  let container = document.getElementsByClassName('container-fluid')[0];
  let card = document.createElement('card');
  card.className = 'card';
  card.style.width = '18rem';
  card.style.margin = '20px';
  card.style.border = 'none';
  card.style.cursor = 'pointer';
  card.setAttribute('data-toggle', 'modal');
  card.setAttribute('data-target', '#myModal');

  //create Style to add the attributes to the tag img to use the modal from boostrap

  let style = document.createElement('style');

  let img = document.createElement('img');
  img.style.borderRadius = '1rem';
  img.src = imgLink;
  img.className = 'card-img-top imgPokemon';
  img.alt = pokemonName;
  img.style.height = '18rem';
  img.style.backgroundColor = '#f2f2f2';
  img.style.padding = '40px';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  var upperCaseFirst =
    pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  cardBody.innerHTML = `<h6>N.º ${idPokemon}</h6>`;
  cardBody.innerHTML += `<h5 class='card-title'>${upperCaseFirst}</h5>`;
  cardBody.innerHTML += `<p class='card-text'>${pokemonName}</P>`;
  card.appendChild(img);
  card.appendChild(cardBody);
  container.appendChild(card);
}
var a = new Pokemon();
a.pokemonByPokedex(2);
