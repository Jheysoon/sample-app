import { Outlet } from 'react-router-dom';

import PageContent from '~/common/components/PageContent';
import Content from '~/common/containers/ContentContainer';

const ClinicPage = () => {
  // pre-fetch all clinics here

  return (
    <Content>
      <PageContent>
        <Outlet />
      </PageContent>
    </Content>
  );
};

export default ClinicPage;
