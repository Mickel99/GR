import axios from 'axios';

const API_BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking/create";

export const searchAvailableTables = (_date: string, _numberOfGuests: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["18:00", "21:00"]);
    }, 1000);
  });
};

export const bookTable = async (bookingData: any, restaurantId: string): Promise<any> => {
  const requestBody = {
    "restaurantId": restaurantId,
    "date": bookingData.date,
    "time": bookingData.time,
    "numberOfGuests": bookingData.numberOfGuests,
    "customer": {
      "name": bookingData.name,
      "lastname": "",
      "email": bookingData.email,
      "phone": bookingData.phoneNumber
    }
  };
  
  try {
    const response = await axios.post(API_BASE_URL, requestBody, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    return {
      bookingData: response.data,
      customerData: requestBody.customer
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

