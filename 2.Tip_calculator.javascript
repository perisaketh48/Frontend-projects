let billAmount = document.getElementById("billAmount")
let percentageTip = document.getElementById("percentageTip")
let tipAmount = document.getElementById("tipAmount")
let totalAmount = document.getElementById("totalAmount")
let errorMessageElement = document.getElementById("errorMessage")

function calculateTip() {
    let billamount1 = billAmount.value;
    let percentageTip1 = percentageTip.value;
    if (billamount1 === "") {
        errorMessageElement.textContent = "errorMessage";
    } else if (percentageTip1 === "") {
        errorMessageElement.textContent = "errorMessage";
    } else {
        errorMessageElement.textContent = "";
        let caluculatedTip = (parseInt(percentageTip1) / 100) * parseInt(billamount1);
        let caluculatedtotalAmount = parseInt(billamount1) + caluculatedTip
        tipAmount.value = caluculatedTip;
        totalAmount.value = caluculatedtotalAmount;

    }
}
