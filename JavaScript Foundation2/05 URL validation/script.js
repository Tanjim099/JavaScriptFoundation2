let validUrl = /^https?.\/\/[a-zA-Z0-9_.+-]+\.[a-zA-Z]+$/;
let inputUrl = "https://www.example.com";
let test = validUrl.test(inputUrl);
if(test == true){
    console.log(`${inputUrl} is a valid url`)
}
else{
    console.log(`${inputUrl} is not a valid`);
}