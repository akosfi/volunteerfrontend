import { EventState, initialState as initialEventState } from "redux/events/reducer";
import { UiState, initialState as initialUiState } from "redux/ui/reducer";
import { UserState, initialState as initialUserState } from "redux/user/reducer";
import { AppState, initialState as initialAppState } from "redux/app/reducer";
import { FormState, initialState as initialFormState } from "redux/forms/reducer";

export type StoreState = {
    event: EventState;
    ui: UiState;
    user: UserState;
    app: AppState;
    form: FormState;
};

const initialState: StoreState = {
    event: initialEventState,
    ui: initialUiState,
    user: initialUserState,
    app: initialAppState,
    form: initialFormState
};

export default initialState;
