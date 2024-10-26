import * as Yup from "yup"

export const validationSchema =
  Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Za-zІіЇїЄєҐґ\s]+$/,
        "Field has contain only letters and spaces"
      )
      .min(
        3,
        "Field has contain at least 3 symbols"
      )
      .max(
        50,
        "Field couldn't contain more than 50 symbols"
      )
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^[0-9-]+$/,
        "Field has contain only digits and hyphens"
      )
      .min(
        3,
        "Field has contain at least 3 symbols"
      )
      .max(
        50,
        "Field couldn't contain more than 50 symbols"
      )
      .required("Number is required"),
  })
