import { vendingService } from '../Services/VendingService.js'
import { ProxyState } from '../AppState.js';

function _draw() {

    document.getElementById('money').innerText = ProxyState.money.amount.toFixed(2).toString()

    let snacks = ProxyState.snack;
    let snacksTemplate = ''
    snacks.forEach(s => snacksTemplate += s.Template)
    document.getElementById("snacks").innerHTML = snacksTemplate;

    let sodas = ProxyState.soda
    let sodasTemplate = ''
    sodas.forEach(s => sodasTemplate += s.Template)
    document.getElementById("sodas").innerHTML = sodasTemplate;



    // document.getElementById('snack-name').innerText = ProxyState.snack.name
    // document.getElementById('snack-price').innerText = ProxyState.snack.price.toFixed(2).toString()
}


export default class VendingController {
    constructor() {
        ProxyState.on("money", _draw)
        // ProxyState.on("chosenSnack", _draw)

    }
    addDollar() {
        vendingService.addDollar()
    }

    buySnack(key) {
        vendingService.buySnack(key)
    }

    buySoda(key) {
        vendingService.buySoda(key)
    }
}