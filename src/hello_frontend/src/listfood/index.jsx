import React, { useState } from "react";
import { Box, Button } from "@mui/material";  // Import Button from @mui/material
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataFoods } from "../data/mockData";
import Header from "../components/Header";
import { useTheme } from "@mui/material";

const ListFood = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelection = (selectedRowId) => {
    if (!selectedRows.includes(selectedRowId)) {
      setSelectedRows([...selectedRows, selectedRowId]);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "restaurantName",
      headerName: "Restaurant Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "quantity", headerName: "Quantity", type: "number", flex: 0.5 },
    {
      field: "foodType",
      headerName: "Food Type",
      flex: 1,
    },
    { field: "expiryDate", headerName: "Expiry Date", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "select",
      headerName: "Select",
      flex: 0.5,
      renderCell: (params) => (
        <Button
          variant={selectedRows.includes(params.row.id) ? "contained" : "outlined"}
          onClick={() => handleRowSelection(params.row.id)}
          disabled={selectedRows.includes(params.row.id)}
          sx={{ padding: "8px 16px" }}
        >
          {selectedRows.includes(params.row.id) ? "Selected" : "Select"}
        </Button>
      ),
    },
  ];
  
  return (
    <Box m="20px">
      <Header
        title="AVAILABLE FOOD"
        subtitle=" Recent food items listed by the HoReCa"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataFoods}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ListFood;