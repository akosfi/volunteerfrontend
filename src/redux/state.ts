import { EventState, initialState as initialEventState } from "./events/reducer";

export type StoreState = {
    event: EventState;
};

const initialState: StoreState = {
    event: initialEventState
};

export default initialState;
