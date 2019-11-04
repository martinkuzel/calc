import React from "react";
import ButtonGroup from "./ButtonGroup";
import {useHistory,useParams} from 'react-router-dom'

const Navigation = ({setNewFilter, graph}) => {
  const {push} = useHistory();

  return (
    <div>
      <ButtonGroup setNewFilter={setNewFilter}></ButtonGroup>
      <button onClick={ () => graph ? push("/") : push("/graph") }>Graph</button>
    </div>
  );
};

export default Navigation;
