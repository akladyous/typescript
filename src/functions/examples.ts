
// ----------------------------------------------------------------------------------
function serializeJson(value: any, options?: SerializationOption) {
    const indentation = options?.format?.indend;
    return JSON.stringify(value, null, indentation);
}
const user = { name: 'paolo' };
serializeJson(user);
serializeJson(user, { format: { indend: 2 } });
