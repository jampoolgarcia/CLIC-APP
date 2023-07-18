

export class Helpers {

    public static letters = /^[A-Za-záéíóú\s\xF1\xD1]+$/;
    public static email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    public static phone = /^[0-9]{7,11}$/;

    static getDate(date: Date){
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const res = `${year}-${month}-${day}`;
        return res;
    }

    static getMinDateCite(){
        const date = new Date();
        const months = 1000 * 60 * 60 * 24 * 60;
        const dateMonth = date.getTime() - months;
        return this.getDate(new Date(dateMonth));
    }

    static dateNow = () => {
        return Helpers.getDate(new Date());
    }

    static hoursNow= () => {
        const date = new Date();
        return date.getHours();
    }

    static hoursMinutesNow(){
        const date = new Date();
        let hour = date.getHours()+1;
        let min = date.getMinutes();
        return `${hour < 10 ? 0 : ''}${hour}:${min < 10 ? 0 : ''}${min}`;
    }


}