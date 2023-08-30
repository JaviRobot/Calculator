class Display{
    constructor(displayFirstValue, displayActualValue){
        this.displayFirstValue = displayFirstValue;
        this.displayActualValue = displayActualValue;
        this.firstValue = "";
        this.actualValue = "";
        this.operator = undefined;
        this.calculator = new Calculator();
        this.signs = {
            add: "+",
            minus:"-",
            multi: "x",
            divi: "/"
        }
    }
    addNumber(number){
        if(number === "." && this.actualValue.includes(".")) return;
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printNumber();
    }
    printNumber(){
        this.displayFirstValue.textContent = `${this.firstValue.toString()} ${this.signs[this.operator] || ""}` ;
        this.displayActualValue.textContent = this.actualValue.toString();
    }
    erased(){
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.printNumber();
    }
    clear(){
        this.firstValue = "";
        this.actualValue = "";
        this.operator = undefined;
        this.printNumber();
    }
    calcul(){
        const firstValue = parseFloat(this.firstValue);
        const actualValue = parseFloat(this.actualValue);
        if(isNaN(firstValue) || isNaN(actualValue)) return;
        if(this.operator == "divi" && this.actualValue == "0"){
            this.actualValue = "ERROR!"
            return;
        }
        if(this.operator == "divi"){
            this.actualValue = Math.round(this.calculator[this.operator](firstValue,actualValue).toString())
            return;
        }
        this.actualValue = this.calculator[this.operator](firstValue,actualValue).toString();
    }
    computer(operator){
        this.actualValue != "equal" && this.calcul();
        this.operator = operator;
        this.firstValue = this.actualValue || this.firstValue;
        this.actualValue = "";
        this.printNumber();
    }
}