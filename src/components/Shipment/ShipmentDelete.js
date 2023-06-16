import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteAction } from "store/shipment-actions";
import PropTypes from "prop-types";

const ShipmentDelete = ({ onOpenModal, onCloseModal, orderNo }) => {
  const dispatch = useDispatch();

  const handleDeleteShipment = () => {
    dispatch(deleteAction(orderNo));
    onCloseModal();
  };

  return (
    <Dialog
      open={onOpenModal}
      onClose={onCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you certain about deleting this shipment?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleDeleteShipment} style={{ color: "red" }}>
          Delete
        </Button>
        <Button onClick={onCloseModal}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShipmentDelete;

ShipmentDelete.propTypes = {
  onOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  orderNo: PropTypes.string.isRequired,
};
