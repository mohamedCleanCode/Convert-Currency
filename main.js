let allSelect = document.querySelectorAll("select");
fetch(
  "https://api.currencyfreaks.com/latest?apikey=0369b328ae8c43b389fdd14a45e98925"
)
  .then((result) => {
    let data = result.json();
    return data;
  })
  .then((currency) => {
    // console.log(currency.rates);
    let myData = currency.rates;
    let keys = Object.keys(myData);
    allSelect.forEach((select) => {
      for (let i = 0; i < keys.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = `${keys[i]}`;
        option.value = `${keys[i]}`;
        select.appendChild(option);
      }
      let conTo = document.getElementById("to");
      let conFor = document.getElementById("for");
      let selectTo = document.getElementById("select-to");
      let selectFor = document.getElementById("select-for");
      conTo.addEventListener("focus", function () {
        conFor.value = Number(conTo.value) * Number(myData[`${selectFor}`]);
      });
    });
  });
