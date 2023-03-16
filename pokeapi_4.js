let pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let pokeapiData;
let pokeurl = [];
const xhr = new XMLHttpRequest();

xhr.open('GET', pokeapi);
xhr.send();

xhr.onload = () => {
  pokeapiData = JSON.parse(xhr.response);

  // console.log(pokeapiData)

  for (i = 0; i < pokeapiData.count; i++) {
    pokeurl[i] = pokeapiData.results[i].url;
  }
  // console.log(pokeurl)
  let count = 0;

  Pick.children[1].children[1].onclick = () => {

    Pick.children[1].children[1].style.width = "50%";
    Pick.children[1].children[1].textContent = "Skip"
    Pick.children[1].children[0].style.display = "flex";
    // Pick.children[1].children[1].style.textAlign="center";

    randomnumber = Math.floor(Math.random() * pokeurl.length);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', pokeurl[randomnumber]);
    xhr.send();

    xhr.onload = () => {
      let pokemon = JSON.parse(xhr.response);
      console.log(pokemon)

      Pick.children[0].style.backgroundImage = "url(" + pokemon.sprites.front_default + ")";
      Pick.children[0].style.backgroundSize = "contain"
      Pick.children[0].style.backgroundRepeat = "no-repeat"
      Pick.children[0].style.backgroundPosition = "center"
      console.dir(Pick.children[1].children[0])

      console.log(count)

      Pick.children[1].children[0].onclick = () => {
        console.log(count)

        CreaDoc("div", inventory);
        inventory.children[count].style.backgroundImage = "url(" + pokemon.sprites.front_default + ")";
        inventory.children[count].style.backgroundSize = "contain"
        inventory.children[count].style.backgroundRepeat = "no-repeat"
        inventory.children[count].style.backgroundPosition = "center"
        CommonStyle(inventory.children[count], "30%", "25%")
        count += 1;
        console.log(count)
      }
    }


  }

}
