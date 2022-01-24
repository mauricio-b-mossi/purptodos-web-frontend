import React from 'react';
import { primaryColor } from '../constants';
import { UrlObject } from 'url';
import {Link as LinkR} from 'react-router-dom'


type Url = string | UrlObject
interface Props {
    label: string,
    href: string;
    passHref?: boolean;
    onPress ?: () => void   
}

export default function Link({label, href, passHref, ...props} : Props) {
    return (
      <div {...props}>
        <LinkR to={href}>
            <div style={{ color: primaryColor, cursor: "pointer" }}>
              {label}
            </div>
        </LinkR>
      </div>
    );
}
