import { observable, action, reaction, makeAutoObservable } from "mobx";
import { Item } from "../models/Item";

class ItemStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.items,
      (_) => console.log(this.items.length)
    );
  }

  @observable
  items: Item[] = [new Item("Javascript"), new Item("Typescript")];
  @observable activeItem: any;

  @action
  addItems = (name: string) => {
    this.items = [...this.items, new Item(name)];
  };

  @action
  removeItem = (id: string) => {
    this.items = this.items.filter((item) => item.id !== id);
  };

  @action
  updateItem = (id: string) => {
    const findEditItem = this.items.find((item) => item.id === id);
    this.activeItem = findEditItem;
  };

  @action
  editItem = (id: string, name: string) => {
    const newEditItem = this.items.map((item) =>
      item.id === id ? { id, name } : item
    );
    this.items = newEditItem;
    this.activeItem = null;
  };
}
const store = new ItemStore();
export default store;
