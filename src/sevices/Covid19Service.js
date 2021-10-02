import { baseService } from "./baseService";


export class Covid19Service extends baseService {
    constructor(){
        super();
    }
    getDataCovid19 = () => {
       return this.get('/summary');
    }
    getDetailCountry = (countryCode) => {
        return this.get(`/country/${countryCode}`);
    }
}

export const covid19Service = new Covid19Service(); 