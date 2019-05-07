import React from 'react';
import { withTranslation } from 'react-i18next';
import Panel from '../../../shared/components/Panel';


const Profile = () => (
  <Panel
    xl={6}
    lg={12}
    md={12}
    title="Lisa Castro"
    subhead="Gesundheitsmanagement"
  >
    NEW ORDERS
  </Panel>
);

export default withTranslation('common')(Profile);
