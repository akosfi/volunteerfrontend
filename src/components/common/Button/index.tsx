import { FC } from "react";
import { makeStyles, Button as MuiButton, CircularProgress } from "@material-ui/core";
import classnames from "classnames";
import { noop } from "lodash";
import classNames from "classnames";

export enum ButtonType {
    BASIC,
    POSITIVE_ACTION,
    NEGATIVE_ACTION,
    PRIMARY
}

export enum ButtonSize {
    BIG,
    NORMAL
}

const useStyles = makeStyles(() => ({
    root: {
        borderRadius: "5px",
        fontWeight: "bold",
        position: "relative",
        textTransform: "none"
    },
    buttonWrapperNormal: {
        height: "25px",
        fontSize: "12px"
    },
    buttonWrapperBig: {
        height: "36px",
        fontSize: "16px"
    },
    button: {
        height: "100%",
        fontWeight: "bold",
        padding: "0 32px",
        textTransform: "none"
    },
    titleHidden: {
        opacity: 0
    },
    basicType: {
        background: "#E4E4E4",
        color: "#000000",
        "&:hover": {
            backgroundColor: "#E4E4E4"
        }
    },
    positiveType: {
        background: "#5AC66B",
        color: "#ffffff",
        "&:hover": {
            backgroundColor: "#5AC66B"
        }
    },
    negativeType: {
        background: "#F25555",
        color: "#ffffff",
        "&:hover": {
            backgroundColor: "#F25555"
        }
    },
    primaryType: {
        background: "#6C99F1",
        color: "#ffffff",
        "&:hover": {
            backgroundColor: "#6C99F1"
        }
    },
    loadingWrapper: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loading: {
        color: "#ffffff",
        height: "100%"
    }
}));

export type Props = {
    title: string;
    isLoading?: boolean;
    buttonType?: ButtonType;
    buttonSize?: ButtonSize;
    onClick?: (args: any) => void;
};

const Button: FC<Props> = ({
    title,
    isLoading = false,
    buttonSize = ButtonSize.NORMAL,
    buttonType = ButtonType.PRIMARY,
    onClick = noop
}) => {
    const classes = useStyles();

    const buttonTypeMap = {
        [ButtonType.BASIC]: classes.basicType,
        [ButtonType.PRIMARY]: classes.primaryType,
        [ButtonType.POSITIVE_ACTION]: classes.positiveType,
        [ButtonType.NEGATIVE_ACTION]: classes.negativeType
    };

    const buttonSizeMap = {
        [ButtonSize.NORMAL]: classes.buttonWrapperNormal,
        [ButtonSize.BIG]: classes.buttonWrapperBig
    };

    const circularProgressSize = buttonSize === ButtonSize.NORMAL ? 20 : 25;

    return (
        <div className={classNames(buttonSizeMap[buttonSize], classes.root)}>
            <MuiButton onClick={onClick} className={classnames(classes.button, buttonTypeMap[buttonType])}>
                <span className={classnames({ [classes.titleHidden]: isLoading })}>{title}</span>

                {isLoading ? (
                    <div className={classes.loadingWrapper}>
                        <CircularProgress className={classes.loading} size={circularProgressSize} />
                    </div>
                ) : null}
            </MuiButton>
        </div>
    );
};

export default Button;
