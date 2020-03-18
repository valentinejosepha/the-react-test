import React from "react";
import Header from "./Header";

const Formulaire = () => {
  function Header() {
    return <Header />
  }
  return (
    <div>
    <form>
      <label>
        Nom :
        <input type="text" name="name" />
      </label>
      <label>
        Prénom :
        <input type="text" name="firstname" />
      </label>
      <label>
        Adresse
        <input type="text" name="adress" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
    </div>
  );
};

export default Formulaire;
