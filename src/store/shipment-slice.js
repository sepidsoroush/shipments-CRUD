import { createSlice } from "@reduxjs/toolkit";

const shipmentSlice = createSlice({
  name: "shipments",
  initialState: {
    shipments: [],
  },
  reducers: {
    setItems(state, action) {
      state.shipments = action.payload.shipments;
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.shipments = state.shipments.filter((row) => row.orderNo !== action.payload);
    },
    updateItem(state, action) {
      const { trackingNo, date, status, consignee, customer } = action.payload.shipment;
      const existingItem = state.shipments.find((row) => row.orderNo === action.payload.orderNo);
      existingItem.trackingNo = trackingNo;
      existingItem.date = date;
      existingItem.status = status;
      existingItem.consignee = consignee;
      existingItem.customer = customer;
    },
  },
});

export const shipmentActions = shipmentSlice.actions;
export default shipmentSlice;
