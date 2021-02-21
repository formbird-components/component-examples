import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import { convertToCustomElement } from '../utils/CustomElementWrapper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

  const [value, setValue] = useState();

  useEffect(() => {
    if (fieldValue) {
      setValue(fieldValue);
    } else if (componentDefinition.defaultValue) {
      setValue(componentDefinition.defaultValue);
    }
  }, []);

  return (
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={() => {}}
        >
          {
            componentDefinition?.dropDownList?.map(item => <MenuItem value={item}>{item}</MenuItem>)
          }
        </Select>
  );
};

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-drop-down', JdDropDown);

export default JdDropDown;
