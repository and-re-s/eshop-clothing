import { Fragment, useState } from "react";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  mobile: "",
  adress1: "",
  adress2: "",
  city: "",
  country: "",
  postcode: "",
};

const AdressForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    firstName,
    lastName,
    mobile,
    adress1,
    adress2,
    city,
    country,
    postcode,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <form onSubmit={() => {}}>
        <FormInput
          label="First Name"
          required
          type="text"
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />

        <FormInput
          label="Last Name"
          required
          type="lastName"
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />

        <FormInput
          label="Mobile"
          required
          type="mobile"
          onChange={handleChange}
          name="mobile"
          value={mobile}
        />

        <FormInput
          label="Adress"
          required
          type="adress1"
          onChange={handleChange}
          name="adress1"
          value={adress1}
        />

        <FormInput
          label="Adress"
          required
          type="adress2"
          onChange={handleChange}
          name="adress2"
          value={adress2}
        />

        <FormInput
          label="City"
          required
          type="city"
          onChange={handleChange}
          name="city"
          value={city}
        />

        <FormInput
          label="Country"
          required
          type="country"
          onChange={handleChange}
          name="country"
          value={country}
        />

        <FormInput
          label="Postcode"
          required
          type="postcode"
          onChange={handleChange}
          name="postcode"
          value={postcode}
        />
      </form>
    </Fragment>
  );
};

export default AdressForm;
