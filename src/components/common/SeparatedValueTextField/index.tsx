import * as React from "react";
import { ChangeEvent, FC } from "react";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core";
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
        height: "36px",
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
    inputFixed: {
        height: "20px",
        background: "#6C99F1",
        marginRight: "8px"
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
                <span>asd</span>
                <span>asd</span>
                <span>asd</span>
            </div>
            {/*<textarea
                placeholder={placeholder}
                onChange={onValueChangeHandler}
                value={value}
            />*/}

            <span className={classNames(classes.error, { [classes.errorHidden]: !hasError })}>{error}</span>
        </div>
    );
};

export default SeparatedValueTextField;
