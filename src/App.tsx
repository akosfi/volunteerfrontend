import React, { FC, ReactNode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//
import "assets/styles/global.scss";
import Button, { ButtonSize, ButtonType } from "./components/common/Button";
import EventList from "./components/events/EventList";
import { CardActions } from "@material-ui/core";
import Badge from "./components/common/Badge";
import PageHeader from "./components/common/PageHeader";
import PageHeaderTab from "./components/common/PageHeader/components/PageHeaderTab";
import Header from "./components/common/Header";

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
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <PageHeader title="Események">
                            {{
                                upperAction: <></>,
                                actionButtons: (
                                    <>
                                        <Button
                                            title="Esemény felvétel"
                                            buttonType={ButtonType.POSITIVE_ACTION}
                                            buttonSize={ButtonSize.BIG}
                                        />
                                    </>
                                ),
                                tabButtons: (
                                    <>
                                        <PageHeaderTab title="Összes" isActive />
                                        <PageHeaderTab title="Aktív" />{" "}
                                    </>
                                )
                            }}
                        </PageHeader>
                        <EventList eventIds={[2, 3, 4]} />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
