import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [contact, setContact] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
    replyTo: "@",
    accessKey: process.env.STATIC_FORMS_ACCESS_KEY,
  });

  const [consent, setConsent] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = async () => {
    try {
      const res = await fetch(process.env.STATIC_FORMS_URL, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message:
            "Dzięujemy za wysłanie wiadomości, wkrótce skontaktujemy się z Tobą.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      await fetch(process.env.STATIC_FORMS_URL, {
        method: "POST",
        body: {
          error: JSON.stringify(e),
          accessKey: process.env.STATIC_FORMS_ACCESS_KEY,
        },
        headers: { "Content-Type": "application/json" },
      });
      setResponse({
        type: "error",
        message: "Podczas wysyłania wiadomości wystąpił błąd, spróbuj później.",
      });
    }
  };

  return (
    <div>
      {response.message ? (
        response.message
      ) : (
        <>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              id="outlined-error-helper-text"
              type="text"
              name="firstName"
              label="imię i nazwisko"
              error={!!errors.firstName}
              helperText={!!errors.firstName && "pole wymagane"}
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              {...register("firstName", { required: true, maxLength: 20 })}
            />

            <Input
              id="outlined-error-helper-text"
              type="email"
              name="email"
              label="email"
              error={!!errors.email}
              helperText={!!errors.email && "wymagany poprawny adres email"}
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <Input
              id="outlined-error-helper-text"
              type="tel"
              name="phone"
              label="numer kontaktowy"
              error={!!errors.phone}
              helperText={!!errors.phone && "pole wymagane"}
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              {...register("phone", { required: true, maxLength: 12 })}
            />

            <Input
              id="outlined-error-helper-text"
              type="text"
              multiline
              rows="4"
              name="message"
              label="twoja wiadomość..."
              error={!!errors.message}
              helperText={!!errors.message && "pole wymagane"}
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              {...register("message", { required: true})}
            />

            <FormControl error={!!errors.dataProcessingConsent}>
              <FormControlLabel
                control={
                  <Checkbox 
                    color="default"
                    name="dataProcessingConsent"
                    checked={consent}
                    {...register("dataProcessingConsent", { required: true})}
                    onChange={() => setConsent(!consent)}
                  />
                }
                label="Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celu sformułowania oferty"
              />
              <FormHelperText>
                {!!errors.dataProcessingConsent && "zgoda jest wymagana"}
              </FormHelperText>
            </FormControl>

            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              onChange={handleChange}
              {...register("honeypot")}
            />

            <Button type="submit" variant="outlined">
              Wyślij
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default ContactForm;

const CssCheckbox = withStyles({
  root: {
    color: "#000000",
    "&$checked": {
      color: "#000000",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const CssTextField = withStyles({
  root: {
    "& .MuiFormControl-root": {
      marginBottom: "1rem",
    },
    "& input.MuiOutlinedInput-input": {
      padding: "18.5px 14px 10px 14px",
    },
    "& label.Mui-focused": {
      color: "#000000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000000",
      },
      "&:hover fieldset": {
        borderColor: "#000000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000000",
      },
    },
  },
})(TextField);
const Input = styled(TextField)`
  margin: 1rem 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
