import { configureStore } from "@reduxjs/toolkit";
import shipmentSlice from "./shipment-slice";

const store = configureStore({ reducer: shipmentSlice.reducer });
export default store;
