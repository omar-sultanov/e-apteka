import NetworkService from "@services/NetworkService";
import AppStore from "@stores/AppStore";


export default class AppService {
  private networkService: NetworkService;
  private appStore: AppStore;

  constructor(networkService: NetworkService, appStore: AppStore) {
    this.networkService = networkService;
    this.appStore = appStore;
  }

  async login() {
    const url = 'auth';
    const requestType = 'POST';


    // const {data} = await this.networkService.fetch(url, requestType, body);
    const data = await this.networkService.getToken(url, requestType);

    if (!data) {
      console.log("wrong email or password");
      return;
    }

    this.appStore.token;
    this.networkService.token;


    // const {data} = await this.networkService.fetch({alias: 'auth'});
    // const {token} = data;
    // this.networkService.setToken(token);
    // localStorage.setItem('token', token);

  //  console.log(data);
   
  }

 

}
console.log('appservice');
