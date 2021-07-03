import { Row } from "redux/list/types";
import { FC } from "react";

export type RawDataToRowDataTransformer = (...data: any) => Row[];

export type ListConfig = {
    rawDataToRowDataTransformer: RawDataToRowDataTransformer;
    components: { [cellKey: string]: FC<{ value?: any; rowId: number }> };
    headerComponents: { [cellKey: string]: FC };
};
