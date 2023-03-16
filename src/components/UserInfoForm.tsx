import React from "react";
import { useForm } from "react-hook-form";
import { bookTable } from "../Service/bookingService";
import styled from "styled-components";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

type UserInfoFormProps = {
  date: string;
  time: string;
  onBookingSuccess: () => void;
};

const UserInfoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #4c9baf;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-right: 1rem;

  &:hover {
    background-color: #2d758c;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;

const UserInfoForm: React.FC<UserInfoFormProps> = ({ date, time, onBookingSuccess }) => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await bookTable({ ...data, date, time }, "6413865977123b59344d6cbd");
      onBookingSuccess();
      alert("Bokningen har genomförts!");
    } catch (error) {
      console.error(error);
      alert("Något gick fel. Försök igen.");
    }
  };
  

  return (
    <UserInfoFormContainer>
      <h3>Personuppgifter:</h3>
      <p>Vi följer GDPR-regler för hantering av personuppgifter.</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Namn:</Label>
        <Input {...register("name")} type="text" id="name" required />
        <Label htmlFor="email">E-post:</Label>
        <Input {...register("email")} type="email" id="email" required />

        <Label htmlFor="phoneNumber">Telefonnummer:</Label>
        <Input {...register("phoneNumber")} type="tel" id="phoneNumber" required />

        <Button type="submit" disabled={formState.isSubmitting}>
          Spara
        </Button>
        <CancelButton type="button" onClick={onBookingSuccess}>
          Avbryt
        </CancelButton>
      </Form>
    </UserInfoFormContainer>
  );
};

export default UserInfoForm;
