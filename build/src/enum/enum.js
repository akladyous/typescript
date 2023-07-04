"use strict";
var CrudActions;
(function (CrudActions) {
    debugger
    CrudActions[CrudActions["CREATE"] = 0] = "CREATE";
    CrudActions[CrudActions["READ"] = 1] = "READ";
    CrudActions[CrudActions["UPDATE"] = 2] = "UPDATE";
    CrudActions[CrudActions["DELETE"] = 3] = "DELETE";
})(CrudActions || (CrudActions = {}));
console.log(CrudActions.CREATE);
