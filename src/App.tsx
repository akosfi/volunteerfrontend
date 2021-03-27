import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//
import Header from "components/common/Header";
import EventsPage from "components/pages/events/EventsPage";
import EventPage from "./components/pages/events/EventPage";
//
import "assets/styles/global.scss";

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

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <EventsPage />
                    </Route>
                    <Route path="/events/:id" exact children={<EventPage />} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
