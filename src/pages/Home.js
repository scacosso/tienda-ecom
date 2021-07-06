import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemListContainerFirebase from "../firebase/ItemListContainerFirebase"

function home() {
  return (
    <div className="justify-content-center">
      <ItemListContainerFirebase />
      <ItemListContainer />
    </div>
  );
}

export default home;