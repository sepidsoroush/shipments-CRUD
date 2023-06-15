import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataAction } from "store/shipment-actions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid";
import MDBox from "components/UI/MDBox";
import MDTypography from "components/UI/MDTypography";
import DashboardLayout from "components/UI/DashboardLayout";
import TableColumns from "components/Shipment/TableColumns";
import ShipmentDelete from "components/Shipment/ShipmentDelete";
import ShipmentUpdate from "components/Shipment/ShipmentUpdate";

const Shipment = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const dispatch = useDispatch();
  const rows = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(setDataAction());
  }, []);

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
  const closeUpdateModal = () => {
    setOpenUpdateModal(false);
  };

  return (
    <DashboardLayout>
      {openDeleteModal && (
        <ShipmentDelete
          onOpenModal={openDeleteModal}
          onCloseModal={closeDeleteModal}
          orderNo={selectedItem.orderNo}
        />
      )}
      {openUpdateModal && (
        <ShipmentUpdate
          onOpenModal={openUpdateModal}
          onCloseModal={closeUpdateModal}
          shipment={selectedItem}
        />
      )}

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
              </MDBox>
              <MDBox pt={3}>
                <DataGrid
                  sx={{ fontSize: 13 }}
                  rows={rows}
                  columns={TableColumns(deleteItemHandler, updateItemHandler)}
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
};

export default Shipment;