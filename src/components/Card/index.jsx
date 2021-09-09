import "./style.css";
const Card = ({ char: { image, name, gender, house } }) => {
  return (
    <>
      {house === "Gryffindor" ? (
        <div className="grif">
          <img src={image} alt={name}></img>
          <br />
          <label>{name}</label>
          <br />
          <label>{gender}</label>
          <br />
          <label>{house}</label>
        </div>
      ) : null}
      {house === "Slytherin" ? (
        <div className="slyth">
          <img src={image} alt={name}></img>
          <br />
          <label>{name}</label>
          <br />
          <label>{gender}</label>
          <br />
          <label>{house}</label>
        </div>
      ) : null}
      {house === "Hufflepuff" ? (
        <div className="huff">
          <img src={image} alt={name}></img>
          <br />
          <label>{name}</label>
          <br />
          <label>{gender}</label>
          <br />
          <label>{house}</label>
        </div>
      ) : null}
      {house === "Ravenclaw" ? (
        <div className="raven">
          <img src={image} alt={name}></img>
          <br />
          <label>{name}</label>
          <br />
          <label>{gender}</label>
          <br />
          <label>{house}</label>
        </div>
      ) : null}
    </>
  );
};

export default Card;
