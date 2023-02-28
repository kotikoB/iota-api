import Ajv from 'ajv';

const ajvInstance: Ajv = require('../../util/ajv-instance');

const schema = {
    type: 'object',
    properties: {
        currentLocation: { type: 'string' },
        itemId: { type: 'integer' },
    },
    required: ['currentLocation', 'itemId'],
    additionalProperties: false,
};
