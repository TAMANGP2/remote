function chk_Palindrome(str_ing){ 
   var cstr = str_ing.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  var ccount = 0;
  if(cstr==="") {
    console.log("Nothing found!");
    return false;
  }
  if ((cstr.length) % 2 === 0) {
    ccount = (cstr.length) / 2;
  } else {
    if (cstr.length === 1) {
      console.log("The entry is a palindrome.");
      return true;
    } else {
      ccount = (cstr.length - 1) / 2;
    }
  }
  for (var x = 0; x < ccount; x++) {
    if (cstr[x] != cstr.slice(-1-x)[0]) {
      console.log("The entry is not a palindrome.");
      return false;
    }
  }
  console.log("The entry is a palindrome.");
  return true;
}
    chk_Palindrome('madam');
    chk_Palindrome('poop');
    chk_Palindrome('laundry');

function list_Files() {
  const fs = require('fs');
  fs.readdir('.', (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(files);
  });
}

list_Files();



const fs = require('fs');

function readFileAsync(filepath, callback) {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

readFileAsync('webdev.txt', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

const axios = require('axios');

async function HttpRequest(url) {
  try {
    const response = await axios.get(url);
    console.log(`Status code: ${response.status}`);
    console.log(`Response data: ${response.data}`);
  } catch (error) {
    console.error(error);
  }
}

HttpRequest('https://api.weather.gov/gridpoints/TOP/40,74/forecast')
  .then(() => console.log('Request complete'))
  .catch((error) => console.error(`Request failed: ${error.message}`));
