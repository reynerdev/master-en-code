let canvasLeft;
let contextLeft;
let canvasRight;
let radiusPokeball = 200;
let radiusPokeballInside = radiusPokeball / 4;
let pokemonlist;

let pokemonColorType = {
  grass: '#9bcc50',
  poison: '#ba80ca',
  water: '#4693c5',
  rock: '#a38c21',
  flying: '#bdb9b8',
  normal: '#a4acaf',
  ground: '#ab9842',
  bug: '#729f3f',
  dragon: '#53a4cf',
  dragon: '#f16e57',
  fairy: '#fdb9e9',
  fire: '#fd7d24',
  ghost: '#7b62a3',
  psychic: '#f366b9',
  steel: '#9eb7b8 ',
  dark: '#707070',
  electric: '#eed535',
  fighting: '#d56723',
  ice: '#51c4e7',
};

window.addEventListener('load', () => {
  pokeball();
});

let menu = document.getElementsByClassName('nav-link dropdown-toggle')[0];

menu.addEventListener('click', () => {
  let dropdownMenu = document.getElementsByClassName('dropdown-menu')[0];

  /*Remove all the previous dropdown items */

  dropdownMenu.innerHTML = '';
  console.log('dropdown');
  fetch('https://pokeapi.co/api/v2/region/')
    .then((resp) => resp.json())
    .then((data) => {
      console.log('beforeforeach');
      data.results.forEach((element) => {
        console.log(element.url);
        fetch(element.url)
          .then((res) => res.json())
          .then((pokedex) => {
            let a = document.createElement('a');
            a.className = 'dropdown-item';
            console.log(pokedex);
            a.setAttribute(
              'idPokedex',
              pokedex.pokedexes[0].url.slice(
                34,
                pokedex.pokedexes[0].url.length - 1
              )
            );
            a.innerHTML =
              element.name.charAt(0).toUpperCase() + element.name.slice(1);

            a.addEventListener('click', (e) => {
              console.log(e.target.getAttribute('idPokedex'));
              var idPkedex = e.target.getAttribute('idPokedex');
              //Run the funcion that rendes the new pokemons
              pokemonByPokedex2(idPkedex);
            });

            dropdownMenu.appendChild(a);
          });
      });
    });
});

function pokeball() {
  console.log('Entrando en Pokeball');
  canvasLeft = document.querySelector('#leftPokeball');
  contextLeft = canvasLeft.getContext('2d');

  canvasLeft.height = document.body.clientHeight;
  canvasLeft.width = document.body.clientWidth;

  // console.log(canvasLeft.height, window.innerHeight);

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
    pokemonlist = await data;
    data.pokemon_entries.forEach((element) => {
      var pokemonName = element.pokemon_species.name;
      var pokemoid = element.entry_number;
      // console.log(pokemoid);
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

async function pokemonByPokedex2(pokedexid) {
  console.log('Entrando a pokedex2');
  var resp = await fetch(`https://pokeapi.co/api/v2/pokedex/${pokedexid}`);
  var data = await resp.json();

  document.body.style.overflowY = 'visible';
  data.pokemon_entries.forEach((element) => {
    var pokemonName = element.pokemon_species.name;
    var pokemoid = element.entry_number;
    let container = document.getElementsByClassName('container-fluid')[0];
    // clean the container before adding the sets of cards
    container.innerHTML = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoid}`)
      .then((resp) => resp.json())
      .then((data) => {
        pokemonCards(
          pokemonName,
          data.sprites.other.dream_world.front_default,
          data.id,
          data
        );
      })
      .catch((erro) => console.log(erro));
  });

  return data;
}

//recursive function to fill a list with pokemon IDs according to the evolution chain

function appendPokemon(obj, list) {
  if (obj.evolves_to === []) {
    console.log(list);
    return list;
  } else {
    list.append(obj.species.url);
    appendPokemon(obj.evolves_to);
  }
}

$('#myModal').on('show.bs.modal', function (e) {
  // console.log('insideneventmodal');
  // console.log(e.relatedTarget.getAttribute('idPokemon'));

  //Show Evolution chain

  // fetch(    `https://pokeapi.co/api/v2/pokemon-species/${e.relatedTarget.getAttribute(
  //   'idPokemon'
  // )}`).then(resp=>resp.json()).then(data =>  {

  //   fetch(data.evolution_chain.url).then(r=>r.json()).then(chain => {
  //     var pokemonList = []

  //   })

  // })

  fetch(
    `https://pokeapi.co/api/v2/pokemon/${e.relatedTarget.getAttribute(
      'idPokemon'
    )}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      /*Adding img source to the modal*/
      let img = document.getElementById('modalPokemon-img');
      img.src = data.sprites.other.dream_world.front_default;
      img.style.width = '100%';

      var name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      let modalTitle = document.getElementById('modalPokemon-title');
      modalTitle.innerHTML = `N.º ${data.id} ${name}`;

      /*Adding value to the progress bar */
      let progressTag = document.getElementById('ps');

      // console.log(progressTag);

      let value = data.stats.find((element) => {
        return element.stat.name == 'hp';
      });

      // console.log(`width: ${value.base_stat} %`);
      progressTag.style.width = `${value.base_stat}%`;

      progressTag = document.getElementById('ataque');
      value = data.stats.find((element) => {
        return element.stat.name == 'attack';
      });
      progressTag.style.width = `${value.base_stat}%`;

      progressTag = document.getElementById('defensa');
      value = data.stats.find((element) => {
        return element.stat.name == 'defense';
      });
      progressTag.style.width = `${value.base_stat}%`;

      progressTag = document.getElementById('ataqueespecial');
      value = data.stats.find((element) => {
        return element.stat.name == 'special-attack';
      });
      progressTag.style.width = `${value.base_stat}%`;

      progressTag = document.getElementById('defensaespecial');
      value = data.stats.find((element) => {
        return element.stat.name == 'special-defense';
      });
      progressTag.style.width = `${value.base_stat}%`;

      progressTag = document.getElementById('velocidad');
      value = data.stats.find((element) => {
        return element.stat.name == 'speed';
      });
      progressTag.style.width = `${value.base_stat}%`;

      /*Create buttons for the types */

      let btncontainer = document.getElementsByClassName('tipos')[0];
      btncontainer.innerHTML = ' '; // cleaning the types before loading the modal
      data.types.forEach((element) => {
        let btn = document.createElement('button');
        btn.className = 'btnTypes';
        var typename = element.type.name;

        // console.log(typename);
        btn.style.backgroundColor = pokemonColorType[typename];
        btn.innerHTML =
          element.type.name.charAt(0).toUpperCase() +
          element.type.name.slice(1);

        btncontainer.appendChild(btn);
      });
    });
});

function listGeneration(generation) {
  let img = document.createElement('img');
}

function pokemonCards(pokemonName, imgLink, idPokemon, data) {
  let container = document.getElementsByClassName('container-fluid')[0];

  let card = document.createElement('card');
  card.className = 'card';
  card.style.width = '18rem';
  card.style.margin = '20px';
  card.style.border = 'none';
  card.style.cursor = 'pointer';
  card.setAttribute('data-toggle', 'modal');
  card.setAttribute('data-target', '#myModal');
  card.setAttribute('idPokemon', idPokemon);

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

  //add elements types to the card
  var typesStringTags = ''; // cleaning the typesC before loading the modal
  data.types.forEach((element) => {
    let btn = document.createElement('button');
    btn.className = 'btnTypesCard';
    var typename = element.type.name;

    btn.style.backgroundColor = pokemonColorType[typename];
    btn.innerHTML =
      element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1);

    typesStringTags += btn.outerHTML;
  });

  cardBody.innerHTML += `<div class='typesCard'>${typesStringTags}</div>`;
  // cardBody.innerHTML += `<p class='card-text'>${pokemonName}</P>`;
  card.appendChild(img);
  card.appendChild(cardBody);
  container.appendChild(card);
}

var body = document.body;
body.style.overflowY = 'hidden';
body.style.overflowX = 'hidden';
console.log('Before launching pokeball');
var a = new Pokemon();
pokemonByPokedex2(2);

console.log('Hi');
