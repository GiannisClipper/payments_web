const numbers = '0123456789';

const seperators = '.,';

const operators = '+-';

class Num {
    constructor() {
        this.minValue = -999999999.99;
        this.maxValue = +999999999.99;
        this.decLength = 2;
        this.faults = false;
    }

    static keys() {
        return numbers + seperators + operators;
    }

    setValue(value) {
        this.faults = false;
        let parts = ['', ''];

        for (let i in value) {
            if (i === '0' && operators.includes(value[i]))
                parts[0] = value[i];

            else if (seperators.includes(value[i])) {
                parts.push('');

            } else {
                if (numbers.includes(value[i]))
                    parts[parts.length - 1] += value[i];
                else
                    this.faults = true;
            }
        }
        this.operator = parts[0];
        this.integer = parts[1];
        this.decimal = parts.length > 2?parts[2]:'';

        if (parts.length > 3 || this.decimal.length > this.decLength)
            this.faults = true;
        
        this.integer = Boolean(this.integer)?parseInt(parts[1]):0;
        this.decimal = Boolean(this.decimal)?parseFloat('.' + parts[2]):0;
    }

    getValue() {
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

        if (this.getValue() < this.minValue || this.getValue() > this.maxValue)
           return false;

        return true;
    }

    formatted() {  // -9999.99
        if (this.valid()) {
            return this.getValue().toFixed(this.decLength);
        } else {
            return '';
        };
    }
}

export default Num;
