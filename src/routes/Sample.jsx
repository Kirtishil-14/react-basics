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

const list = [
  {
    id: 1,
    first: "Aidan",
    last: "Wang",
    dob: "1973-10-16",
    gender: "male",
    email: "aidan.wang@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/93.jpg",
    country: "New Zealand",
    description:
      "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.",
  },
  {
    id: 2,
    first: "Anna",
    last: "Horten",
    dob: "1972-03-15",
    gender: "female",
    email: "anna.horten@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/48.jpg",
    country: "Norway",
    description:
      "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten.",
  },
  {
    id: 3,
    first: "Max",
    last: "Arnold",
    dob: "1954-04-22",
    gender: "male",
    email: "max.arnold@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/27.jpg",
    country: "Ireland",
    description:
      "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold.",
  },
  {
    id: 4,
    first: "محمدپارسا",
    last: "صدر",
    dob: "1953-06-01",
    gender: "male",
    email: "mhmdprs.sdr@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/34.jpg",
    country: "Iran",
    description:
      "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر.",
  },
  {
    id: 5,
    first: "Emilia",
    last: "Gonzalez",
    dob: "1949-10-07",
    gender: "female",
    email: "emilia.gonzalez@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/90.jpg",
    country: "Spain",
    description:
      "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez.",
  },
  {
    id: 6,
    first: "Alicia",
    last: "Ma",
    dob: "1995-11-23",
    gender: "female",
    email: "alicia.ma@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/91.jpg",
    country: "Canada",
    description:
      "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma.",
  },
  {
    id: 7,
    first: "یاسمن",
    last: "كامياران",
    dob: "1985-06-24",
    gender: "female",
    email: "ysmn.kmyrn@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/64.jpg",
    country: "Iran",
    description:
      "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران.",
  },
  {
    id: 8,
    first: "Reingard",
    last: "Barz",
    dob: "1985-03-24",
    gender: "female",
    email: "reingard.barz@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/95.jpg",
    country: "Germany",
    description:
      "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz.",
  },
  {
    id: 9,
    first: "Felix",
    last: "Douglas",
    dob: "1984-07-05",
    gender: "male",
    email: "felix.douglas@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/53.jpg",
    country: "United Kingdom",
    description:
      "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas.",
  },
  {
    id: 10,
    first: "Claire",
    last: "Robertson",
    dob: "2006-04-16",
    gender: "female",
    email: "claire.robertson@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/75.jpg",
    country: "United States",
    description:
      "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson.",
  },
  {
    id: 11,
    first: "Ümit",
    last: "Taşlı",
    dob: "2004-10-17",
    gender: "male",
    email: "umit.tasli@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/80.jpg",
    country: "Turkey",
    description:
      "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı.",
  },
  {
    id: 12,
    first: "Tiemo",
    last: "Monshouwer",
    dob: "1956-09-11",
    gender: "male",
    email: "tiemo.monshouwer@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/16.jpg",
    country: "Netherlands",
    description:
      "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer.",
  },
  {
    id: 13,
    first: "Dorian",
    last: "Carpentier",
    dob: "1963-10-06",
    gender: "male",
    email: "dorian.carpentier@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/77.jpg",
    country: "France",
    description:
      "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier.",
  },
  {
    id: 14,
    first: "آرمیتا",
    last: "موسوی",
    dob: "1968-07-19",
    gender: "female",
    email: "armyt.mwswy@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/59.jpg",
    country: "Iran",
    description:
      "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی.",
  },
  {
    id: 15,
    first: "Lias",
    last: "Korsvik",
    dob: "1969-12-09",
    gender: "male",
    email: "lias.korsvik@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/69.jpg",
    country: "Norway",
    description:
      "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik.",
  },
  {
    id: 16,
    first: "Florence",
    last: "Cooper",
    dob: "1989-08-31",
    gender: "female",
    email: "florence.cooper@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/19.jpg",
    country: "Ireland",
    description:
      "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper.",
  },
  {
    id: 17,
    first: "Donald",
    last: "Harrison",
    dob: "1947-12-20",
    gender: "male",
    email: "donald.harrison@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/34.jpg",
    country: "United Kingdom",
    description:
      "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison.",
  },
  {
    id: 18,
    first: "Michael",
    last: "Nichols",
    dob: "1963-06-26",
    gender: "male",
    email: "michael.nichols@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/76.jpg",
    country: "United Kingdom",
    description:
      "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols.",
  },
  {
    id: 19,
    first: "Emile",
    last: "Miller",
    dob: "2009-02-03",
    gender: "male",
    email: "emile.miller@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/24.jpg",
    country: "Canada",
    description:
      "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller.",
  },
  {
    id: 20,
    first: "Marjella",
    last: "Stuijt",
    dob: "2014-11-11",
    gender: "female",
    email: "marjella.stuijt@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/31.jpg",
    country: "Netherlands",
    description:
      "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt.",
  },
];

const Sample = () => {
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(list);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [edit, setEdit] = useState(false);

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
      const newList = list.filter((item) => {
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
    setEdit(true);
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

    setEdit(false);
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
