import Value from "./Models/Value.js"
import Money from "./Models/Money.js"
import Snack from "./Models/Snack.js"
import Soda from './Models/Soda.js'
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


let doritos = new Snack('Doritos', 1.25)
let fritos = new Snack('Fritos', 1.25)
let cheetos = new Snack('Cheetos', 1.50)
let mtnDew = new Snack('Mountain Dew', 2)
let drPepper = new Snack('Dr. Pepper', 2)
let rootBeer = new Snack('Root Beer', 2)




class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  money = new Money()


  snack = [doritos, fritos, cheetos]

  soda = [mtnDew, drPepper, rootBeer]


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
