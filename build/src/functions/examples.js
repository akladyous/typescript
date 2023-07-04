"use strict";
// ----------------------------------------------------------------------------------
function serializeJson(value, options) {
    var _a;
    var indentation = (_a = options === null || options === void 0 ? void 0 : options.format) === null || _a === void 0 ? void 0 : _a.indend;
    return JSON.stringify(value, null, indentation);
}
var user = { name: 'paolo' };
serializeJson(user);
serializeJson(user, { format: { indend: 2 } });
