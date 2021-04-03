import * as React from "react";
import { FC, memo } from "react";
import EventDetails from "components/events/EventDetails";

const DetailsTab: FC = () => <EventDetails />;

export default memo(DetailsTab);
