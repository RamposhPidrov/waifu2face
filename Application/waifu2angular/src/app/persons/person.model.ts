export class Person {
    public index:number;
    public id:string;
    public name: string;
    public jobcode: string;
    public image: string;
    public image_crop: string;
    
  
    constructor(index:number,id:string, name: string, jobcode: string, image: string, image_crop:string) {
      this.index=index;
      this.id=id;
      this.name = name;
      this.image = jobcode;
      this.image = image;
      this.image_crop = image_crop;
  
    }
  }
  