import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        flexDirection: "column"
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
    required?: boolean;
    label?: string;
    placeholder?: string;
    error?: string;
};

const TextInput: FC<Props> = ({ name, placeholder = "", required = false, label = "", error = "" }) => {
    const classes = useStyles();
    const { register } = useFormContext();

    const hasLabel = !!label;
    const hasError = !!error;

    return (
        <div className={classes.root}>
            <label className={classNames(classes.label, { [classes.labelHidden]: !hasLabel })} htmlFor={name}>
                {label}
            </label>

            <input name={name} className={classes.input} type="text" placeholder={placeholder} ref={register} />

            <span className={classNames(classes.error, { [classes.errorHidden]: !hasError })}>{error}</span>
        </div>
    );
};

export default TextInput;
