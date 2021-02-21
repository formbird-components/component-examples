import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import TextField from '@material-ui/core/TextField';
import { convertToCustomElement } from '../utils/CustomElementWrapper';

const JdTextBoxComponent = ({
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
    <TextField onChange={() => {}} required={componentDefinition.mandatory} id={componentDefinition.name} label={componentDefinition.label} value={value} />
  );
};

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-text-box', JdTextBoxComponent);

export default JdTextBoxComponent;
