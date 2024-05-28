import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function InputBox({
  cssClass,
  placeholder,
  inputImage = null,
  type = "search",
  handleChange = ()=> {}
}) {
  return (
    // <InputGroup >
    //   <Form.Control
    //     type={type}
    //     placeholder={placeholder}
    //     aria-label={placeholder}
    //     className={cssClass}
    //   />
    //   <InputGroup.Text id="basic-addon1">
    //     <img src={inputImage} />
    //   </InputGroup.Text>
    // </InputGroup>
    <div className={`${cssClass}`}>
      <input
        style={{ border: "none", padding: "8px 15px", position: "relative" }}
        placeholder={placeholder}
        onChange={(e)=> handleChange(e)}
      />
      {inputImage && (
        <img
          src={inputImage}
          alt="icon"
          height={24}
          width={24}
          style={{ right: "0px" }}
        />
      )}
    </div>
  );
}
