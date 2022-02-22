import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
    constructor($root){
        super($root, {
            name: 'Formula',
            listeners: ['input']
        })
    }

    static className = 'excel_formula' 
    toHTML(){
        return(
            `<div class="info">
                Fx
            </div>
            <div class="input" contenteditable spellcheck="false">
            </div>`
        )
    }

    onInput(event) {
        console.log('onInput Formula', event)
    }
}