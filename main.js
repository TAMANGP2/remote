function eventHandler(){ 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.weather.gov/gridpoints/TOP/40,74/forecast');
    xhr.send();
    xhr.onload = function() {
    if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
    alert(`Done, got ${xhr.response.length} bytes`);
  }
};



xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`);
  }

};


xhr.onerror = function() {
  alert("Request failed");
};
}

function calcLargeNum(){
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
return largest;
}
