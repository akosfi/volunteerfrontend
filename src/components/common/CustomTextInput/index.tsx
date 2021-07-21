import * as React from "react";
import { ChangeEvent, FC } from "react";
import { get } from "lodash";
import { makeStyles, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
//
import FormSelectors from "redux/forms/selectors";
import { StoreState } from "redux/state";
import { formActions } from "redux/forms/slice";
import CustomInputWrapper from "../inputs/CustomInputWrapper";

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
