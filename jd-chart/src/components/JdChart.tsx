import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import { convertToCustomElement } from '../utils/CustomElementWrapper';

const JdChartComponent = ({
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
    <p>jd-chart works. Please edit src/components/JdChartComponent.tsx to make changes</p>
  );
};

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-chart', JdChartComponent);

export default JdChartComponent;
