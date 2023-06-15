import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

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
        <MDButton variant="text" color="error">
          <Icon>delete</Icon>
        </MDButton>
        <MDButton variant="text" color="dark">
          <Icon>edit</Icon>
        </MDButton>
      </div>
    ),
  },
];

export default TableColumns;
