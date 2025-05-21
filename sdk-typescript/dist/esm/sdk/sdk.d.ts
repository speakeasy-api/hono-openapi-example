import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { Users } from "./users.js";
export declare class SDK extends ClientSDK {
    private _users?;
    get users(): Users;
    createUser(request: models.UserInsert, options?: RequestOptions): Promise<models.UserSelect>;
    getUser(request: operations.GetUserRequest, options?: RequestOptions): Promise<models.UserSelect>;
}
//# sourceMappingURL=sdk.d.ts.map