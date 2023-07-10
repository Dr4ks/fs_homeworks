const button = document.getElementById('findButton');
const resultdiv=document.getElementById('result');
button.addEventListener('click', handleClick);

async function fetchIpAddress(){
  try{
    const response=await fetch('https://api.ipify.org/?format=json');
    const data=await response.json();
    return data.ip;
  }
  catch(error){
    console.log(`Error happened while fetching IP Address=>${error}`);
  }
}

async function fetchinfo(ipaddress){
  try{
    const response=await fetch(`http://ip-api.com/json/${ipaddress}`);  //URL should be HTTP !!!
    const data=await response.json();
    return data;
  }
  catch(error){
    console.log(`Error happened while fetching info=>${error}`);
  }
}

async function handleClick(){
  const ipaddress=await fetchIpAddress();
  const info=await fetchinfo(ipaddress);

  try{
      resultdiv.innerHTML = `
      <p>Country: ${info.country}</p>
      <p>Country Code: ${info.countryCode}</p>
      <p>Region: ${info.region}</p>
      <p>Region Name: ${info.regionName}</p>
      <p>City: ${info.city}</p>
      <p>Timezone: ${info.timezone}</p>
      <p>ISP: ${info.country}</p>
      <p>Organization: ${info.org}</p>
    `;
  }
  catch(error){
    console.log(`Error happened while showing results=>${error}`);
  }

}