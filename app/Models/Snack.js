

export default class Snack {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }
    get Template() {
        return `
        <div class="text-center">
            <h3>${this.name} : $${(this.price).toFixed(2)}</h3>
            <button class="btn btn-primary" onclick="app.vendingController.buySnack('${this.name}')">Buy</button>
        </div>
        `
    }
}

