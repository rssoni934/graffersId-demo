import React, { useContext, useEffect, useState } from "react";
import StarRating from "../../common/starrating";
import "./dashboard.css";
import GlobalContext from "../../common/context/GlobalContext";
import BasicModal from "../../common/basicmodal";
import { Form } from "react-bootstrap";
import jorgue from "../../assets/Ellipse.png";

const Review = ({ name, date, content, Image }) => (
  <div style={styles.reviewContainer}>
    <img src={Image} style={styles.logo} alt={`${name} Logo`} />
    <div style={styles.reviewText}>
      <h6>{name}</h6>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [rating, setRating] = useState(0);
  const { companyData, setCompanyData, searchText } = useContext(GlobalContext);
  const [extendedIndex, setExtendedIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [reviewer, setReviewer] = useState({
    name: "",
    subject: "",
    review: "",
  });
  const [companies, setCompanies] = useState(companyData);

  useEffect(() => {
    console.log("companies",companies)
    if (searchText) {
      setCompanies(
        companyData.filter(
          (comp) =>
            comp.name.includes(searchText) || comp.address.includes(searchText)
        )
      );
    }else{
      setCompanies(companyData);
    }
  }, [searchText, companyData]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const toggleExtension = (index) => {
    setExtendedIndex(extendedIndex === index ? -1 : index);
  };

  const handleModalSave = () => {
    const reviews = companyData[extendedIndex].reviewData ?? [];
    const updatedData = companyData.map((data, i) => {
      if (extendedIndex === i) {
        return {
          ...data,
          reviewData: [
            {
              Image: jorgue,
              name: reviewer.name,
              date: getCurrentDateTime(),
              content: reviewer.review,
            },
            ...reviews
          ],
        };
      }

      return data;
    });

    setCompanyData(updatedData);
    setShowModal(false);
    setReviewer({
      name: "",
      subject: "",
      review: "",
    });
  };

  const addReviewModal = () => {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={reviewer.name}
              onChange={(e) =>
                setReviewer({ ...reviewer, name: e.target.value })
              }
              placeholder="Enter"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              value={reviewer.subject}
              onChange={(e) =>
                setReviewer({ ...reviewer, subject: e.target.value })
              }
              placeholder="Enter"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Your Review</Form.Label>
            <Form.Control
              value={reviewer.review}
              onChange={(e) =>
                setReviewer({ ...reviewer, review: e.target.value })
              }
              as={"textarea"}
              placeholder="Description"
            />
          </Form.Group>
        </Form>
      </>
    );
  };

  function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns zero-based index
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year}, ${hours}:${minutes}`;
  }

  return (
    <div style={styles.container}>
      {companies.map((company, index) => (
        <div
          key={index}
          style={{
            ...styles.box,
            // height: extendedIndex === index ? "auto" : "auto",
          }}
        >
          <div style={styles.row}>
            <div style={styles.imgContent}>
              <div
                style={{
                  ...styles.imageContainer,
                  backgroundColor: company.backgroundColor,
                }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  style={styles.logo}
                />
              </div>
              <div style={styles.textContainer}>
                <div>
                  <h2 style={styles.text}>{company.name}</h2>
                  <p style={styles.textSmall}>{company.address}</p>
                </div>
                <div style={styles.ratingContainer}>
                  <StarRating onChange={handleRatingChange} />
                  <p style={styles.textSmall}>{`${
                    company?.reviews ?? 0
                  } Reviews`}</p>
                </div>
              </div>
            </div>

            <div style={styles.actions}>
              <h2 style={{ fontSize: "10px" }}>
                {"Founded on " + company.founded}
              </h2>
              <button
                style={
                  extendedIndex === index
                    ? styles.gradientButton
                    : styles.button
                }
                onClick={() =>
                  extendedIndex !== index
                    ? toggleExtension(index)
                    : setShowModal(true)
                }
              >
                {extendedIndex === index ? "+ Add Review" : "Detail Review"}
              </button>
            </div>
          </div>

          {extendedIndex === index && (
            <>
              {company?.reviewData?.map((review, idx) => (
                <Review key={idx} {...review} />
              ))}
            </>
          )}
        </div>
      ))}

      {showModal && (
        <BasicModal
          show={showModal}
          onClose={() => setShowModal(false)}
          handleSave={handleModalSave}
          modalBody={addReviewModal}
          title="Add Review"
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "90px",
    // display: "flex",
    // flexDirection: "column", // Display boxes in a column layout
    // alignItems: "center",
  },
  box: {
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    position: "relative",
    marginBottom: "20px", // Add margin between boxes
    overflow: "hidden", // Hide overflow when box is not extended
    transition: "height 0.3s ease", // Add smooth transition to height change
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    // marginRight: "10px",
  },
  imgContent: {
    display: "flex",
  },
  imageContainer: {
    height: "106px",
    width: "100px",
    marginRight: "20px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text: {
    fontSize: "18px",
    margin: "0",
  },
  textSmall: {
    fontSize: "14px",
    margin: "0",
  },
  actions: {
    // position: "absolute",
    top: "10px",
    right: "10px",
    textAlign: "right",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "30px",
  },
  gradientButton: {
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "30px",
    backgroundImage: "linear-gradient(to right, #D100F3, #002BC5)",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
  },
  reviewContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "flex-start",
  },
  reviewText: {
    marginLeft: "10px",
  },
};

export default Dashboard;
