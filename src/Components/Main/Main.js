import Items from "./Items";
import React, { useState } from "react";
import MainPrinter from "./MainPrinter";
import Nav from "../Navigation/Nav";

function Main(onSelectConceptArt) {
  const [project, setProject] = useState(Items);
  const onConceptArtHandler = () => {
    const newProject = Items.filter((pro) => {
      if (pro.title === "conceptArt") {
        return true;
      }
      return false;
    });
    setProject(newProject);
  };
  const onMattePaintHandler = () => {
    const newProject = Items.filter((pro) => {
      if (pro.title === "mattePaint") {
        return true;
      }
      return false;
    });
    setProject(newProject);
  };
  const onShortFilmHandler = () => {
    const newProject = Items.filter((pro) => {
      if (pro.title === "shortFilms") {
        return true;
      }
      return false;
    });
    setProject(newProject);
  };
  const onAllHandler = () => {
    const newProject = Items.filter((pro) => {
      return true;
    });
    setProject(newProject);
  };

  return (
    <>
      <Nav />
      <MainPrinter
        project={project}
        onAllHandler={onAllHandler}
        onConceptArtHandler={onConceptArtHandler}
        onMattePaintHandler={onMattePaintHandler}
        onShortFilmHandler={onShortFilmHandler}
      />
    </>
  );
}

export default Main;
