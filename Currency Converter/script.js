let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const fromcurrencyselect = document.getElementById("from-currency-select");
const tocurrencyselect = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency
    option.text = currency
    fromcurrencyselect.add(option)
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency
    option.text = currency
    tocurrencyselect.add(option)
});

fromcurrencyselect.value = "USD";
tocurrencyselect.value = "INR";

const convertcurrency = () => {
    const amount = document.querySelector("#input").value;
    const fromcurrency = fromcurrencyselect.value;
    const tocurrency = tocurrencyselect.value;
    if (amount.length != 0) {
        fetch(api)
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data); 
            let fromexchangerates=data.conversion_rates[fromcurrency];
            let toexchangerates=data.conversion_rates[tocurrency];
            const convertedamount=(amount/fromexchangerates)*toexchangerates;
            document.getElementById("result").innerHTML=`${amount}${fromcurrencyselect.value}= ${convertedamount} ${tocurrencyselect.value}`;
        })
    }
    else {
        alert("Fill the amount first")
    }
}
const calling = document.querySelector(".convert-button").addEventListener("click", convertcurrency);