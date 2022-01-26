import React from 'react';
import { primaryColor } from '../constants';


interface Props{
    label: string;
    purple?: string
    style?: React.CSSProperties;
    
}

export default function Title({ label, purple, style }: Props) {
    return (
        <div style={{ maxWidth: 350, width: '100%', ...style }}>
            <h1 style={{ fontSize: 40, fontWeight: '900' }}><span style={{color : primaryColor}}>{purple}</span> {label}</h1>

        </div>
    );
}
