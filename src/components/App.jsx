import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Avatar
      img="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D03AQFyA_na3HuhbQ%2Fprofile-displayphoto-shrink_200_200%2F0%2F1633019075603%3Fe%3D1658966400%26v%3Dbeta%26t%3D6hH6o1YBzp2lcw7-3vZEOwSQH7IL2_qtG1IEmx5MCxs&imgrefurl=https%3A%2F%2Fuk.linkedin.com%2Fin%2Fsharthak-rai&tbnid=FvCvzcoUO6JJiM&vet=12ahUKEwio3cDtzMP4AhWNg84BHaDxBDIQMygAegQIARAy..i&docid=MkuC1RPa69JJlM&w=200&h=200&q=sharthak%20rai&ved=2ahUKEwio3cDtzMP4AhWNg84BHaDxBDIQMygAegQIARAy"
       /> 
       

      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
