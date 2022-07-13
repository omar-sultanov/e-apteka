import { observable, action, reaction, makeAutoObservable } from "mobx";
import { Product } from "../models/Product";
// import { v4 as uuidv4 } from 'uuid';

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
  products: Product[] = [
    {
      id: "1",
      name: "Серетид",
      description: "аэрозоль для ингаляций 25 мкг+250 мкг/доза 120 доз 1 шт",
    },
    {
      id: "2",
      name: "Элидел",
      description: "крем для наружного применения 1 % 15 г 1 шт",
    },
    {
      id: "3",
      name: "Лоратадин-Тева",
      description: "Вспомогательные вещества: лактозы моногидрат 62,5 мг.",
    },
    {
      id: "4",
      name: "Цетиризин Реневал",
      description: "капли для приема внутрь 10 мг/мл 10 мл 1 шт",
    },
  ];

  //   @observable activeItem: any;

  //   @action
  //   addItems = (name: string) => {
  //     this.items = [...this.items, new Item(name)];
  //   };

  //   @action
  //   removeItem = (id: string) => {
  //     this.items = this.items.filter((item) => item.id !== id);
  //   };

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
