export class Helpers {

    static getdate(date: Date){
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const res = `${year}-${month}-${day}`;
        return res;
    }
}