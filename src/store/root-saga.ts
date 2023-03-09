import { all, call } from "typed-redux-saga";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";
import { ordersSagas } from "./orders/orders.sagas";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas), call(ordersSagas)]);
}
