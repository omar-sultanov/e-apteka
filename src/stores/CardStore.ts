import { observable, action, reaction, makeAutoObservable } from "mobx";
import CyrillicToTranslit from "cyrillic-to-translit-js";
const cyrillicToTranslit = CyrillicToTranslit();
import { IProductData, Product } from "../models/Product";
import Data from "../data/data.json";

class CardStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.products,
      (_) => console.log(this.products.length)
    );
  }

  @observable products: Product[] = Data.products;

  @observable lastELementProducts = this.products[this.products.length - 1];
  @action
  addProduct = (form: IProductData) => {
    const addModel = {
      id: ++this.lastELementProducts.id,
      name: form.description,
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
      substanceId: ++this.lastELementProducts.substanceId,
      substance: {
        id: ++this.lastELementProducts.substance.id,
        name: form.name,
        code: cyrillicToTranslit.transform(form.name),
      },
    };

    this.products.push(addModel);   
  };

  @action
  removeProduct = (id: number) => {
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
