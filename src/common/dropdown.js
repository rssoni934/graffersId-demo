import Dropdown from "react-bootstrap/Dropdown";

function BasicDropDown({ items = [], value, setValue, onSelect = null }) {
  const handleSelect = (e) => {
    console.log("setValue", setValue);
    setValue(e.target.text);
    onSelect && onSelect(e);
  };

  const style = {
    dropdownSection: {
      color: "black",
      backgroundColor: "white",
      borderRadius: "6px",
      width: "150px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <Dropdown>
      <Dropdown.Toggle style={style.dropdownSection} id="dropdown-basic">
        {value}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, i) => (
          <Dropdown.Item onClick={handleSelect} href={`#/action-${i}`}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicDropDown;
