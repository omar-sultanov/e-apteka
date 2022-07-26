import { observable, action, reaction, makeAutoObservable } from "mobx";
import { Product } from "@models/Product";

class CardStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.products,
      (_) => console.log(this.products.length)
    );
  }

  @observable products: Product[] = [];
  @observable cartProducts: Product[] = [];
  
  @action 
  getCount=(a:number)=>{
    return a
  }

  @action 
  getProducts=  (items:Product[])=>{
    this.products= items  
  }

  @action 
  addCartProducts=(item:Product)=>{
    this.cartProducts = [...this.cartProducts, item]; 
  }

  @action 
  removeCartProducts=(id:number)=>{
    this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
  }
 
}
// const store = new CardStore();
export default CardStore;
