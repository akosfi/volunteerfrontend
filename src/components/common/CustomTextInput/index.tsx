import * as React from "react";
import { FC } from "react";
import { makeStyles, TextField } from "@material-ui/core";
//
import CustomInputWrapper from "components/common/inputs/CustomInputWrapper";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        marginBottom: "22px"
    }
}));

export type Props = {
    type?: "text" | "password";
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    path: string;
};

const CustomTextInput: FC<Props> = ({ path, placeholder = "", label = "", type = "text", className = "" }) => {
    const classes = useStyles();

    return (
        <CustomInputWrapper
            path={path}
            render={(value, onValueChangeHandler, error = "") => (
                <TextField
                    label={label}
                    value={value}
                    onChange={onValueChangeHandler}
                    variant="outlined"
                    hiddenLabel={!label}
                    error={!!error}
                    helperText={error}
                    className={classes.root}
                    type={type}
                    InputLabelProps={{ shrink: true }}
                    placeholder={placeholder}
                />
            )}
        />
    );
};

export default CustomTextInput;
