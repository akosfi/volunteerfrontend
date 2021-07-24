import { get, forEach } from "lodash";
import { put } from "typed-redux-saga";
//
import { formActions } from "redux/forms/slice";

export type FormFieldAPIFieldPair = {
    formFieldName: string;
    responseFieldName: string;
};

export type FormFieldAPIFieldPairs = FormFieldAPIFieldPair[];

function* handleResponseValidationErrors(
    e: Error,
    formFieldResponseKeyPairs: FormFieldAPIFieldPairs,
    getFieldPath: (value: any) => string
) {
    const errors = get(e, "response.data.errors");

    if (!errors) return;

    let transformedErrors: { path: string; error: string }[] = [];
    forEach(formFieldResponseKeyPairs, ({ formFieldName, responseFieldName }) => {
        transformedErrors.push({
            path: `${getFieldPath(formFieldName)}`,
            error: get(errors, `${responseFieldName}[0]`, "")
        });
    });

    yield put(formActions.setFieldErrorBulk(transformedErrors));
}

export default handleResponseValidationErrors;
