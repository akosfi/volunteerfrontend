import { EventState, initialState as initialEventState } from "redux/events/reducer";
import { UiState, initialState as initialUiState } from "redux/ui/reducer";

export type StoreState = {
    event: EventState;
    ui: UiState;
};

const initialState: StoreState = {
    event: initialEventState,
    ui: initialUiState
};

export default initialState;
