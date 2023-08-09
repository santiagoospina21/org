import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import Header from "./components/header/header.component";
import Form from "./components/form/form.component";
import MyOrg from "./components/myOrg/myOrg.component";
import Team from "./components/team/team.component";
import Footer from "./components/footer/footer.component";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [members, setMembers] = useState([
    {
      id: uuidv4(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      position: "Instructor",
      fav: true,
    },
    {
      id: uuidv4(),
      team: "Programación",
      photo: "https://github.com/genesysaluralatam.png",
      name: "Genesys Rondón",
      position: "Desarrolladora de software e instructora",
      fav: true,
    },
    {
      id: uuidv4(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      position: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      position: "Dev FullStack",
      fav: true,
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA",
    },

    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157",
    },

    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69",
    },

    {
      id: uuidv4(),
      titulo: "Ux y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF",
    },

    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05",
    },

    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29",
    },
  ]);

  const handlerForm = () => {
    setShowForm(!showForm);
  };

  const registerMember = (member) => {
    setMembers([...members, member]);
  };

  const deleteMember = (id) => {
    const newMembers = members.filter((member) => member.id !== id);
    setMembers(newMembers);
  };

  const updateColor = (color, id) => {
    const teamsUpdated = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorSecundario = color;
      }
      return equipo;
    });

    setEquipos(teamsUpdated);
  };

  const createTeam = (newTeam) => {
    console.log(newTeam);
    setEquipos([...equipos, { ...newTeam, id: uuidv4() }]);
  };

  const updateFav = (id) => {
    const updateMembers = members.map((member) => {
      if (member.id === id) {
        member.fav = !member.fav;
      }
      return member;
    });
    setMembers(updateMembers);
  };

  //LocalStorage
  useEffect(() => {
    const storedMembers = JSON.parse(window.localStorage.getItem("members"));

    setMembers(storedMembers);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  return (
    <div className="App">
      <Header />
      {showForm && (
        <Form
          equipos={equipos.map((team) => team.titulo)}
          registerMember={registerMember}
          createTeam={createTeam}
        />
      )}
      <MyOrg handlerForm={handlerForm} />
      {equipos.map((team, i) => (
        <Team
          key={i}
          data={team}
          members={members.filter((member) => member.team === team.titulo)}
          deleteMember={deleteMember}
          updateColor={updateColor}
          updateFav={updateFav}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
