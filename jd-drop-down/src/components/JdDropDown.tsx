import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import { convertToCustomElement } from '../utils/CustomElementWrapper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { changedDocumentService } from '../services';

const JdDropDown = ({
  document,
  fieldValue,
  template,
  fieldName,
  formParameters,
  key,
  responsiveLayouts,
  message,
  componentDefinition
}) => {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const [value, setValue] = useState();

  useEffect(() => {
    if (fieldValue) {
      setValue(fieldValue);
    } else if (componentDefinition.defaultValue) {
      setValue(componentDefinition.defaultValue);
    }
  }, []);

  function onChange(event) {
    setValue(event.target.value);
  
    changedDocumentService.valueChanged({
      document,
      fieldName,
      fieldValue,
      formParameters,
      template,
      componentDefinition,
      key
    }, event.target.value);
  }
  
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{componentDefinition.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={componentDefinition.name}
          value={value}
          className={classes.selectEmpty}
          onChange={onChange}>
          {
            componentDefinition?.dropDownList?.map(item => <MenuItem value={item}>{item}</MenuItem>)
          }
        </Select>
      </FormControl>
  );
};

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-drop-down', JdDropDown);

export default JdDropDown;
