import React from 'react';

import { Button } from './styles';

interface propsText {
    text: string;
};

const ButtonSubmit: React.FC <propsText> = ({text}:propsText) => (
    <Button>{text}</Button>
);

export default ButtonSubmit;