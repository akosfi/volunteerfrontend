import { get } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.form;

const getRootForm = (state: StoreState) => getState(state).formRoot;

const getFieldValue = (state: StoreState, path: string) => get(getRootForm(state), `children.${path}.value`, null);

const getFieldError = (state: StoreState, path: string) => get(getRootForm(state), `children.${path}.error`, null);

const getFieldIsDirty = (state: StoreState, path: string) => get(getRootForm(state), `children.${path}.isDirty`, null);

const getIsFormFieldExists = (state: StoreState, path: string) => get(getRootForm(state), `children.${path}`, null);

const getFormField = (state: StoreState, path: string) => get(getRootForm(state), `children.${path}`, null);

const FormSelectors = { getFieldValue, getFieldError, getFieldIsDirty, getIsFormFieldExists, getFormField };

export default FormSelectors;
