import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import TableColumns from "layouts/shipment/TableColumns";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setDataAction } from "store/shipment-actions";
import ShipmentDelete from "./ShipmentDelete";

function Tables() {
  const [selectedItem, setSelectedItem] = useState({});
  const [openItemModal, setOpenItemModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const dispatch = useDispatch();
  const rows = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(setDataAction());
  }, []);

  const showItemHandler = (orderNo) => {
    const clickedItem = rows.find((row) => row.orderNo === orderNo);
    setSelectedItem(clickedItem);
    setOpenItemModal(true);
  };
  const deleteItemHandler = (orderNo) => {
    const clickedItem = rows.find((row) => row.orderNo === orderNo);
    setSelectedItem(clickedItem);
    setOpenDeleteModal(true);
  };
  const updateItemHandler = (orderNo) => {
    const clickedItem = rows.find((row) => row.orderNo === orderNo);
    setSelectedItem(clickedItem);
    setOpenUpdateModal(true);
  };
  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-2}
                py={1}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Shipments Table
                </MDTypography>
                {openDeleteModal && (
                  <ShipmentDelete
                    onOpenModal={openDeleteModal}
                    onCloseModal={closeDeleteModal}
                    orderNo={selectedItem.orderNo}
                  />
                )}
              </MDBox>
              <MDBox pt={3}>
                <DataGrid
                  rows={rows}
                  columns={TableColumns(showItemHandler, deleteItemHandler, updateItemHandler)}
                  getRowId={(row) => row.orderNo}
                  pageSize={10}
                  rowsPerPageOptions={[5, 10, 25]}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
