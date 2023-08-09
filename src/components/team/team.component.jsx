import hexToRgba from "hex-to-rgba";

import Card from "../card/card.component";

import "./team.styles.css";

const Team = ({ data, members, deleteMember, updateColor, updateFav }) => {
  const { colorSecundario, titulo, id } = data;

  const handlerColor = (e) => {
    updateColor(e.target.value, id);
  };
  return (
    <>
      {members.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorSecundario, 0.6) }}
        >
          <input
            type="color"
            className="input-color"
            value={colorSecundario}
            onChange={handlerColor}
          />
          <h3 style={{ borderColor: colorSecundario }}>{titulo}</h3>
          <div className="colaboradores">
            {members.map((member, i) => (
              <Card
                key={i}
                data={member}
                colorSecundario={colorSecundario}
                deleteMember={deleteMember}
                updateFav={updateFav}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
