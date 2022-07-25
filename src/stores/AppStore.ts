import { observable, action, reaction, makeAutoObservable } from "mobx";
import { Product } from "../models/Product";

class AppStore {
  constructor() {
    makeAutoObservable(this);
    // reaction(
    //     () => this.token,
    //     (_) => console.log(this.token)
    //   );
  }

  @observable token:string;
 
  @action
  authToken=(key:string)=>{
    this.token=key
    console.log(key);
    
  }
}
// const store = new AppStore();
export default AppStore;
