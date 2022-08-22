import {makeAutoObservable} from "mobx";

export default class AppStore {
  token: string;

  loggedIn: boolean;

  constructor() {
    makeAutoObservable(this);
    this.token = localStorage.getItem('token') as string;
    this.loggedIn = (this.token !== null);
  }

  setLoggedIn(bool: boolean) {
    this.loggedIn = bool;
  }
}