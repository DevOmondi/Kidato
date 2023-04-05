import * as React from 'react';
import Paper from '@mui/material/Paper';
import StudentsTable from './StudentsTable';

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <StudentsTable/>
    </Paper>
  );
}