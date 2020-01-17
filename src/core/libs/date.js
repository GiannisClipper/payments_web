const numbers = '0123456789';

const seperators = '/-. ';

class Date {
    constructor(value) {
        let sep = seperators;
        let parts = [''];

        this.faults = false;

        for (let i in value) {
            if (sep.includes(value[i])) {
                sep = value[i];
                parts.push('');
            } else {
                if (numbers.includes(value[i]))
                    parts[parts.length - 1] += value[i];
                else
                    this.faults = true;
            }
        }
    
        this.day = parts[0];
        this.month = parts.length > 1?parts[1]:'';
        this.year = parts.length > 2?parts[2]:'';

        if (parts.length > 3 || this.day.length > 2 || this.month.length > 2 || this.year.length > 4)
            this.faults = true;
        
        this.day = Boolean(this.day)?parseInt(parts[0]):0;
        this.month = Boolean(this.month)?parseInt(parts[1]):0;
        this.year = Boolean(this.year)?parseInt(parts[2]):0;
    }

    static keys() {
        return numbers + seperators;
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

    formatted() {  // dd-mm-yyyy
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
