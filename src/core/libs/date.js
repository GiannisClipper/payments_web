const numbers = '0123456789';

class Date {
    constructor(value) {
        this.seperators = '-/. ';

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

    getValue() {  // dd-mm-yyyy

        if (this.valid()) {
            const day = ('0' + this.day.toString()).slice(-2);
            const month = ('0' + this.month.toString()).slice(-2);
            const year = this.fullYear().toString();

            return `${day}-${month}-${year}`;

        } else {
            return '';
        };
    }
}

export default Date;
