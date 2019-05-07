import React from 'react';
import { withTranslation } from 'react-i18next';
import Panel from '../../../shared/components/Panel';

const DataLinks = () => (
  <Panel
    md={12}
    lg={6}
    xl={3}
    xs={12}
    title="Datenverknüpfungen"
    subhead="Aktuelle Anfragen"
  >
    Data Links
  </Panel>
);

export default withTranslation('common')(DataLinks);
