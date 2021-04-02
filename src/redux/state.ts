import { EventState, initialState as initialEventState } from "redux/events/reducer";
import { UiState, initialState as initialUiState } from "redux/ui/reducer";
import { UserState, initialState as initialUserState } from "redux/user/reducer";

export type StoreState = {
    event: EventState;
    ui: UiState;
    user: UserState;
};

const initialState: StoreState = {
    event: initialEventState,
    ui: initialUiState,
    user: initialUserState
};

export default initialState;
