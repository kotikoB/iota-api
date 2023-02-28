export const updateItemSchemaValidator = {
    type: 'object',
    properties: {
        name: { type: 'string' },
    },
    required: ['name'],
    additionalProperties: false,
};
