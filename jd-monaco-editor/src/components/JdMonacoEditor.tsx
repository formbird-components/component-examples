import React, { useState, useEffect } from 'react';
import {FormComponent} from '@formbird/types';
import { convertToCustomElement } from '../utils/CustomElementWrapper';
import { changedDocumentService } from '../services';
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

  function handleEditorChange(textValue, event) { 
    changedDocumentService.valueChanged(
      { document, fieldName, textValue, formParameters, template, componentDefinition, key }, 
    textValue); 
  }

  return (
    <Editor
     height="90vh"
     onChange={() => {}}
     defaultLanguage="javascript"
     value={value}
   />
  );
};

// register the component as a custom element so it can be shown in formbird
convertToCustomElement('jd-monaco-editor', JdMonacoEditor);

export default JdMonacoEditor;
