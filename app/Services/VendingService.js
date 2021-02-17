import { ProxyState } from "../AppState.js";
import Snack from '../Models/Snack.js'
import Money from '../Models/Money.js'



class VendingService {
    addDollar() {
        let wallet = ProxyState.money
        wallet.amount++
        ProxyState.money = wallet
    }


    buySnack(key) {
        let wallet = ProxyState.money
        let snackIndex = ProxyState.snack.findIndex(s => s.name == key)
        let snack = ProxyState.snack[snackIndex]
        if (wallet.amount < snack.price) {
            alert(`You need $${(snack.price - wallet.amount).toFixed(2)} more to purchase that!`);
        }
        else if (wallet.amount > snack.price) {
            wallet.amount -= snack.price
            ProxyState.money = wallet
            alert(`Thanks for purchasing! Please collect your change of $${wallet.amount.toFixed(2)} below!`);

        }
        else if (wallet.amount == snack.price) {
            ProxyState.money = new Money()
            alert('Thanks for purchasing!');
        }
    }

    buySoda(key) {
        let wallet = ProxyState.money
        let sodaIndex = ProxyState.soda.findIndex(s => s.name == key)
        let soda = ProxyState.soda[sodaIndex]
        if (wallet.amount < soda.price) {
            alert(`You need $${(soda.price - wallet.amount).toFixed(2)} more to purchase that!`);
        }
        else if (wallet.amount > soda.price) {
            wallet.amount -= soda.price
            ProxyState.money = wallet
            alert(`Thanks for purchasing! Please collect your change of $${wallet.amount.toFixed(2)} below!`);

        }
        else if (wallet.amount == soda.price) {
            ProxyState.money = new Money()
            alert('Thanks for purchasing!');
        }
    }
}

export const vendingService = new VendingService()