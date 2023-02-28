export const eventSchemaValidator = {
    type: 'object',
    properties: {
        currentLocation: { type: 'string' },
        itemId: { type: 'integer' },
    },
    required: ['currentLocation', 'itemId'],
    additionalProperties: false,
};
