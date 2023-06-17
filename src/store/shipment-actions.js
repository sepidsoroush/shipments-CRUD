import axios from "axios";
const API_ENDPOINT = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
import { shipmentActions } from "./shipment-slice";
import shipmentData from "components/Shipment/data/shipmentData.json";

export function setDataAction() {
  return (dispatch) => {
    dispatch(shipmentActions.setLoading(true));
    axios
      .get(API_ENDPOINT)
      .then((response) => {
        dispatch(shipmentActions.setItems({ shipments: response.data }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(shipmentActions.setItems({ shipments: shipmentData })); //fallback
      })
      .finally(() => {
        dispatch(shipmentActions.setLoading(false));
      });
  };
}

export function deleteAction(orderNo) {
  return (dispatch) => {
    axios
      .delete(`${API_ENDPOINT}&orderNo=${orderNo}`)
      .then(() => {
        dispatch(shipmentActions.deleteItem(orderNo));
      })
      .catch((error) => {
        console.log(error);
        dispatch(shipmentActions.deleteItem(orderNo)); //fallback
      });
  };
}

export function updateAction(orderNo, shipment) {
  return (dispatch) => {
    axios
      .put(`${API_ENDPOINT}&orderNo=${orderNo}`, shipment)
      .then(() => {
        dispatch(shipmentActions.updateItem({ orderNo, shipment }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(shipmentActions.updateItem({ orderNo, shipment })); //fallback
      });
  };
}
