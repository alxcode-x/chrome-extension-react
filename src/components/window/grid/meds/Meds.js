import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { BiCheckboxChecked } from "react-icons/bi";

function Meds() {
    const rows = [
        { id: 1, col1: '', col2: 'USA', col3: 'Apple Inc, Microsoft' },
        { id: 2, col1: '', col2: 'Sweden', col3: 'IKEA, Spotify' },
      ];

      const columns = [
        { field: 'col1', headerName: '', width: 100 },
        { field: 'col2', headerName: 'Country', width: 100 },
        { field: 'col3', headerName: 'Companies', width: 100 },
      ];

    return (
        <div className="grid-conent" style={{ height: 200, width: '100%' }}>
             <DataGrid rows={rows} columns={columns} />
        </div>
    )
}

export default Meds;