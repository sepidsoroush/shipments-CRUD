import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import columns from "layouts/shipment/Headers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDataAction } from "store/shipment-actions";

function Tables() {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(setDataAction());
  }, []);

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
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
                  rows={rows}
                  columns={columns}
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
