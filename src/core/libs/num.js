const numbers = '0123456789';

class Num {
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

    fullValue() {
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

        if (this.fullValue() < this.minValue || this.fullValue() > this.maxValue)
           return false;

        return true;
    }

    getValue() {  // -9999.99
        if (this.valid()) {
            return this.fullValue().toFixed(this.decLength);

        } else {
            return '';
        };
    }
}

export default Num;
