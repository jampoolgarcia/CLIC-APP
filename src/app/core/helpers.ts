

export class Helpers {

    static getdate(date: Date){
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const res = `${year}-${month}-${day}`;
        return res;
    }

    static dateNow = () => {
        return Helpers.getdate(new Date());
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