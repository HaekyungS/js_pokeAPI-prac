let pokeurl=[];
let pokeapiData;
let randomnumber;
let xhr;

let getData=(url,Data)=>{
xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onload = () => {
  Data = JSON.parse(xhr.response);
  console.log(Data)
}
}

getData("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0", pokeapiData);
// 여기까지 진행된 건 알겠음. api 데이터를 받아왔고, 파싱도 했음.

console.log(getData);
// 이건 함수를 보여주네..

// 여기서 딱 막혀있는 느낌