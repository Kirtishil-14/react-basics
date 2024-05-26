import React, {useState, useEffect} from "react";
import Main from "../routes/Main";
import {useLocation} from "react-router-dom";

const getLocalData = () => {
  const lists = localStorage.getItem("todo");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);

  const location = useLocation();
  const {data} = location.state;
  console.log(data);

  const addItem = () => {
    if (!input) {
      console.error("enter data");
      return;
    } else if (input && toggleBtn) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return {...elem, name: input};
          }
          return elem;
        })
      );
      setInput("");
      setIsEditItem(null);
      setToggleBtn(false);
    } else {
      const newItems = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItems([...items, newItems]);
      setInput("");
    }
  };

  const editItem = (id) => {
    const edited_item = items.find((elem) => {
      return elem.id === id;
    });
    setInput(edited_item.name);
    setIsEditItem(id);
    setToggleBtn(true);
  };

  const deleteItem = (id) => {
    const updateItem = items.filter((elem) => {
      return elem.id !== id;
    });

    setItems(updateItem);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Main />
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {toggleBtn ? (
          <button
            type="button"
            className="btn btn-primary m-1 btn-sm"
            onClick={addItem}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary m-1 btn-sm"
            onClick={addItem}
          >
            Add
          </button>
        )}
      </div>
      <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <button
                type="button"
                className="btn btn-primary m-1 btn-sm"
                onClick={() => editItem(item.id)}
              >
                edit
              </button>
              <button
                type="button"
                className="btn btn-primary m-1 btn-sm"
                onClick={() => deleteItem(item.id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger m-1 btn-sm"
          onClick={removeAll}
        >
          Check All
        </button>
      </div>
    </>
  );
};

export default Todo;
