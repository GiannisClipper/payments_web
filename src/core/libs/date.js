const numbers = '0123456789';

const lZero = (val, len) => ('0'.repeat(len) + val.toString()).slice(-len);


export class Date {

    constructor(value) {

        this.seperators = '-/.';

        this.day = null;
        this.month = null;
        this.year = null;

        this.faults = false;
    }

    keys() {
        return numbers + this.seperators;
    }

    setValue(value) {

        this.faults = false;

        let sep = this.seperators;

        let parts = [''];

        for (let i in value) {

            if (sep.includes(value[i]) && parts.length < 3)  // -/.
                sep = (parts.push(''), value[i]);

            else if (numbers.includes(value[i]) && parts.length === 1 && parts[0].length < 2)  // dd
                parts[0] += value[i];

            else if (numbers.includes(value[i]) && parts.length === 2 && parts[1].length < 2)  // dd-mm
                parts[1] += value[i];

            else if (numbers.includes(value[i]) && parts.length === 3 && parts[2].length < 4)  // dd-mm-yyyy
                parts[2] += value[i];

            else
                this.faults = true;
        }
    
        if (!this.faults) {

            this.day = parts[0];
            this.month = parts.length > 1?parts[1]:'';
            this.year = parts.length > 2?parts[2]:'';
        
            this.day = Boolean(this.day)?parseInt(parts[0]):0;
            this.month = Boolean(this.month)?parseInt(parts[1]):0;
            this.year = Boolean(this.year)?parseInt(parts[2]):0;
        }

        return this;
    }

    fullYear() {

        if (this.year <= 69)
            return (2000 + this.year);

        if (this.year <= 99)
            return (1900 + this.year);

        return this.year;
    }

    leapYear() {

        if (this.fullYear() % 4 === 0 && (this.fullYear() % 100 !== 0 || this.fullYear() % 400 === 0))
            return true;

            else
            return false;
    }

    validChange() {

        if (this.faults)
            return false;

        if (this.year > 2099)
           return false;

        if (this.month > 12)
            return false;

        if (this.day > 31)
            return false;

        return true;
    }

    valid() {

        if (this.faults)
           return false;

        if (this.fullYear() < 1900 || this.fullYear() > 2099)
           return false;

        if (this.month < 1 || this.month > 12)
            return false;

        if (this.day < 1 || this.day > 31)
            return false;

        if (this.day === 31 && [2, 4, 6, 9, 11].includes(this.month))
            return false;

        if (this.day === 30 && this.month === 2)
            return false;

        if (this.day === 29 && this.month === 2 && !this.leapYear())
            return false;

        return true;
    }

    getValue() {  // yyyymmdd

        if (this.valid())
            return `${this.fullYear().toString()}${lZero(this.month, 2)}${lZero(this.day, 2)}`;

        else
            return '';
    }

    reprValue() {  // dd-mm-yyyy (where - is the 1st of defined seperators)

        if (this.valid())
            return (
                lZero(this.day, 2) +
                this.seperators[0] +
                lZero(this.month, 2) +
                this.seperators[0] +
                this.fullYear().toString()
            );

        else
            return '';
    }
}

// --- --- --- --- --- --- --- --- ---

export class DateRange {

    constructor() {
        this.seperator = ' ';

        this.date1 = new Date();
        this.date2 = new Date();

        this.faults = false;
    }

    set seperators(val) {
        this.date1.seperators = val;
        this.date2.seperators = val;
    }

    get seperators() {
        return this.date1.seperators;
    }

    keys() {
        return this.date1.keys() + this.seperator;
    }

    setValue(value) {

        this.faults = false;

        let values = value.split(this.seperator);

        if (values.length < 2) 
            values.push('');

        else if (values.length > 2)
            this.faults = true;

        if (!this.faults) {
            this.date1.setValue(values[0]);
            this.date2.setValue(values[1]);
        }

        return this;
    }

    validChange() {

        if (this.faults)
            return false;

        return (this.date1.validChange() && this.date2.validChange());
    }

    valid() {

        if (this.faults)
           return false;

        return (this.date1.valid() && this.date2.valid());
    }

    getValue() {  // [yyyymmdd, yyyymmdd]

        return [this.date1.getValue(), this.date2.getValue()];
    }

    reprValue() {  // dd-mm-yyyy dd-mm-yyyy

        return `${this.date1.reprValue()}${this.date2.reprValue()?this.seperator:''}${this.date2.reprValue()}`;
    }
}
