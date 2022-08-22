export default class NetworkService {
  token: string;
  endpoint: string;

  constructor(endpoint: string, token:string) {
    this.endpoint = `${endpoint}api/`;
    this.token = token;
  }

  setToken(token: string) {
    this.token = token;
  }
  fetch  = ({
    alias, parameters }:{alias: string, parameters?: object}) => {
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

  fetchToken(url: string, requestType: string, body: any) {
    const requestOptions = {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    };

    return (
      fetch(url, requestOptions)
        .then((response) => response.json())
    );
  }
  getToken = (url:string, requestType:string)=>{
    const token = localStorage.getItem('token') as string;
    return token
  }
}





  