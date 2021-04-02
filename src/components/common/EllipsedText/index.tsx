import * as React from "react";
import { FC } from "react";

type Props = {
    text: string;
    maxCharacters?: number;
};

const EllipsedText: FC<Props> = ({ text, maxCharacters = 20 }) => {
    if (text.length > maxCharacters) {
        const subText = text.substring(0, maxCharacters);
        return <span>{subText}...</span>;
    }
    return <span>{text}</span>;
};

export default EllipsedText;
