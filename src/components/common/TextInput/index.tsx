import * as React from "react";
import { ChangeEvent, FC } from "react";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import FormSelectors from "redux/forms/selectors";
import { StoreState } from "redux/state";
import FormActions from "redux/forms/actions";

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        flexDirection: "column",
        width: "100%"
    },
    input: {
        height: "32px",
        fontSize: "12px",
        borderRadius: "3px",
        border: "0.6px solid #C4C4C4",
        paddingLeft: "12px",
        "&::placeholder": {
            color: "#989898"
        }
    },
    label: {
        fontSize: "12px",
        color: "#989898"
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
    }
}));

export type Props = {
    type?: "text" | "password";
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    path?: string;
};

const TextInput: FC<Props> = ({
    placeholder = "",
    label = "",
    type = "text",
    className = "",
    //TODO REMOVE
    path = ""
}) => {
    const classes = useStyles();

    const hasLabel = !!label;

    const value = useSelector((state: StoreState) => FormSelectors.getFieldValue(state, path));

    const error = useSelector((state: StoreState) => FormSelectors.getFieldError(state, path));
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = get(e, "target.value", null);

        if (!!newValue) {
            dispatch(FormActions.setFieldValueAction(path, newValue));
        }
    };

    const hasError = !!error;

    return (
        <div className={classes.root}>
            <label className={classNames(classes.label, { [classes.labelHidden]: !hasLabel })}>{label}</label>

            <input
                type={type}
                className={classNames(classes.input, className)}
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={value}
            />

            <span className={classNames(classes.error, { [classes.errorHidden]: !hasError })}>{error}</span>
        </div>
    );
};

export default TextInput;
