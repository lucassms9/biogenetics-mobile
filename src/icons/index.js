import React from 'react';

import { SvgXml } from 'react-native-svg';
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

import { iconMoreAccount } from './iconMoreAccount';
import { iconMoreHelp } from './iconMoreHelp';
import { iconMoreLang } from './iconMoreLang';
import { iconMoreSignout } from './iconMoreSignout';
import { iconMoreTerm } from './iconMoreTerm';

import { iconStatusAttendece } from './iconStatusAttendece';
import { iconStatusDiag } from './iconStatusDiag';
import { iconStatusFinishied } from './iconStatusFinishied';
import { iconStatusTriagem } from './iconStatusTriagem';
import { iconDownload } from './iconDownload';

import { iconSearch } from './iconSearch';

const IconSearch = (props) => <SvgXml xml={iconSearch} {...props} />;

const IconBr = (props) => <SvgXml xml={br} {...props} />;
const IconEn = (props) => <SvgXml xml={en} {...props} />;
const IconEs = (props) => <SvgXml xml={es} {...props} />;

const IconDownload = (props) => <SvgXml xml={iconDownload} {...props} />;
const IconStatusAttendece = (props) => (
  <SvgXml xml={iconStatusAttendece} {...props} />
);
const IconStatusDiag = (props) => <SvgXml xml={iconStatusDiag} {...props} />;
const IconStatusFinishied = (props) => (
  <SvgXml xml={iconStatusFinishied} {...props} />
);
const IconStatusTriagem = (props) => (
  <SvgXml xml={iconStatusTriagem} {...props} />
);

const IconMenuLabs = (props) => <SvgXml xml={iconMenuLabs} {...props} />;
const IconMenuServices = (props) => (
  <SvgXml xml={iconMenuServices} {...props} />
);
const IconMenuLaudo = (props) => <SvgXml xml={iconMenuLaudo} {...props} />;
const IconMenuUser = (props) => <SvgXml xml={iconMenuUser} {...props} />;
const IconMenu = (props) => <SvgXml xml={iconMenu} {...props} />;

const IconMobile = (props) => <SvgXml xml={iconMobile} {...props} />;
const IconLocation = (props) => <SvgXml xml={iconLocation} {...props} />;

const IconCovid = (props) => <SvgXml xml={iconCovid} {...props} />;

const IconMoreAccount = (props) => <SvgXml xml={iconMoreAccount} {...props} />;
const IconMoreHelp = (props) => <SvgXml xml={iconMoreHelp} {...props} />;
const IconMoreLang = (props) => <SvgXml xml={iconMoreLang} {...props} />;
const IconMoreSignout = (props) => <SvgXml xml={iconMoreSignout} {...props} />;
const IconMoreTerm = (props) => <SvgXml xml={iconMoreTerm} {...props} />;

export {
  IconSearch,
  IconStatusDiag,
  IconDownload,
  IconStatusFinishied,
  IconStatusTriagem,
  IconStatusAttendece,
  IconMoreTerm,
  IconMoreSignout,
  IconMoreLang,
  IconMoreHelp,
  IconMoreAccount,
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
};
