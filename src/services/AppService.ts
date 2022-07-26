import NetworkService from "../services/NetworkService";
import AppStore from "../stores/AppStore";


export default class AppService {
  private networkService: NetworkService;
  private appStore: AppStore;

  constructor(networkService: NetworkService, appStore: AppStore) {
    this.networkService = networkService;
    this.appStore = appStore;
  }

  async login() {
    this.networkService.token;
    localStorage.setItem('token', this.appStore.token);

    const {data} = await this.networkService.fetch({alias: 'auth'});
    // const {token} = data;
    // this.networkService.setToken(token);
    // localStorage.setItem('token', token);

   console.log(data);
   
  }

 

}
console.log('appservice');
