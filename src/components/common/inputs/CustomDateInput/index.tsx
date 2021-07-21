import * as React from "react";
import { ChangeEvent, FC } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { get } from "lodash";
//
import CustomInputWrapper from "components/common/inputs/CustomInputWrapper";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        marginBottom: "22px"
    }
}));

export type Props = {
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    path: string;
};

const CustomDateInput: FC<Props> = ({ path, placeholder = "", label = "", className = "" }) => {
    const classes = useStyles();

    return (
        <CustomInputWrapper
            path={path}
            render={(value, onValueChangeHandler, error = "") => (
                <TextField
                    label={label}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = get(e, "target.value", null);
                        onValueChangeHandler(value);
                    }}
                    variant="outlined"
                    hiddenLabel={!label}
                    error={!!error}
                    helperText={error}
                    className={classNames(classes.root, className)}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    placeholder={placeholder}
                />
            )}
        />
    );
};

export default CustomDateInput;
