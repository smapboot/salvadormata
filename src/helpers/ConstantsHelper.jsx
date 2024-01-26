import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faRadiation, faWifi} from "@fortawesome/free-solid-svg-icons";

export const ConstantsHelper = {

  MODALS_CRUD: {
    SUCCESS: {
      icon: (<FontAwesomeIcon className={"iconeModalCrud text-success"} icon={faCircleCheck} bounce size="xl" />),
      color: 'info',
    },
    ERROR: {
      icon: (<FontAwesomeIcon className={"iconeModalCrud text_violet"} icon={faRadiation} fade size="xl" />),
      color: 'dark'
    },
    DANGER: {
      icon: (<FontAwesomeIcon className={"iconeModalCrud text_red"} icon={faRadiation} fade size="xl" />),
      color: 'dark'
    },
    INFO: {
      title: 'Undefined',
      message: 'Undefined',
      icon: (<FontAwesomeIcon className={"iconeModalCrud text-info"} icon={faWifi} size="xl" />),
      color: 'light'
    }
  },

  PK: 'primary_key',

  KEYS_STORAGE: {
    USER: 'user',
    PAP: 'pap',
    SELECTED_PAP: 'selectedPap',
    PAPS: 'paps',
    KANBAN: 'kanban',
    SELECTED_KANBAN: 'selectedKanban',
    KANBANS: 'kanbans',
    STANDUP: 'standup',
    STANDUPS: 'standups',
    RELEASE: 'release',
    VIEWER: 'viewer',
  },

  PACKAGES: {
    APPSRECURSOS: 'appsrecursos',
    API_AWS: 'api_ccma_cat-webapp-base',
    DADES: 'www_ccma_cat-webapp-dades',
    PORTAL: 'www_ccma_cat-webapp-portal',
    TRESCAT_APPTV: 'portal-internet-apptv',
    TRESCAT_TVSMART: 'portal-internet-tvsmart',
    TRESCAT_WEB: 'portal-internet-web',
    APPSMVP: 'appsmvp',
    MEDIA_SERVICE: 'media-service-webapp'
  },

  SELECTOR_PACKAGES: [
    'appsrecursos',
    'api_ccma_cat-webapp-base',
    'www_ccma_cat-webapp-dades',
    'www_ccma_cat-webapp-portal',
    'portal-internet-apptv',
    'portal-internet-tvsmart',
    'portal-internet-web',
    'appsmvp',
    'media-service-webapp'
  ],

  SELECTOR_SPRINTS: {
    2019: [10, 11, 12],
    2020: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    2021: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    2022: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    2023: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    2024: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },

  REPOS: {
    APPSRECURSOS: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/apps/appsrecursos/',
    API_AWS: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/api/api_ccma_cat-webapp-base/',
    DADES: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/ccma/www_ccma_cat-webapp-dades/',
    PORTAL: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/ccma/www_ccma_cat-webapp-portal/',
    TRESCAT_APPTV: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/portal-internet-apptv/',
    TRESCAT_TVSMART: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/portal-internet-tvsmart/',
    TRESCAT_WEB: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/portal-internet-web/',
    APPSMVP: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/apps/appsmvp/',
    MEDIA_SERVICE: 'http://rpmrepo.pub.dtvc.local/cat/ccma/webapp/media/media-service-webapp/'
  },

  PROVIDERS: {
    USER: 'UserProvider',
    PAP: 'PapProvider',
    PAPS: 'PapsProvider',
    KANBAN: 'KanbanProvider',
    STANDUP: 'StandupProvider',
    CRUDMODE: 'CrudModeProvider',
  },

  VIEWERS: {
    GRID: 'grid',
    TABLE: 'table',
  },

  SCOPES: {
    CCMA: 'CCMA',
    TRESCAT: '3Cat Portal-Internet',
    EXTRA_RMP: 'Extra RMP',
    API_AWS: 'API AWS CCMA',
    API_MEDIA: 'API-MEDIA',
    DTY: 'Deliverty',
    APPSRECURSOS: 'Appsrecursos',
    HOTFIX: 'HOTFIX',
  },

  BUNDLES_ROUTES: [
    {
      label: "DASHBOARD",
      href: "/",
      type: "link",
      visible: "for-all"
    },
    {
      label: 'KANBANS',
      href: '/kanbans',
      type: 'link',
      visible: 'for-all'
    },
    {
      label: 'PAPS',
      href: '/paps',
      type: 'link',
      visible: 'for-all'
    },
    {
      label: 'STANDUPS',
      href: '/standups',
      type: 'link',
      visible: 'for-all'
    },
    {
      label: 'IDES',
      href: '/ides',
      type: 'link',
      visible: 'for-admin'
    },
    {
      label: 'USERS',
      href: '/users',
      type: 'link',
      visible: 'for-admin'
    },
  ],

  ALERT_COLOR: {
    OK: "success",
    KO: "danger",
  },

  DB_COLLECTIONS: {
    PAPS: 'paps',
    KANBANS: 'kanbans',
  },

};
