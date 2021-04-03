import { retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { formPath, LoginFormFieldNames } from "components/pages/LoginPage/form";
import FormSelectors from "redux/forms/selectors";
import serverApi from "utils/serverApi";
//

function* loginUserSaga() {
    try {
        const field = yield select(FormSelectors.getFormField, formPath);
        if (!field) {
            console.log("FIELD NOT FOUND");
            //DO more appropritae error handling
        }

        const {
            children: {
                [LoginFormFieldNames.EMAIL_OR_USERNAME]: emailOrUsername,
                [LoginFormFieldNames.PASSWORD]: password
            }
        } = field;

        const userLoginPayload = {
            emailOrUsername,
            password
        };

        const data = yield retry(2, 1500, serverApi.post, "/login", userLoginPayload);
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load events!");
    }
}
export default loginUserSaga;
