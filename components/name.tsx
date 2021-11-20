import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./reducer/nameReducer";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button, View } from 'react-native'


const Name = (props: any) => {
  const dispatch = useDispatch();
  const nameSelector: any = useSelector((state) => state);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(nameSelector.name);
    if (nameSelector.name === "") {
      handleClickOpen();
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (name !== "") {
      setOpen(false);
      dispatch(changeName(name));
    }
  };


  return (
    <View>
        <Dialog visible={open.state.visible}>

        </Dialog>
    </View>
    /** 
    <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Hva heter du?</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Vi vil bruke navnet ditt i forbindelse med reviews du legger igjen.
            Skriv inn navnet ditt for å fortsette.
          </DialogContentText>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleClose();
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name-input"
              label="Navn"
              type="name"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              color="warning"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="warning">Lagre</Button>
        </DialogActions>
      </Dialog>
    </div>*/
  );
};

export default Name;
