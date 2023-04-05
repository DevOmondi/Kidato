import React from "react";
import {useState} from "react"
import { DataGrid } from "@mui/x-data-grid";


const DetailsTable = ({rows,columns})=>{
 const [pageSize, setPageSize] = React.useState(10);

 return (
            <div>
             <DataGrid
              autoHeight
              checkboxSelection={true}
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 20, 100, 1000]}
              pagination
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
              getRowId= {row => row.id}
             />
            </div>
        )
}
export default DetailsTable;