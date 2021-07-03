import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
//
import Header from "components/common/Header";
import EventsPage from "components/pages/events/EventsPage";
import EventPage from "components/pages/events/EventPage";
import SnackbarQueueHandler from "components/common/SnackbarQueueHandler";
import LoginPage from "components/pages/LoginPage";
import RegistrationPage from "components/pages/RegistrationPage";
import { appActions } from "redux/app/slice";
import ComingSoonPage from "components/pages/ComingSoonPage";
import NewEventPage from "components/pages/events/NewEventPage";
import SystemErrorAlert from "components/common/SystemErrorAlert";
//
import "assets/styles/global.scss";
import ProfilePage from "./components/pages/ProfilePage";

const App: FC = () => {
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 900,
                md: 1024,
                lg: 1280,
                xl: 1920
            }
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appActions.setIsAppInitialized({ isAppInitialized: true }));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <SnackbarQueueHandler />
                <Header />
                <SystemErrorAlert />
                <Switch>
                    <Route path="/" exact children={<EventsPage />} />
                    <Route path="/events/new" exact children={<NewEventPage />} />
                    <Route path="/events/:id" exact children={<EventPage />} />
                    <Route path="/login" exact children={<LoginPage />} />
                    <Route path="/register" exact children={<RegistrationPage />} />
                    <Route path="/members" exact children={<ComingSoonPage />} />
                    <Route path="/profile" exact children={<ProfilePage />} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
