let pokeapiData;
let pokedata;
let pokeurl = [];
let randomnumber;
const xhr = new XMLHttpRequest();

let getData = (data, url) => {
  xhr.open('GET', url)
  xhr.send()
  xhr.onload = () => {
    data = JSON.parse(xhr.response);
    console.log(data);
    return data;
  }
  return data;
}
// onload 로 리턴값을 받기 위해 시도 중.
// 내부 콘솔로 데이터가 있음은 확인 되지만 리턴되지 않음.
// 당최 어캐해야 나오는 거니..


xhr.onloadend = () => {
  console.log(pokeapiData);
  // 로드엔드 시점에서는 확인이 가능한가? 재확인
  // 아깐 뜨더니 이젠 또 안뜸..
  // 의문? 시점상의 문제인가. 함수 호출했는걸?
  // console.log(data);
  
}

pokeapiData = getData(pokeapiData,"https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
// 함수를 이용해서 data parsing 시도
