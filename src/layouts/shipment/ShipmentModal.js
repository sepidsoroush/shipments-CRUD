import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ShipmentModal = ({ onOpenModal, onCloseModal, shipment }) => {
  return (
    <Dialog
      open={onOpenModal}
      onClose={onCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Shipment Information</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                disabled
                id="standard-disabled"
                label="Order No"
                defaultValue={shipment.orderNo}
                variant="standard"
              />

              <TextField
                disabled
                id="standard-disabled"
                label="Date"
                defaultValue={shipment.date}
                onChange={(event) => setDate(event.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                disabled
                id="standard-disabled"
                label="Consignee"
                defaultValue={shipment.consignee}
                onChange={(event) => setConsignee(event.target.value)}
                variant="standard"
              />

              <TextField
                disabled
                id="standard-disabled"
                label="Customer"
                defaultValue={shipment.customer}
                onChange={(event) => setCustomer(event.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                disabled
                id="standard-disabled"
                label="Tracking No"
                defaultValue={shipment.trackingNo}
                onChange={(event) => setTrackingNo(event.target.value)}
                variant="standard"
              />

              <TextField
                disabled
                id="standard-disabled"
                label="Status"
                defaultValue={shipment.status}
                onChange={(event) => setStatus(event.target.value)}
                variant="standard"
              />
            </div>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShipmentModal;

ShipmentModal.propTypes = {
  onOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  shipment: PropTypes.shape({
    orderNo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    consignee: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    trackingNo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
