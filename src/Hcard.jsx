import { useNavigate } from "react-router-dom";
const Hcard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <hr className="hcardhr" />
      <br />

      <div className="hbox">
        <div className="hboxes">
          <img className="hboximg" src={props.ime} alt="" srcset="" />
          <h3 className="hboxh3">title</h3>
          <p className="hboxpara">{props.para}</p>
          <button onClick={() => navigate("/user")} className="btn">
            View
          </button>
        </div>
        <div className="hboxes">
          <img
            className="hboximg"
            src="https://picsum.photos/200"
            alt=""
            srcset=""
          />
          <h3 className="hboxh3">title</h3>
          <p className="hboxpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            mollitia nesciunt tenetur?
          </p>
          <button className="btn">View</button>
        </div>
        <div className="hboxes">
          <img
            className="hboximg"
            src="https://picsum.photos/200"
            alt=""
            srcset=""
          />
          <h3 className="hboxh3">title</h3>
          <p className="hboxpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            mollitia nesciunt tenetur?
          </p>
          <button className="btn">View</button>
        </div>
      </div>
    </>
  );
};

export default Hcard;
