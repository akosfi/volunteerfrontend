import * as React from "react";
import { FC, memo } from "react";
import EventEdit from "components/events/EventEdit";

const EditTab: FC = () => <EventEdit />;

export default memo(EditTab);
