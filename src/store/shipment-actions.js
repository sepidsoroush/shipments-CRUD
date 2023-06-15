import { shipmentActions } from "./shipment-slice";
import shipmentData from "../layouts/shipment/data/shipmentData.json";

export function setDataAction() {
  return (dispatch) => {
    dispatch(shipmentActions.setItems({ shipments: shipmentData }));
  };
}

export function deleteAction(orderNo) {
  return (dispatch) => {
    dispatch(shipmentActions.deleteItem(orderNo));
  };
}

export function updateAction(orderNo, shipment) {
  return (dispatch) => {
    dispatch(shipmentActions.updateItem(orderNo, shipment));
  };
}
