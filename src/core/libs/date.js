const digits = '0123456789';

const seperators = '/-. ';

class Date {
    constructor(value) {
        let sep = seperators;
        let parts = [''];

        this.valid = true;

        for (let i in value) {
            if (sep.includes(value[i])) {
                sep = value[i];
                parts.push('');
            } else {
                if (digits.includes(value[i]))
                    parts[parts.length - 1] += value[i];
                else
                    this.valid = false;
            }
        }
    
        this.day = parts[0];
        this.month = parts.length > 1?parts[1]:'';
        this.year = parts.length > 2?parts[2]:'';

        if (parts.length > 3 || this.day.length > 2 || this.month.length > 2 || this.year.length > 4)
            this.valid = false;
        
        this.day = Boolean(this.day)?parseInt(parts[0]):0;
        this.month = Boolean(this.month)?parseInt(parts[1]):0;
        this.year = Boolean(this.year)?parseInt(parts[2]):0;
    }

    static keys() {
        return digits + seperators;
    }

    isDateEditing() {
        if (!this.valid)
            return false;

        if (this.year > 2099)
           return false;

        if (this.month > 12)
            return false;

        if (this.day > 31)
            return false;
        return true;
    }

    isDate() {
        if (this.overflowed)
           return false;

        if (this.year < 1900 || this.year > 2099)
           return false;

        if (this.month < 1 || this.month > 12)
            return false;

        if (this.day < 1 || this.day > 31)
            return false;

        if (this.day === 31 && [2, 4, 6, 9, 11].includes(this.month))
            return false;

        if (this.day === 30 && this.month === 2)
            return false;

        if (this.day === 29 && this.month === 2 && !(this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0)))
            return false;

        return true;
    }
}

export default Date;