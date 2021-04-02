import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

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
    name: string;
    type?: "text" | "password";
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
};

const TextInput: FC<Props> = ({ name, placeholder = "", label = "", error = "", type = "text", className = "" }) => {
    const classes = useStyles();
    const { register } = useFormContext();

    const hasLabel = !!label;
    const hasError = !!error;

    return (
        <div className={classes.root}>
            <label className={classNames(classes.label, { [classes.labelHidden]: !hasLabel })} htmlFor={name}>
                {label}
            </label>

            <input
                type={type}
                name={name}
                className={classNames(classes.input, className)}
                placeholder={placeholder}
                ref={register}
            />

            <span className={classNames(classes.error, { [classes.errorHidden]: !hasError })}>{error}</span>
        </div>
    );
};

export default TextInput;
