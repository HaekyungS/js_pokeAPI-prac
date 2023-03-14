const xhr = new XMLHttpRequest();
// XMLHttp 를 요청할 함수를 새로 만든다.
// 페이지 새로고침 없이도 URL에서 데이터를 가져올 수 있음.
// 이름이 XML이 들어가지만 그 외의 모든 종류의 데이터 로드 가능.

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
// 요청할 url 주소.

xhr.open('GET',url)
// 데이터를 갖고 올 거니까 GET
// 만약 내가 데이터를 보낼거면 POST ?

xhr.send()
// API경로로 요청을 보낸다.

let pokeapiData;
let pokeurl = [];
let randomnumber;

xhr.onload = () => {
  pokeapiData = JSON.parse(xhr.response);
  // JSON 형태로 된 데이터를 객체형식으로 응답받아 pokeapidata 라는 변수에 담기.
  // console.log(pokeapiData);

  for(i=0; i< pokeapiData.count; i++){
    // pokedata 보니까 count 갯수만큼의 포켓몬배열이 있길래 해당 숫자만큼 반복문 실행

    pokeurl[i]=pokeapiData.results[i].url;
    // 포켓몬 정보가 담긴 url 을 변수에 담음.

  }
  randomnumber = Math.floor(Math.random()*pokeurl.length);
  return randomnumber;
}

