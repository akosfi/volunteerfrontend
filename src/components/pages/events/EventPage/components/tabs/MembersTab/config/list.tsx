import React from "react";
import { FC, memo } from "react";
import { map } from "lodash";
//
import { Member } from "redux/events/types";
import { Row } from "redux/list/types";
import TextCell from "components/list/List/components/ListContent/components/Row/components/TextCell";
//
import css from "components/pages/events/EventPage/components/tabs/MembersTab/style.module.scss";
import ImageWithCheckbox from "../../../../../../../list/List/components/ListContent/components/Row/components/ImageWithCheckbox";
import { listActions } from "../../../../../../../../redux/list/slice";
import { useDispatch, useSelector } from "react-redux";
import ListSelectors from "../../../../../../../../redux/list/selectors";

enum CellKey {
    AVATAR_WITH_CHECKBOX = "avatarWithCheckbox",
    NAME = "name",
    EMAIL = "email",
    PHONE = "phone"
}

export type RawDataToRowDataTransformer = (...data: any) => Row[];

//TODO MOVE THIS ELSEWHERE
export type ListConfig = {
    rawDataToRowDataTransformer: RawDataToRowDataTransformer;
    components: { [cellKey: string]: FC<{ value?: any; rowId: number }> };
};

const createMemberListConfig = (): ListConfig => {
    return {
        rawDataToRowDataTransformer: (members: Member[]): Row[] =>
            map(
                members,
                (member): Row => ({
                    id: member.id,
                    cells: {
                        [CellKey.AVATAR_WITH_CHECKBOX]: {
                            data: "temp_url"
                        },
                        [CellKey.NAME]: {
                            data: member.name
                        },
                        [CellKey.EMAIL]: {
                            data: member.email
                        },
                        [CellKey.PHONE]: {
                            data: member.phoneNumber
                        }
                    }
                })
            ),
        components: {
            [CellKey.AVATAR_WITH_CHECKBOX]: memo(({ value, rowId }) => {
                const isSelected = useSelector(ListSelectors.getIsRowSelected(rowId));
                const dispatch = useDispatch();

                const createSetIsSelected = (rowId: number) => () =>
                    isSelected
                        ? dispatch(listActions.setDeselectedRowId({ selectedRowId: rowId }))
                        : dispatch(listActions.setSelectedRowId({ selectedRowId: rowId }));

                return (
                    <ImageWithCheckbox
                        value={value}
                        isSelected={isSelected}
                        toggleIsSelected={createSetIsSelected(rowId)}
                    />
                );
            }),
            [CellKey.NAME]: memo(({ value }) => <TextCell value={value} className={css["name-cell"]} />),
            [CellKey.EMAIL]: memo(({ value }) => <TextCell value={value} className={css["email-cell"]} />),
            [CellKey.PHONE]: memo(({ value }) => <TextCell value={value} className={css["phone-cell"]} />)
        }
    };
};

export default createMemberListConfig;
