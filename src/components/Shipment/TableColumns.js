import MDTypography from "components/UI/MDTypography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TableColumns = (deleteItemHandler, updateItemHandler) => [
  { field: "orderNo", headerName: "Order No", width: 220 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "customer", headerName: "Customer", width: 230 },
  {
    field: "trackingNo",
    headerName: "Tracking no",
    width: 220,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
  {
    field: "consignee",
    headerName: "Consignee",
    width: 250,
  },
  {
    field: "action",
    headerName: "Actions",
    width: 90,
    align: "center",
    renderCell: (params) => (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <DeleteIcon
          fontSize="small"
          sx={{ minWidth: "30px", color: "red", margin: "0 2px" }}
          onClick={() => deleteItemHandler(params.row.orderNo)}
        />
        <EditIcon
          fontSize="small"
          sx={{ minWidth: "30px", color: "green", margin: "0 2px" }}
          onClick={() => updateItemHandler(params.row.orderNo)}
        />
      </MDTypography>
    ),
  },
];

export default TableColumns;
