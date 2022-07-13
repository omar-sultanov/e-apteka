import { observable, action, reaction, makeAutoObservable } from "mobx";
import { Item } from "../models/Item";
import { Product } from "../models/Product";
import { v4 as uuidv4 } from 'uuid';

class AppStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.products,
      (_) => console.log(this.products.length)
    );
  }

  @observable
//   items: Item[] = [new Item("Javascript"), new Item("Typescript")];
     products:Product[]=[
        {   id:uuidv4(),
            name:"Серетид",
            description:"аэрозоль для ингаляций 25 мкг+250 мкг/доза 120 доз 1 шт",
            image:"https://cdn.eapteka.ru/upload/offer_photo/207/303/resized/450_450_1_37ea6c8cbbb820fe30b9006eea9b846a.png?t=1634633203&_cvc=1657102352"
        },
        {   id:uuidv4(),
            name:"Элидел",
            description:"крем для наружного применения 1 % 15 г 1 шт",
            image:"https://cdn.eapteka.ru/upload/offer_photo/206/577/resized/450_450_1_46cf144ead9ee17a38e566c953536bd1.png?t=1644314591&_cvc=1657102352"
        },
        {   id:uuidv4(),
            name:"Лоратадин-Тева",
            description:"Вспомогательные вещества: лактозы моногидрат 62,5 мг.",
            image:"https://cdn.eapteka.ru/upload/offer_photo/250/569/1_5906851753a423cca1855053e6a155a4.png?t=1644481998&_cvc=1657102352"
        },
        {   id:uuidv4(),
            name:"Цетиризин Реневал",
            description:"капли для приема внутрь 10 мг/мл 10 мл 1 шт",
            image:"https://cdn.eapteka.ru/upload/offer_photo/494/981/1_b93b04ffbce1eb2f03b03c158b300106.png?t=1644825730&_cvc=1657102352"
        }
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
const store = new AppStore();
export default store;
