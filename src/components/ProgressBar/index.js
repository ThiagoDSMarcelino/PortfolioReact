import React from "react";

import { ProgressBarContainer, Filled, Label } from './styled';

export default function ProgressBar(props) {
    const { bgcolor, completed } = props;

    return (
        <ProgressBarContainer>
          <Filled>
            <Label bgcolor={bgcolor} completed={completed}>{completed}%</Label>
          </Filled>
        </ProgressBarContainer>
    );
}