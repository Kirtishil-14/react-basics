import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import moment from "moment";
import celebrities from "./../../src/celebrities.json";

const Sample = () => {
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(celebrities);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const changeText = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);

    setTimeout(() => {
      const newList = celebrities.filter((item) => {
        let name = item.first + " " + item.last;
        return name.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilterList(newList);
    }, 300);
  };

  const deleteUser = () => {
    const newList = filterList.filter((elem) => elem.id !== selectedItem.id);
    console.log("delete", newList);
    setFilterList(newList);

    setOpen(false);
    setSelectedItem(null);
  };

  const editUser = (item) => {
    setSelectedItem(item);
    console.log("edit", item);
  };

  const saveEditData = () => {
    const newList = filterList.map((elem) => {
      if (elem.id === selectedItem.id) {
        return selectedItem;
      } else {
        return elem;
      }
    });
    setFilterList(newList);

    setSelectedItem(null);
  };

  const handleGender = (e) => {
    setSelectedItem({
      ...selectedItem,
      gender: e.target.value,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={changeText}
          placeholder="Search user"
          style={{
            paddingRight: 12,
            paddingLeft: 50,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 12,
            fontSize: 18,
            color: "black",
          }}
        />

        <SearchIcon
          style={{
            position: "absolute",
            left: 10,
            top: 10,
            cursor: "pointer",
          }}
        />
      </div>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          marign: 0,
        }}
      >
        {filterList.map((item) => {
          return (
            <li key={item.id}>
              <Accordion style={{ marginBottom: 12 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <img
                    src={item.picture}
                    alt={item.name}
                    style={{
                      borderRadius: "50%",
                      borderColor: "gray",
                      borderWidth: 2,
                      borderStyle: "solid",
                      width: 50,
                      height: 50,
                      marginRight: 12,
                      cursor: "pointer",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selectedItem?.id === item.id ? (
                      <>
                        <TextField
                          id="outlined-multiline-flexible"
                          value={selectedItem?.first + " " + selectedItem?.last}
                          onChange={(e) => {
                            setSelectedItem({
                              ...selectedItem,
                              first: e.target.value.split(" ")[0],
                              last: e.target.value.split(" ")[1],
                            });
                          }}
                        />
                      </>
                    ) : (
                      <span
                        style={{
                          fontSize: 18,
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        {item.first} {item.last}
                      </span>
                    )}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: 14,
                          color: "gray",
                        }}
                      >
                        Age
                      </span>
                      <div>
                        {selectedItem?.id === item.id ? (
                          <TextField
                            id="outlined-multiline-flexible"
                            value={moment().diff(
                              moment(selectedItem?.dob, "YYYY-MM-DD"),
                              "years"
                            )}
                            onChange={(e) => {
                              setSelectedItem({
                                ...selectedItem,
                                description: e.target.value,
                              });
                            }}
                            style={{
                              width: "100%",
                              marginTop: 12,
                            }}
                          />
                        ) : (
                          <>
                            {moment().diff(
                              moment(item.dob, "YYYY-MM-DD"),
                              "years"
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 14,
                          color: "gray",
                        }}
                      >
                        Gender
                      </span>
                      <div
                        style={{
                          marginTop: 12,
                        }}
                      >
                        {selectedItem?.id === item.id ? (
                          <select
                            value={selectedItem.gender}
                            onChange={handleGender}
                            id="genderSelect"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        ) : (
                          <>{item.gender}</>
                        )}
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 14,
                          color: "gray",
                        }}
                      >
                        Country
                      </span>
                      <div>
                        {selectedItem?.id == item.id ? (
                          <TextField
                            id="outlined-multiline-flexible"
                            value={selectedItem?.country}
                            onChange={(e) => {
                              setSelectedItem({
                                ...selectedItem,
                                country: e.target.value,
                              });
                            }}
                            style={{
                              width: "100%",
                              marginTop: 12,
                            }}
                          />
                        ) : (
                          <>{item.country}</>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <span
                      style={{
                        fontSize: 14,
                        color: "gray",
                      }}
                    >
                      Description
                    </span>
                    <div>
                      {selectedItem?.id == item?.id ? (
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={4}
                          value={selectedItem?.description}
                          onChange={(e) => {
                            setSelectedItem({
                              ...selectedItem,
                              description: e.target.value,
                            });
                          }}
                          style={{
                            width: "100%",
                            marginTop: 12,
                          }}
                        />
                      ) : (
                        <>{item.description}</>
                      )}
                    </div>
                  </div>
                </AccordionDetails>
                <AccordionActions>
                  {selectedItem?.id == item?.id ? (
                    <>
                      <Button onClick={() => setSelectedItem(null)}>
                        Cancel
                      </Button>
                      <Button onClick={saveEditData}>Save</Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleClickOpen(item)}>
                        Delete
                      </Button>
                      <Button onClick={() => editUser(item)}>Edit</Button>
                    </>
                  )}
                </AccordionActions>
              </Accordion>
            </li>
          );
        })}
      </ul>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deleteUser} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sample;
