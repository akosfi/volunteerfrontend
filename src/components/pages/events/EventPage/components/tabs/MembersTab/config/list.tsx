import React from "react";
import { FC, memo } from "react";
import { map } from "lodash";
//
import { Member } from "redux/events/types";
import { Row } from "redux/list/types";
import TextCell from "components/list/List/components/ListContent/components/Row/components/TextCell";
//
import css from "components/pages/events/EventPage/components/tabs/MembersTab/style.module.scss";

enum CellKey {
    NAME = "name",
    EMAIL = "email",
    PHONE = "phone"
}

export type RawDataToRowDataTransformer = (...data: any) => Row[];

//TODO MOVE THIS ELSEWHERE
export type ListConfig = {
    rawDataToRowDataTransformer: RawDataToRowDataTransformer;
    components: { [cellKey: string]: FC<{ value?: any }> };
};

const createMemberListConfig = (): ListConfig => {
    return {
        rawDataToRowDataTransformer: (members: Member[]): Row[] =>
            map(
                members,
                (member): Row => ({
                    id: member.id,
                    cells: {
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
            [CellKey.NAME]: memo(({ value }) => <TextCell value={value} className={css["name-cell"]} />),
            [CellKey.EMAIL]: memo(({ value }) => <TextCell value={value} className={css["email-cell"]} />),
            [CellKey.PHONE]: memo(({ value }) => <TextCell value={value} className={css["phone-cell"]} />)
        }
    };
};

export default createMemberListConfig;
