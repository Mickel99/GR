import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  padding: 0 1rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
  }
`;

const TableHeader = styled.th`
  background-color: #4c9baf;
  color: white;
  padding: 20px;
  text-align: left;
  font-weight: bold;
 
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f44336;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Title = styled.h1`
  color: #444;
  margin-bottom: 1rem;
  width: 100%;
`;

interface Ibooking {
  _id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}
const getbookings = async() => {
  const response = await axios.get ("https://school-restaurant-api.azurewebsites.net/booking/restaurant/6413865977123b59344d6cbd")
return response.data
}
const AdminPage = () => {
  const [bookings, setBookings] = useState<Ibooking[]>([]);

useEffect(() => {
  const getdata = async() => {
    const response = await getbookings()
    setBookings(response) 
/*if(bookings.length> 0) return*/ 
}
getdata()
},[]);


const url= "https://school-restaurant-api.azurewebsites.net/booking/delete/"

  const handleDeletBooking = async ( id: string) => {
    let response = await axios.delete(url+id)
    .then (()=>{
      alert("Booking is removed!")
    } ); 

  }
console.log(bookings.length);

let html = bookings.map((booking)=>{
  return(
<TableRow key={booking._id}>
              <TableCell>{booking.customerId}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>{booking.numberOfGuests}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeletBooking(booking._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
  )
})
  return (
    <AdminPageContainer>
      <h1>Admin Panel</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>BookningsId</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Guest</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
        {html}
        </tbody>
      </Table>
    </AdminPageContainer>
  );
};

export default AdminPage;
