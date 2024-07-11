let adviceList = [];

function render() {
  orhan.innerHTML = `<h1>Tavsiye ${adviceList.slip.id}</h1>`;
  cemil.innerHTML = `<p> ${adviceList.slip.advice}</p>`;
};

function refresh() {
  init ();
};















function init() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(res => {
      adviceList = res;
      render();
    })


};

init();