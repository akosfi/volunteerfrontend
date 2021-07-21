import React, { ChangeEvent, FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
//
import { StoreState } from "redux/state";
import FormSelectors from "redux/forms/selectors";
import { formActions } from "redux/forms/slice";

type Render = (value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void, error?: string) => ReactNode;

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

    return <>{render(value, onValueChangeHandler, error)}</>;
};

export default CustomInputWrapper;
