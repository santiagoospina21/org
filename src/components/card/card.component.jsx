import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import "./card.styles.css";

const Card = ({ data, colorSecundario, deleteMember, updateFav }) => {
  const { name, position, photo, id, fav } = data;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        onClick={() => deleteMember(id)}
        className="eliminar"
      />
      <div className="encabezado" style={{ backgroundColor: colorSecundario }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{position}</h5>
        {fav ? (
          <AiFillHeart
            color="red"
            onClick={() => updateFav(id)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => updateFav(id)}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
