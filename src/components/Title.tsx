import React from 'react';

interface Props{
    label: string;
}

export default function Title({ label }: Props) {
    return (
        <div style={{ maxWidth: 350 }} className='w-full'>
            <h1 style={{ fontSize: 40, fontWeight: '900' }}>{label}</h1>

        </div>
    );
}
