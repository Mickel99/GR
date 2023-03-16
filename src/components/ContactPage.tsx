import React, { useState } from "react";
import styled from "styled-components";

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  font-family: Arial, sans-serif;
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  color: #444;
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3e8e41;
  }
`;

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data...")
    try {
      const response = await fetch("https://school-restaurant-api.azurewebsites.net/api-doc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Form data submitted successfully");
        // Clear the form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.log("Error submitting form data");
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };
  

  return (
    <ContactPageContainer>
      <Title>Contact Us</Title>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="
          Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactPageContainer>
);
};

export default ContactPage;    