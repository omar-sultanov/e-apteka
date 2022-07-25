export default class NetworkService {
  token: string;
  endpoint: string;

  constructor(endpoint: string, token:string) {
    this.endpoint = `${endpoint}api/`;
    this.token = token;
  }

  fetch  = ({
    alias, parameters }:{alias: string, parameters: object}) => {
    const options : {method:string,headers:any, body: any} = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "token": this.token
      },
      body: JSON.stringify(parameters),

    };

    return (
      fetch(`${this.endpoint}${alias}`,options)
        .then(response => response.json())
    );
  };
}





  