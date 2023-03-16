let pokeurl = [];
let randomnumber;
const xhr = new XMLHttpRequest();
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

xhr.open('GET', url);
xhr.send();

xhr.onload = () => {
  const Data = JSON.parse(xhr.response);

  for (i = 0; i < Data.count; i++) {
    pokeurl[i] = Data.results[i].url;
  }

  console.dir(pokeurl);
  return pokeurl
}
// 여기서 딱 막혀있는 느낌

console.dir(pokeurl);


xhr.onloadend = () => {
  console.dir(pokeurl);
  let randomnumber = Math.floor(Math.random()*pokeurl.length);

  console.log(pokeurl[randomnumber])

  // xhr.open("GET",pokeurl[randomnumber]);
  // xhr.send();
  // xhr.onload = () =>{
  //   const pokemondata = JSON.parse(xhr.response);
    
  //   console.log(pokemondata)

  // }

}