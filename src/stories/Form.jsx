import React from 'react';
import PropTypes from 'prop-types';
import { Form as KendoForm, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import './assets/index.scss';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export const Form = ({...props }) => {

  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

  return (
    <>
    <KendoForm
     onSubmit={handleSubmit}
     render={(formRenderProps) => (
       <FormElement
         style={{
           maxWidth: 650,
         }}
       >
         <fieldset className={"k-form-fieldset"}>
           <legend className={"k-form-legend"}>
             Please fill in the fields:
           </legend>
           <div className="mb-3">
             <Field
               name={"firstName"}
               component={Input}
               label={"First name"}
             />
           </div>

           <div className="mb-3">
             <Field name={"lastName"} component={Input} label={"Last name"} />
           </div>

           <div className="mb-3">
             <Field
               name={"email"}
               type={"email"}
               component={EmailInput}
               label={"Email"}
               validator={emailValidator}
             />
           </div>
         </fieldset>
         <div className="k-form-buttons">
           <button
             type={"submit"}
             className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
             disabled={!formRenderProps.allowSubmit}
           >
             Submit
           </button>
         </div>
       </FormElement>
     )}
   />
    </>
  );
};

Form.propTypes = {
  ignoreModified: PropTypes.bool,
  initialValues: PropTypes.any,
  validator: PropTypes.oneOf(['values', 'valueGetter'])
};

Form.defaultProps = {
  defaultContent: "Hello World! Type here to explore the features of the KendoReact Editor."
};
