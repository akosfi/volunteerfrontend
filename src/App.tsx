import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
//
import "assets/styles/global.scss";
import PageHeader from "./components/common/PageHeader";
import PageHeaderTab from "./components/common/PageHeader/components/PageHeaderTab";

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
                        <PageHeader title="Események">
                            {{
                                upperAction: <Button color="primary">{"< "}Vissza</Button>,
                                actionButtons: (
                                    <>
                                        <Button color="primary">Hey</Button>
                                        <Button color="primary">Hey 2</Button>
                                        <Button color="primary">Hey 3</Button>
                                    </>
                                ),
                                tabButtons: (
                                    <>
                                        <PageHeaderTab title="Összes" isActive />
                                        <PageHeaderTab title="Szerkesztés" />
                                    </>
                                )
                            }}
                        </PageHeader>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
