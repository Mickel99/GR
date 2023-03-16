import axios from 'axios';

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net/restaurant/:id/booking/create";

export const searchAvailableTables = (_date: string, _numberOfGuests: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["18:00", "21:00"]);
    }, 1000);
  });
};

export const bookTable = async (bookingData: any, restaurantId: string): Promise<any> => { 
  let response = await axios.post(`https://school-restaurant-api.azurewebsites.net/restaurant/${restaurantId}/booking/create`, bookingData);
  return response.data;
};
