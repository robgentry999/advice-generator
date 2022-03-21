const advicenumber = document.getElementById('advicenum');
const advicetext = document.getElementById('advicetext');
const api_url = 'https://api.adviceslip.com/advice';
const dice = document.getElementById('dice');
// GET Functions//


async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const dataid = data.slip.id;
    const dataadvice = data.slip.advice;
    advicenumber.innerHTML = `Advice # ${dataid}`;
    advicetext.innerHTML = `"${dataadvice}"`;
    console.log(dataid)
    console.log(dataadvice)
}
getData();
