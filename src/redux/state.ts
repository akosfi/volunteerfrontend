import { EventState, initialState as initialEventState } from "redux/events/slice";
import { UiState, initialState as initialUiState } from "redux/ui/slice";
import { UserState, initialState as initialUserState } from "redux/user/reducer";
import { AppState, initialState as initialAppState } from "redux/app/slice";
import { FormState, initialState as initialFormState } from "redux/forms/slice";
import { ListState, initialState as initialListState } from "redux/list/slice";

export type StoreState = {
    event: EventState;
    ui: UiState;
    user: UserState;
    app: AppState;
    form: FormState;
    list: ListState;
};

const initialState: StoreState = {
    event: initialEventState,
    ui: initialUiState,
    user: initialUserState,
    app: initialAppState,
    form: initialFormState,
    list: initialListState
};

export default initialState;
