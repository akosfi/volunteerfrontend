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
        padding: "0 32px"
    },
    normalSize: {
        height: "25px",
        fontSize: "12px"
    },
    bigSize: {
        height: "36px",
        fontSize: "16px"
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
        color: "#000000",
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
        display: "inline-block",
        top: "50%",
        left: "50%",
        transform: "translate(50%, 50%)"
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
        [ButtonSize.NORMAL]: classes.normalSize,
        [ButtonSize.BIG]: classes.bigSize
    };

    return (
        <MuiButton
            onClick={onClick}
            className={classnames(classes.root, buttonSizeMap[buttonSize], buttonTypeMap[buttonType])}
        >
            <span className={classnames({ [classes.titleHidden]: isLoading })}>{title}</span>

            {isLoading ? <div className={classes.loadingWrapper}>X</div> : null}
        </MuiButton>
    );
};

export default Button;
