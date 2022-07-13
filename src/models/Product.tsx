import { v4 as uuidv4 } from 'uuid';
export class Product {
    id:string;
    name:string;
    description:string;
    image:string;
    // substance:{
    //     name:string,
    //     id:0,
    //     code:string
    // };
    // substanceId:string
    constructor(name:string, image:string, description:string){
      this.id=uuidv4()
      this.name=name
      this.image=image
      this.description=description
    }
  }
