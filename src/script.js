async function getJson() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  );
  const data = await response.json();

  console.log(data);
}

getJson();
