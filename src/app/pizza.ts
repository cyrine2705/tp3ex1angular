import { Commentaire } from "./commentaire";

export class Pizza {
    public nom:string;
    public image:string;
    public prix: number; 
    public vegetarien:boolean;
    public comments!:Commentaire[];

    constructor(n:string,img:string,p:number,veg:boolean,com:Commentaire[]){
        this.nom=n;
        this.image=img;
        this.prix=p;
        this.vegetarien=veg;
        
   
    }
    
                
            
        


}
