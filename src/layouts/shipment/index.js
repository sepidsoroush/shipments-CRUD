// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { DataGrid } from "@mui/x-data-grid";

// Data
import rows from "./data/shipmentData.json";
import columns from "layouts/shipment/Headers";

function Tables() {
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
