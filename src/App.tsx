import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//
import "assets/styles/global.scss";
import Button, { ButtonSize, ButtonType } from "./components/common/Button";

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
                        <div>
                            <Button title={"Hey"} buttonSize={ButtonSize.BIG} buttonType={ButtonType.PRIMARY} />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
