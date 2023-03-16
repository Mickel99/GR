import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { searchAvailableTables } from "../Service/bookingService";
import TimeSlotSelector from "./Time";
import UserInfoForm from "./UserInfoForm";
import styled from "styled-components";

type FormData = {
  date: string;
  numberOfGuests: number;
};

const BookingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  font-family: Arial, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #4c9baf;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2d758c;
  }
`;

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { register, handleSubmit, setValue, watch } = useForm<FormData>();

  const dateValue = watch("date");

  const onSubmit = async (data: FormData) => {
    try {
      const times = await searchAvailableTables(data.date, data.numberOfGuests);
      setAvailableTimes(times);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookingFormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="date">Datum:</Label>
        <Input {...register("date")} type="date" id="date" />

        <Label htmlFor="numberOfGuests">Antal gäster:</Label>
        <Input {...register("numberOfGuests")} type="number" id="numberOfGuests" min="1" max="6" />

        <Button type="submit">Sök</Button>
      </Form>

      {availableTimes.length > 0 && (
        <TimeSlotSelector times={availableTimes} onSelectTime={setSelectedTime} />
      )}

      {selectedTime && (
        <UserInfoForm
          date={dateValue}
          time={selectedTime}
          onBookingSuccess={() => {
            setValue("date", "");
            setValue("numberOfGuests", 1);
            setAvailableTimes([]);
            setSelectedTime(null);
          }}
        />
      )}
    </BookingFormContainer>
  );
};

export default BookingForm;
