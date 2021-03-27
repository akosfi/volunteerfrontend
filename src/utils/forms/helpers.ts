import { FieldErrors } from "react-hook-form/dist/types/errors";
import { get } from "lodash";

export const createFieldErrorFromHookFromError = (field: string, errors: FieldErrors, message: string): string => {
    const hasError = !!get(errors, `${field}`, "");
    return hasError ? message : "";
};
