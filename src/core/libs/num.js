const numbers = '0123456789';


export class Num {

    constructor() {

        this.seperators = '.,';
        this.operators = '+-';

        this.minValue = -999999999.99;
        this.maxValue = +999999999.99;
        this.decLength = 2;

        this.operator = null;
        this.integer = null;
        this.decimal = null;

        this.faults = false;
    }

    keys() {
        return numbers + this.seperators + this.operators;
    }

    setValue(value) {

        this.faults = false;

        let parts = ['', ''];

        let intLength = Math.max(this.minValue.toString().length, this.maxValue.toString().length);

        for (let i in value) {

            if (this.operators.includes(value[i]) && i === '0')  // +-
                parts[0] = value[i];

            else if (this.seperators.includes(value[i]) && parts.length < 3)  // ,.
                parts.push('');

            else if (numbers.includes(value[i]) && parts.length === 2 && parts[1].length < intLength)  // 999
                parts[parts.length - 1] += value[i];
 
            else if (numbers.includes(value[i]) && parts.length === 3 && parts[2].length < this.decLength)  // .99
                parts[parts.length - 1] += value[i];

            else
                this.faults = true;
        }

        if (!this.faults) {

            this.operator = parts[0];
            this.integer = parts[1];
            this.decimal = parts.length > 2?parts[2]:'';

            this.integer = Boolean(this.integer)?parseInt(parts[1]):0;
            this.decimal = Boolean(this.decimal)?parseFloat('.' + parts[2]):0;
        }
 
        return this;
    }

    computeValue() {
            return (this.integer + this.decimal) * (this.operator === '-'?-1:1);
    }

    validChange() {

        if (this.faults)
            return false;

        return true;
    }

    valid() {

        if (this.faults)
           return false;

        if (this.computeValue() < this.minValue || this.computeValue() > this.maxValue)
           return false;

        return true;
    }

    getValue() {

        if (this.valid())
            return (this.integer + this.decimal) * (this.operator === '-'?-1:1);

        else
            return 0;
    }

    reprValue() {  // -9999.99
        return this.getValue().toFixed(this.decLength);
    }
}

// --- --- --- --- --- --- --- --- ---

export class NumRange {

    constructor() {
        this.seperator = ' ';

        this.num1 = new Num();
        this.num2 = new Num();

        this.faults = false;
    }

    set seperators(val) {
        this.num1.seperators = val;
        this.num2.seperators = val;
    }

    get seperators() {
        return this.num1.seperators;
    }

    set operators(val) {
        this.num1.operators = val;
        this.num2.operators = val;
    }

    get operators() {
        return this.num1.operators;
    }

    set minValue(val) {
        this.num1.minValue = val;
        this.num2.minValue = val;
    }

    get minValue() {
        return this.num1.minValue;
    }

    set maxValue(val) {
        this.num1.maxValue = val;
        this.num2.maxValue = val;
    }

    get maxValue() {
        return this.num1.maxValue;
    }

    set decLength(val) {
        this.num1.decLength = val;
        this.num2.decLength = val;
    }

    get decLength() {
        return this.num1.decLength;
    }

    keys() {
        return this.num1.keys() + this.seperator;
    }

    setValue(value) {

        this.faults = false;

        let values = value.split(this.seperator);

        if (values.length < 2)
            values.push('');

        else if (values.length > 2)
            this.faults = true;

        if (!this.faults) {
            this.num1.setValue(values[0]);
            this.num2.setValue(values[1]);
        }

        return this;
    }

    validChange() {

        if (this.faults)
            return false;

        return (this.num1.validChange() && this.num2.validChange());
    }

    valid() {

        if (this.faults)
           return false;

        return (this.num1.valid() && this.num2.valid());
    }

    getValue() {  // [yyyymmdd, yyyymmdd]

        return [this.num1.getValue(), this.num2.getValue()];
    }

    reprValue() {  // dd-mm-yyyy dd-mm-yyyy

        return `${this.num1.reprValue()}${this.num2.reprValue()?this.seperator:''}${this.num2.reprValue()}`;
    }
}
