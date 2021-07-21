import { ChangeEvent, FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
//
import { StoreState } from "redux/state";
import FormSelectors from "redux/forms/selectors";
import { formActions } from "redux/forms/slice";
import React from "react";

type Render = (value: string, onChange: Function, error?: string) => ReactNode;

type Props = {
    path: string;
    render: Render;
};

const CustomInputWrapper: FC<Props> = ({ path, render }) => {
    const value = useSelector((state: StoreState) => FormSelectors.getFieldValue(state, path));
    const error = useSelector((state: StoreState) => FormSelectors.getFieldError(state, path));
    const dispatch = useDispatch();

    const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = get(e, "target.value", null);

        if (!!newValue) {
            dispatch(formActions.setFieldValue({ path, value: newValue }));
        }
    };

    const renderedInput = render(value, onValueChangeHandler, error);

    return <div>{renderedInput}</div>;
};

export default CustomInputWrapper;
