import CardStore from "@stores/CardStore";
import NetworkService from "./NetworkService";

export default class ProductService {

  networkService : NetworkService;
  cardStore : CardStore;

  constructor(networkService: NetworkService, cardStore: CardStore) {
    this.networkService = networkService;
    this.cardStore = cardStore;
  }

   async getPills() {
    const respond = await this.networkService.fetch({alias: 'products/part', parameters: {offset: 0, limit: 100}});
    this.cardStore.getProducts(respond.data.products);
  }

}