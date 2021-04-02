export enum AppActionConstants {
    INITIALIZE_APP = "APP/INITIALIZE_APP",

    SET_IS_APP_INITIALIZED = "APP/SET_IS_APP_INITIALIZED"
}

const initializeAppAction = () => ({
    type: AppActionConstants.INITIALIZE_APP
});
const setIsAppInitialized = (isAppInitialized: boolean) => ({
    type: AppActionConstants.SET_IS_APP_INITIALIZED,
    payload: { isAppInitialized }
});

const AppActions = {
    initializeAppAction,
    setIsAppInitialized
};

export default AppActions;
