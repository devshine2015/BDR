import React from 'react';
import { withTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import Panel from '../../../shared/components/Panel';

const Consent = () => (
  <Panel md={12} lg={6} xl={3} sm={12} xs={12} title="Einwilligungen">
    Consent
  </Panel>
);

export default withTranslation('common')(Consent);
