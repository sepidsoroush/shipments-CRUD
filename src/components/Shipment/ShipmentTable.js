import PropTypes from "prop-types";
import MDTypography from "components/UI/MDTypography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

const ShipmentTable = ({ rows, deleteItemHandler, updateItemHandler }) => {
  const columns = [
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
  return (
    <DataGrid
      sx={{ fontSize: 13, overflowX: "scroll" }}
      rows={rows}
      columns={columns}
      getRowId={(row) => row.orderNo}
      pageSize={10}
      rowsPerPageOptions={[5, 10, 25]}
    />
  );
};

export default ShipmentTable;

ShipmentTable.propTypes = {
  deleteItemHandler: PropTypes.func.isRequired,
  updateItemHandler: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      orderNo: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      consignee: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      trackingNo: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
