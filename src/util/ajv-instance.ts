import Ajv from 'ajv';

const addFormats = require('ajv-formats');

const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

export default ajvInstance;
