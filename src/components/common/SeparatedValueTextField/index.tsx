import * as React from "react";
import { ChangeEvent, FC } from "react";
import { get } from "lodash";
import { makeStyles, TextField } from "@material-ui/core";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
//
import FormSelectors from "redux/forms/selectors";
import { StoreState } from "redux/state";
import { formActions } from "redux/forms/slice";

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        flexDirection: "column",
        width: "100%"
    },
    input: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        fontSize: "14px",
        borderRadius: "3px",
        border: "1px solid #C4C4C4",
        paddingLeft: "12px",
        paddingTop: "9px",
        boxSizing: "border-box",
        "&::placeholder": {
            color: "#989898"
        },
        "&:focus": {
            border: "2px solid #6C99F1",
            paddingLeft: "11px"
        }
    },
    label: {
        fontSize: "14px",
        color: "#989898",
        paddingBottom: "2px"
    },
    labelHidden: {
        display: "none"
    },
    error: {
        fontSize: "12px",
        color: "#F25555",
        padding: "4px 0"
    },
    errorHidden: {
        display: "none"
    },
    fixedValue: {
        height: "20px",
        background: "#6C99F1",
        marginRight: "8px",
        color: "white",
        borderRadius: "30%",
        padding: "6px"
    },
    inputField: {
        minWidth: "60px"
    }
}));

export type Props = {
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    path: string;
};

const SeparatedValueTextField: FC<Props> = ({ path, placeholder = "", label = "", className = "" }) => {
    const classes = useStyles();

    const value = useSelector((state: StoreState) => FormSelectors.getFieldValue(state, path));
    const error = useSelector((state: StoreState) => FormSelectors.getFieldError(state, path));
    const dispatch = useDispatch();

    const onValueChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = get(e, "target.value", null);

        if (!!newValue) {
            dispatch(formActions.setFieldValue({ path, value: newValue }));
        }
    };

    const hasError = !!error;
    const hasLabel = !!label;

    return (
        <div className={classes.root}>
            <label className={classNames(classes.label, { [classes.labelHidden]: !hasLabel })}>{label}</label>

            <div className={classNames(classes.input, className)}>
                {[
                    "akos@akos.com",
                    "akos2@akos.com",
                    "akos3@akos.com",
                    "akos@akos.com",
                    "akos2@akos.com",
                    "akos3@akos.com"
                ].map(value => (
                    <span className={classes.fixedValue}>{value}</span>
                ))}
                <TextField className={classes.inputField} fullWidth />
            </div>

            <span className={classNames(classes.error, { [classes.errorHidden]: !hasError })}>{error}</span>
        </div>
    );
};

export default SeparatedValueTextField;
