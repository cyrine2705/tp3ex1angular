export class Commentaire {
    public _nom: string;
    public _date:Date;
    public _message:string;
    constructor (n:string,d:Date,m:string){
        this._nom=n;
        this._date=d;
        this._message=m;
    }
}
