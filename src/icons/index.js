import React from 'react';

import { iconBr as br } from './iconBr';
import { iconEn as en } from './iconEn';
import { iconEs as es } from './iconEs';

import { iconMenuLabs } from './iconMenuLabs';
import { iconMenuServices } from './iconMenuServices';
import { iconMenuLaudo } from './iconMenuLaudo';
import { iconMenuUser } from './iconMenuUser';
import { iconMenu } from './iconMenu';

import { iconLocation } from './iconLocation';
import { iconMobile } from './iconMobile';

import { iconCovid } from './iconCovid';

import { SvgXml } from 'react-native-svg';

const IconBr = (props) => <SvgXml width="35" height="35" xml={br} {...props} />
const IconEn = (props) => <SvgXml width="35" height="35" xml={en} {...props} />
const IconEs = (props) => <SvgXml width="35" height="35" xml={es} {...props} />

const IconMenuLabs = (props) => <SvgXml xml={iconMenuLabs} {...props} />
const IconMenuServices = (props) => <SvgXml xml={iconMenuServices} {...props} />
const IconMenuLaudo = (props) => <SvgXml xml={iconMenuLaudo} {...props} />
const IconMenuUser = (props) => <SvgXml xml={iconMenuUser} {...props} />
const IconMenu = (props) => <SvgXml xml={iconMenu} {...props} />


const IconMobile = (props) => <SvgXml xml={iconMobile} {...props} />
const IconLocation = (props) => <SvgXml xml={iconLocation} {...props} />

const IconCovid = (props) => <SvgXml xml={iconCovid} {...props} />

export {
  IconCovid,
  IconMobile,
  IconLocation,
  IconBr,
  IconEn,
  IconEs,
  IconMenu,
  IconMenuUser,
  IconMenuLaudo,
  IconMenuServices,
  IconMenuLabs,
}
