import axios from "axios";

export interface IRestaurant {
    name: string;
    address: IAddress[]
 }
   interface IAddress{
    street:string,
    zip:string,
    city:string,
   }
   export const createRestaurant = async (): Promise<IRestaurant[]> => {
    const response = await axios.post('https://school-restaurant-api.azurewebsites.net/restaurant/create', {
      name: 'ITALIANO ROM.',
      address: {
        street: 'Vasagatan 1',
        zip: '17425',
        city: 'Stockholm'
      }
    });
  
    return response.data;
  }
  
  let restaurantid ="6413865977123b59344d6cbd";