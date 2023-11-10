import "./Color.css";
import Input from "../../Components/Input";

const Color= ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
       <Input
          
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Color;
