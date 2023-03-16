let pokeapiData;
let pokedata;
let pokeurl = [];
let randomnumber;
const xhr = new XMLHttpRequest();

let getData = (url) => {
  // XMLHttp 를 요청할 함수를 새로 만든다.
  // 페이지 새로고침 없이도 URL에서 데이터를 가져올 수 있음.
  // 이름이 XML이 들어가지만 그 외의 모든 종류의 데이터 로드 가능.

  // const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  // 요청할 url 주소.

  xhr.open('GET', url)
  // 데이터를 갖고 올 거니까 GET
  // 만약 내가 데이터를 보낼거면 POST ?

  // xhr.send()
  // API경로로 요청을 보낸다.

  // let pokeapiData;
  // let pokeurl = [];
  // let randomnumber;

  xhr.onload = () => {
    pokeapiData = JSON.parse(xhr.response);
    // JSON 형태로 된 데이터를 객체형식으로 응답받아 pokeapidata 라는 변수에 담기.
    // console.log(pokeapiData);
    return pokeapiData;
    // for (i = 0; i < pokeapiData.count; i++) {
    //   // pokedata 보니까 count 갯수만큼의 포켓몬배열이 있길래 해당 숫자만큼 반복문 실행

    //   pokeurl[i] = pokeapiData.results[i].url;
    //   // 포켓몬 정보가 담긴 url 을 변수에 담음.

    // }

    // Pick.children[1].onclick = () => {
    //   randomnumber = Math.floor(Math.random() * pokeurl.length);

    //   xhr.open('GET', pokeurl[randomnumber]);
    //   xhr.send();

    //   let pokemoninfo = JSON.parse(xhr.response);

    //   console.log(pokemoninfo)

    //   CreaDoc("div", Pick.children[1]);
    //   CommonStyle(Pick.children[1].children[0], "50%", "100%")
    //   Pick.children[1].children[0].textContent = "Pick"

    //   CreaDoc("div", Pick.children[1]);
    //   CommonStyle(Pick.children[1].children[1], "50%", "100%")
    //   Pick.children[1].children[1].textContent = "Skip"
    // }

    // console.log(randomnumber);
    // console.log(pokeapiData);
  }

  xhr.send()

}
// console.log(xhr.responseText);
// 얘도 xhr을 찍었을 땐 responseText 가 작성되어있는데, load 밖으론 없음.
// load 안으로 넣어보면 데이터 있음.

pokeapiData = getData("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");

// xhr.open('GET',pokeurl[randomnumber]);
// xhr.send();

// console.log(pokeurl);


xhr.onloadend = () => {
  // console.dir(pokeurl)
  // console.dir(Pick.children[1])
  Pick.children[1].onclick = () => {

    Pick.children[1].children[0].style.display = "block";
    Pick.children[1].children[1].style.display = "block";
    Pick.children[1].childNodes[0].textContent = "";

    for (i = 0; i < pokeapiData.count; i++) {
      // pokedata 보니까 count 갯수만큼의 포켓몬배열이 있길래 해당 숫자만큼 반복문 실행

      pokeurl[i] = pokeapiData.results[i].url;
      // 포켓몬 정보가 담긴 url 을 변수에 담음.

    }

    randomnumber = Math.floor(Math.random() * pokeurl.length);

    
    // console.log(pokeurl)
    console.log(randomnumber)
    // 숫자 뜸
    console.log(pokeurl[randomnumber])
    // url도 뜸
    // console.log(pokeapiData)
    
    // pokedata = getData(pokeurl[randomnumber]);
    // xhr.onloadend = () => {
    //   console.log(pokedata)
    // } // 근데 데이터가 안뜸 왜 안뜨는데 뭔데
  }
}
