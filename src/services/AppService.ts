import AppStore from "../stores/AppStore";

import NetworkService from "./NetworkService";

export default class AppService {
  appStore: AppStore;

  networkService: NetworkService;

  constructor(appStore: AppStore, networkService: NetworkService) {
    this.appStore = appStore;
    this.networkService = networkService;
  }

  async logIn(email: string, password: string) {
    const url = 'http://82.148.31.242/api/user/login';
    const requestType = 'POST';
    const body = { email, password };

    const {data} = await this.networkService.fetchToken(url, requestType, body);

    if (!data.token) {
      alert("wrong email or password");
      return;
    }

    localStorage.setItem('token', data.token);
    this.appStore.setLoggedIn(true);
    this.networkService.setToken(data.token);
  }

  logOut() {
    localStorage.clear();
    this.appStore.setLoggedIn(false);
  }
}