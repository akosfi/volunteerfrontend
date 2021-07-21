import * as React from "react";
import { ChangeEvent, FC } from "react";
import { Checkbox, makeStyles, TextField } from "@material-ui/core";
import { get } from "lodash";
import classNames from "classnames";
//
import CustomInputWrapper from "components/common/inputs/CustomInputWrapper";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        marginBottom: "22px"
    },
    container: {
        display: "flex",
        alignItems: "center"
    },
    title: {
        lineHeight: "24px"
    }
}));

export type Props = {
    placeholder?: string;
    error?: string;
    className?: string;
    path: string;
    title?: string;
};

const CustomCheckboxInput: FC<Props> = ({ path, placeholder = "", className = "", title }) => {
    const classes = useStyles();

    const parseStringToBoolean = (value: string) => [true, "true"].includes(value);

    return (
        <CustomInputWrapper
            path={path}
            render={(value, onValueChangeHandler, error = "") => (
                <div className={classes.root}>
                    <div className={classes.container}>
                        <Checkbox
                            value={parseStringToBoolean(value)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                const value = get(e, "target.checked", null);
                                onValueChangeHandler(value);
                            }}
                            className={classNames(className)}
                        />{" "}
                        {!!title && <span className={classes.title}>{title}</span>}
                    </div>
                </div>
            )}
        />
    );
};

export default CustomCheckboxInput;
