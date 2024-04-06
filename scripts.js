const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectum = document.querySelector(".currency-select-um")


function convertValues() {
    const inputcurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    
    const dolarToday = 5.2
    const euroToday = 5.25
    const libraToday = 6.14
    const bitcoinToday = 138.74


    if (currencySelect.value == "dolar") {
        // Se o select estiver selecionado o valor dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue / dolarToday);

    }


    else if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyValue / euroToday);


    }
    else if (currencySelect.value == "libra") {
        // Se o select estiver selecionado o valor euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("gd-ES", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyValue / libraToday);


    }


    else if (currencySelect.value == "bitcoin") {
        // Se o select estiver selecionado o valor euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue / bitcoinToday);




    }




    if (currencySelectum.value == "dolar") {
        // Se o select estiver selecionado o valor dolar, entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue);

    }


    else if (currencySelectum.value == "euro") {
        // Se o select estiver selecionado o valor euro, entre aqui 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyValue);

}

        else if (currencySelectum.value == "real") {
            // Se o select estiver selecionado o valor euro, entre aqui 
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputcurrencyValue);








    }
    else if (currencySelectum.value == "libra") {
        // Se o select estiver selecionado o valor euro, entre aqui 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("gd-ES", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyValue);


    }


    else if (currencySelectum.value == "bitcoin") {
        // Se o select estiver selecionado o valor euro, entre aqui 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue );




    }



}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")
    const currencyNameum = document.getElementById("currency-nameum")
    const currencyImageum = document.getElementById("currency-img-um")

    if (currencySelectum.value == "dolar") {
        currencyNameum.innerHTML = "Dólar americano"
        currencyImageum.src = "./assets/dolar.png"
    }

    else if (currencySelectum.value == "euro") {

        currencyNameum.innerHTML = "Euro"
        currencyImageum.src = "./assets/euro.png"
    }

    else if (currencySelectum.value == "libra") {

        currencyNameum.innerHTML = "Libra"
        currencyImageum.src = "./assets/libra 1.png"
    }

    else if (currencySelectum.value == "bitcoin") {
        currencyNameum.innerHTML = "Bitcoin";
        currencyImageum.src = "./assets/bitcoin 1.png"
    }


    else if (currencySelectum.value == "real") {
        currencyNameum.innerHTML = "Real Brasileiro";
        currencyImageum.src = "./assets/brasil 2.png"
    }





    convertValues();


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    else if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    else if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    else if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }



    else if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/brasil 2.png"
    }





    convertValues();








}

currencySelectum.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);