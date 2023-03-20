import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./styles/ReservationsContent.css";
import * as yup from "yup";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function Form() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [selectVal, setSelectVal] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      occasion: "",
      guests: "",
      date: "",
      message: "",
    },
    onSubmit: (values) => {
      submit("https://example.com/reserved", values);
    },
    validationSchema: yup.object({
      name: yup.string().required("Full name is a required field!"),
      email: yup
        .string()
        .required("Email is a required field!")
        .email("Email is not valid!"),
      phone: yup
        .number()
        .required("Phone is a required field!")
        .min(10, "Phone number must have at least 11 digit-number!"),
      guests: yup
        .number()
        .min(1, "There must be at least 1 guest!")
        .required("Please specify number of guests per table!"),
      date: yup.date().required("Please select date and time!"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
        setSelectVal("");
      } else {
        formik.isValid = true;
        formik.isDisabled = false;
      }
    }
  }, [response]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        paddingBottom="5"
        isRequired
        isInvalid={!!formik.errors.name && formik.touched.name}
      >
        <FormLabel htmlFor="name">Full Name</FormLabel>
        <Input
          id="name"
          type="text"
          placeholder="Juan Dela Cruz"
          name="name"
          {...formik.getFieldProps("name")}
        />
        <FormErrorMessage color="red" fontSize="12px">
          {formik.errors.name}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        paddingBottom="5"
        isRequired
        isInvalid={!!formik.errors.email && formik.touched.email}
      >
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="juandelacruz@email.com"
          {...formik.getFieldProps("email")}
        />
        <FormErrorMessage color="red" fontSize="12px">
          {formik.errors.email}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        paddingBottom="5"
        isRequired
        isInvalid={!!formik.errors.phone && formik.touched.phone}
      >
        <FormLabel htmlFor="phone">Phone</FormLabel>
        <Input
          id="phone"
          name="phone"
          type="number"
          placeholder="09176543210"
          {...formik.getFieldProps("phone")}
        />
        <FormErrorMessage color="red" fontSize="12px">
          {formik.errors.phone}
        </FormErrorMessage>
      </FormControl>
      <FormControl paddingBottom="5">
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select
          id="occasion"
          name="occasion"
          border={"1px solid rgba(51,51,51,0.3)"}
          borderRadius="5px"
          icon="none"
          {...formik.getFieldProps("occasion")}
          onChange={(e) => setSelectVal(e.target.value)}
          value={selectVal}
          sx={
            selectVal
              ? {
                  color: "black",
                  backgroundColor: "white",
                }
              : {
                  color: "gray.500",
                }
          }
          placeholder="Select occasion (Optional)"
        >
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </Select>
      </FormControl>
      <FormControl
        paddingBottom="5"
        isRequired
        isInvalid={!!formik.errors.guests && formik.touched.guests}
      >
        <FormLabel htmlFor="guests">Guests</FormLabel>
        <Input
          id="guests"
          name="guests"
          type="number"
          placeholder="1"
          {...formik.getFieldProps("guests")}
        />
        <FormErrorMessage color="red" fontSize="12px">
          {formik.errors.guests}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        paddingBottom="5"
        isRequired
        isInvalid={!!formik.errors.date && formik.touched.date}
      >
        <FormLabel htmlFor="date">Date & Time</FormLabel>
        <Input
          id="date"
          name="date"
          type="datetime-local"
          {...formik.getFieldProps("date")}
        />
        <FormErrorMessage color="red" fontSize="12px">
          {formik.errors.date}
        </FormErrorMessage>
      </FormControl>
      <FormControl paddingBottom="5">
        <FormLabel htmlFor="message">Your Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          height={80}
          width="100%"
          {...formik.getFieldProps("message")}
        />
      </FormControl>
      <Button
        type="submit"
        className="reserve-btn"
        width="full"
        isLoading={isLoading}
        isDisabled={
          isLoading ||
          !!(
            formik.isValid &&
            formik.touched.name &&
            formik.touched.email &&
            formik.touched.phone &&
            formik.touched.guests &&
            formik.touched.date
          )
        }
        cursor={formik.isValid && isDisabled ? 'pointer' : 'not-allowed'}
      >
        RESERVE
      </Button>
    </form>
  );
}

export default Form;
