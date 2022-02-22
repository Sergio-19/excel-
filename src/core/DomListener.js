import { capitalize } from "./utils"



export class DomListener {
    constructor($root, listeners = []) {
        if(!$root){
            throw new Error('No Root DomListener')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach((listener) => {
            //тоже самое что и addEventListener
            const method = 'on' + capitalize(listener)
            if(!this[method]) {
                throw new Error('No Method')
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = 'on' + capitalize(listener)
            this.$root.off(listener, this[method])
        })
    }
}