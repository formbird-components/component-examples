import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import { convertToCustomElement } from '../utils/CustomElementWrapper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WithGrid from '../utils/WithGrid';

const JdDatatable = ({
  fieldValue,
  componentDefinition,
  columns,
  loading,
  rows
}) => {
  
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const [value, setValue] = useState();

  useEffect(() => {
    if (fieldValue) {
      setValue(fieldValue);
    } else if (componentDefinition.defaultValue) {
      setValue(componentDefinition.defaultValue);
    }
  }, []);
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              columns && columns.map(c => <TableCell>{c.displayName}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {
                columns && columns.map(c => 
                <TableCell component="th" scope="row">
                  {row[c.field]}
                </TableCell>)
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const wrapped = WithGrid(JdDatatable);

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-datatable', wrapped);

export default wrapped;
