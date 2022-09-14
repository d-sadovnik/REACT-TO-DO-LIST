import { useState } from "react";
import React from "react";

const Todoform = () => {
  const [InputTodo, setInputTodo] = useState("");
  const [ListaTodo, setListaTodo] = useState([]);

  const llenarFormulario = (event) => {
    setInputTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    NewTodo(InputTodo);
    setInputTodo("")
  };

  const NewTodo = (ToDo) => {
    setListaTodo([ToDo, ...ListaTodo]);
  };

  const borrar = (id) => {
    const FilteredList = ListaTodo.filter((element, index) => index !== id);
    setListaTodo(FilteredList);
  }

  const borrarTarea=() => {
    props.borrar(props.id)
  }

  return (
    <div>
      <div className="col-4 mx-auto d-flex justify-content-between p-2">
        <form className="form" onSubmit={onSubmit}>
          <span>Add To-Do</span>
          <input value={InputTodo} onChange={llenarFormulario} />
          <button type="submit" className="btn-sm btn-outline-secondary">Add</button>
        </form>
      </div>
      <div className="flex-column">
        <div>
            {ListaTodo.map((element, index) => {
              return <div className="col-4 mx-auto d-flex justify-content-between p-1 mb-2 bg-light text-dark border border-secondary rounded-3 ">
                <p>{element}</p>
                <button className="btn btn-secondary" onClick={borrarTarea}>Delete</button>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};

export { Todoform };
