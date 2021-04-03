import { get } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.form;

const getRootForm = (state: StoreState) => getState(state).rootForm;

const getFieldValue = (state: StoreState, path: string) => get(getRootForm(state), `${path}.value`, null);

const getFieldError = (state: StoreState, path: string) => get(getRootForm(state), `${path}.error`, null);

const getFieldIsDirty = (state: StoreState, path: string) => get(getRootForm(state), `${path}.isDirty`, null);

const FormSelectors = { getFieldValue, getFieldError, getFieldIsDirty };

export default FormSelectors;
