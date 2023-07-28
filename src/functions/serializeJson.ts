
// ----------------------------------------------------------------------------------
function serializeJson(value: any, options?: SerializationOption) {
    const indentation = options?.format?.indend;
    return JSON.stringify(value, null, indentation);
}
const u1 = { name: 'paolo' };
serializeJson(u1);
serializeJson(u1, { format: { indend: 2 } });
