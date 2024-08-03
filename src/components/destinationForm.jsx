import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import useDestinations from './hooks';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 5px;
    max-width: 90%;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const validationSchema = Yup.object({
  location: Yup.string().required('Location is required'),
  country: Yup.string().required('Country is required'),
  description: Yup.string().required('Description is required'),
});

const DestinationForm = () => {
  const { addDestination } = useDestinations();
  const formik = useFormik({
    initialValues: {
      location: '',
      country: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addDestination({ ...values, visited: false });
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="location"
        placeholder="Location Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.location}
      />
      {formik.touched.location && formik.errors.location ? (
        <ErrorMessage>{formik.errors.location}</ErrorMessage>
      ) : null}

      <Input
        type="text"
        name="country"
        placeholder="Country"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
      />
      {formik.touched.country && formik.errors.country ? (
        <ErrorMessage>{formik.errors.country}</ErrorMessage>
      ) : null}

      <Textarea
        name="description"
        placeholder="Description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      {formik.touched.description && formik.errors.description ? (
        <ErrorMessage>{formik.errors.description}</ErrorMessage>
      ) : null}

      <Button type="submit">Add Destination</Button>
    </Form>
  );
};

export default DestinationForm;
