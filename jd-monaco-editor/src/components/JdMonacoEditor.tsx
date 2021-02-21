import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import { convertToCustomElement } from '../utils/CustomElementWrapper';
import Editor from "@monaco-editor/react";

const JdMonacoEditor = ({
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
    <Editor
     height="90vh"
     onChange={() => {}}
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
  );
};

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-monaco-editor', JdMonacoEditor);

export default JdMonacoEditor;
