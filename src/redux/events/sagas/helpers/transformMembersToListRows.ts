import { map } from "lodash";
//
import { Member } from "redux/events/types";
import { CellType, Row } from "redux/list/types";

const transformMembersToListRows = (members: Member[]): Row[] =>
    map(
        members,
        (member): Row => ({
            id: member.id,
            cells: [
                { type: CellType.IMAGE_WITH_CHECKBOX, data: "tempurl" },
                { type: CellType.TEXT, data: member.name },
                { type: CellType.TEXT, data: member.email },
                { type: CellType.TEXT, data: member.phoneNumber }
            ]
        })
    );

export default transformMembersToListRows;
