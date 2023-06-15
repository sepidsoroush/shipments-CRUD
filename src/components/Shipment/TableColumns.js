import Icon from "@mui/material/Icon";
import MDTypography from "components/UI/MDTypography";

const TableColumns = (showItemHandler, deleteItemHandler, updateItemHandler) => [
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
    renderCell: (params) => (
      <div>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon
            style={{ minWidth: "20px", color: "red", margin: "0 5px" }}
            onClick={() => deleteItemHandler(params.row.orderNo)}
          >
            delete
          </Icon>
        </MDTypography>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon
            style={{ minWidth: "20px", margin: "0 5px" }}
            onClick={() => updateItemHandler(params.row.orderNo)}
          >
            edit
          </Icon>
        </MDTypography>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon
            style={{ minWidth: "20px", margin: "0 5px" }}
            onClick={() => showItemHandler(params.row.orderNo)}
          >
            assignment
          </Icon>
        </MDTypography>
      </div>
    ),
  },
];

export default TableColumns;
