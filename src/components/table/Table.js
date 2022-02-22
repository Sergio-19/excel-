import { $ } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";
import { shouldResize } from "./table.functions";
import { resizeHandler } from "./table.resize";
import { createTable } from "./table.template";
import { TableSelection } from "./TableSelection";
let value
export class Table extends ExcelComponent {
    constructor($root){
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }
    
    static className = 'excel_table'
    toHTML(){
        return(
            createTable(20)
        )
    }

    init() {
        super.init()
        this.selection = new TableSelection()
    }

/*функция для ресайза, на весь компонент Table установлен один обработчик событий 
        omMousedown, для элементов которые служат для ресайза ввели data атрибут data-resize = row / col при нажатии на элемент
        отрабатывает if условие если event.target.dataset.resize то выполняется логика, в переменную $resizer попадает DOM элемент
        далее в $parent получаем ближайший родительский элемент для которого тоже ввели data атрибут data-type="resizable"
        в coords получаем координаты родительсекого элемента return this.$el.getBoundingClientRect()
        и затем на документ добавляется событие onmousemove тоже с event (e), в котором delta - расстояние которое проходит курсор 
        мышки от исходной точки до конца ресайза, затем в value вычисляется ширина на которую нужно увеличить блок, т.е его начальная
        ширина + delta и в конце просто элементу увеличиваем ширину + 'px'*/
    onMousedown(event) {
        if(shouldResize(event)){
            resizeHandler(this.$root, event)
        }

    }



}