import { $ } from "../../core/dom"

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }


    getRoot(){
       const $root = $.create('div', 'excel')
        this.components = this.components.map(elem => {
            const $el = $.create('div', elem.className)
            let component = new elem($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })
        return $root
    }

    render(){
        this.$el.append(this.getRoot())
        this.components.forEach(component => {
            component.init()
        });
    }
}