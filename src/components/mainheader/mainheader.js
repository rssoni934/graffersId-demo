import React, { useContext, useState } from "react";
import InputBox from "../../common/searchbox";
import locationIcon from "../../assets/location.png";
import "./mainheader.css";
import { Button, Form } from "react-bootstrap";
import BasicDropDown from "../../common/dropdown";
import BasicModal from "../../common/basicmodal";
import GlobalContext from "../../common/context/GlobalContext";
import GraffersidCompLogo from "../../assets/Group11635.png";

function MainHeader() {
  const data = ["Name", "Average", "Rating", "Location"];
  const [dropdrownValue, setDropdownValue] = useState(data[0]);
  const [showModal, setShowModal] = useState(false);
  const [companyDetails, setCompanyDetail] = useState({
    name: "",
    location: "",
    foundedOn: "",
    city: "",
  });
  const { companyData, setCompanyData, setSearchText, searchText } =
    useContext(GlobalContext);

  const addCompanyData = () => {
    setCompanyData([
      {
        logo: GraffersidCompLogo,
        name: companyDetails.name,
        address: companyDetails.location,
        founded: companyDetails.foundedOn,
      },
      ...companyData,
    ]);
    setShowModal(false);
    setCompanyDetail({
      name: "",
      location: "",
      foundedOn: "",
      city: "",
    });
  };

  const addCompanyView = () => {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              value={companyDetails.name}
              onChange={(e) =>
                setCompanyDetail({ ...companyDetails, name: e.target.value })
              }
              type="email"
              placeholder="Enter..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={companyDetails.location}
              onChange={(e) =>
                setCompanyDetail({
                  ...companyDetails,
                  location: e.target.value,
                })
              }
              rows={3}
              placeholder="Select Location"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Founded On</Form.Label>
            <Form.Control
              value={companyDetails.foundedOn}
              onChange={(e) =>
                setCompanyDetail({
                  ...companyDetails,
                  foundedOn: e.target.value,
                })
              }
              rows={3}
              type="date"
              placeholder="DD/MM/YYY"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={companyDetails.city}
              onChange={(e) =>
                setCompanyDetail({ ...companyDetails, city: e.target.value })
              }
              rows={3}
            />
          </Form.Group>
        </Form>
      </>
    );
  };

  return (
    <>
      <div className="mainheader">
        <div>
          <p>Select City</p>
          <InputBox
            placeholder={"Select city..."}
            inputImage={locationIcon}
            cssClass={"seachLocation"}
            handleChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
        </div>
        <Button className="gradBtn">Find Company</Button>
        <Button className="gradBtn" onClick={() => setShowModal(true)}>
          + Add Company
        </Button>
        <div>
          <p>Sort:</p>
          <BasicDropDown
            items={data}
            value={dropdrownValue}
            setValue={setDropdownValue}
          />
        </div>
      </div>
      {showModal && (
        <BasicModal
          show={showModal}
          onClose={() => setShowModal(false)}
          handleSave={addCompanyData}
          modalBody={addCompanyView}
          title="Add Company"
        />
      )}
    </>
  );
}

export default MainHeader;
