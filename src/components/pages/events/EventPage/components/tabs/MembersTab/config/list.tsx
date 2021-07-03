import React from "react";
import { memo } from "react";
import { map, keys } from "lodash";
import { useDispatch, useSelector } from "react-redux";
//
import { Member } from "redux/events/types";
import { Row } from "redux/list/types";
import TextCell from "components/list/List/components/ListContent/components/Row/components/TextCell";
import css from "components/pages/events/EventPage/components/tabs/MembersTab/style.module.scss";
import ImageWithCheckbox from "components/list/List/components/ListContent/components/Row/components/ImageWithCheckbox";
import { listActions } from "redux/list/slice";
import { ListConfig } from "components/list/List/types";
import TextHeaderCell from "components/list/List/components/ListHeader/components/TextHeaderCell";
import ListSelectors from "redux/list/selectors";
import CheckboxHeaderCell from "components/list/List/components/ListHeader/components/CheckboxHeaderCell";
//

enum CellKey {
    AVATAR_WITH_CHECKBOX = "avatarWithCheckbox",
    NAME = "name",
    EMAIL = "email",
    PHONE = "phone"
}

const createMemberListConfig = (): ListConfig => {
    return {
        rawDataToRowDataTransformer: (members: Member[]): Row[] =>
            map(
                members,
                (member): Row => ({
                    id: member.id,
                    cells: {
                        [CellKey.AVATAR_WITH_CHECKBOX]: {
                            data:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9upf-m7C14gFlLwqPW8shudhU5u-CWfFxng&usqp=CAU"
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
                        rowId={rowId}
                        className={css["avatar-with-checkbox-cell"]}
                    />
                );
            }),
            [CellKey.NAME]: memo(({ value }) => <TextCell value={value} className={css["name-cell"]} />),
            [CellKey.EMAIL]: memo(({ value }) => <TextCell value={value} className={css["email-cell"]} />),
            [CellKey.PHONE]: memo(({ value }) => <TextCell value={value} className={css["phone-cell"]} />)
        },
        headerComponents: {
            [CellKey.AVATAR_WITH_CHECKBOX]: memo(() => {
                const selectedRowIds = useSelector(ListSelectors.getSelectedRowIds);
                const rows = useSelector(ListSelectors.getRows);

                const dispatch = useDispatch();

                const isSelected = selectedRowIds.length > 0;
                const indeterminateChecked = selectedRowIds.length !== rows.length;

                const toggleIsSelected = () => {
                    if (isSelected && indeterminateChecked) {
                        dispatch(listActions.setSelectedRowIds({ selectedRowIds: map(rows, ({ id }) => id) }));
                    } else if (isSelected && !indeterminateChecked) {
                        dispatch(listActions.setSelectedRowIds({ selectedRowIds: [] }));
                    } else {
                        dispatch(listActions.setSelectedRowIds({ selectedRowIds: map(rows, ({ id }) => id) }));
                    }
                };

                return (
                    <CheckboxHeaderCell
                        isSelected={isSelected}
                        indeterminateChecked={indeterminateChecked}
                        className={css["avatar-with-checkbox-cell"]}
                        toggleIsSelected={toggleIsSelected}
                    />
                );
            }),
            [CellKey.NAME]: memo(() => <TextHeaderCell value={"Name"} className={css["name-cell"]} />),
            [CellKey.EMAIL]: memo(() => <TextHeaderCell value={"Email cím"} className={css["email-cell"]} />),
            [CellKey.PHONE]: memo(() => <TextHeaderCell value={"Telefonszám"} className={css["phone-cell"]} />)
        }
    };
};

export default createMemberListConfig;
