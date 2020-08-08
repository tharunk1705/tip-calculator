function update() {
    let billAmount = Number(document.querySelector('#billAmount').value);
    let tipInput = document.querySelector('#tipInput').value;
    let splitInput = document.querySelector('#splitInput').value;

    let tipValue = billAmount * (tipInput / 100);
    let tipEach = tipValue / splitInput;
    let billEach = (billAmount + tipValue) / splitInput;
    let totalWithTip = billAmount + tipValue;
    document.querySelector('#tipPercent').innerHTML = tipInput + '%';
    document.querySelector('#tipValue').innerHTML = '&#8377;' + tipValue.toFixed(2);
    document.querySelector('#totalWithTip').innerHTML = '&#8377;' + totalWithTip.toFixed(2);
    document.querySelector('#splitValue').innerHTML = splitInput + " person";

    if (splitInput >1){
        document.querySelector('#billEach').innerHTML = '&#8377;' + billEach.toFixed(2);
        document.querySelector('#tipEach').innerHTML = '&#8377;' +tipEach.toFixed(2);
    }

}
const  mainContainer = document.querySelector('#mainContainer');
mainContainer.addEventListener('input',update);
