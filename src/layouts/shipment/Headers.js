import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";

const TableColumns = [
  { field: "orderNo", headerName: "Order No", width: 250 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "customer", headerName: "Customer", width: 200 },
  {
    field: "trackingNo",
    headerName: "Tracking no",
    width: 250,
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 100,
  },
  {
    field: "consignee",
    headerName: "Consignee",
    width: 200,
  },
  {
    field: "action",
    headerName: "Actions",
    align: "center",
    renderCell: () => (
      <div>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon style={{ minWidth: "20px", color: "red", margin: "0 5px" }}>delete</Icon>
        </MDTypography>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon style={{ minWidth: "20px", margin: "0 5px" }}>edit</Icon>
        </MDTypography>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon style={{ minWidth: "20px", margin: "0 5px" }}>assignment</Icon>
        </MDTypography>
      </div>
    ),
  },
];

export default TableColumns;
