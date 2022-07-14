import { observable, action, reaction, makeAutoObservable } from "mobx";
import { Product } from "../models/Product";
import Data from '../data/data.json'

class CardStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.products,
      (_) => console.log(this.products.length)
    );
  }

  @observable
  //   items: Item[] = [new Item("Javascript"), new Item("Typescript")];
  products: Product[] = Data.products

  //   @observable activeItem: any;

  //   @action
  //   addItems = (name: string) => {
  //     this.items = [...this.items, new Item(name)];
  //   };

    @action
    onClickDeleteHandller = (id: number) => {
      this.products = this.products.filter((card) => card.id !== id);
    };

  //   @action
  //   updateItem = (id: string) => {
  //     const findEditItem = this.items.find((item) => item.id === id);
  //     this.activeItem = findEditItem;
  //   };

  //   @action
  //   editItem = (id: string, name: string) => {
  //     const newEditItem = this.items.map((item) =>
  //       item.id === id ? { id, name } : item
  //     );
  //     this.items = newEditItem;
  //     this.activeItem = null;
  //   };
}
const store = new CardStore();
export default store;
