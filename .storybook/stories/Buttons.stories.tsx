import * as React from 'react';
import { storiesOf } from "@storybook/react";
import Buttons from "../../src/components/Buttons";

storiesOf('Components/buttons', module)
    .add('Standard', () => (
        <Buttons />
    ))

