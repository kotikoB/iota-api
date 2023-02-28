export const createItemSchemaValidator = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        price: { type: 'integer' },
        color: { type: 'string' },
    },
    required: ['name', 'price', 'color'],
    additionalProperties: false,
};
