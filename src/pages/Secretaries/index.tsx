import { Outlet } from 'react-router-dom';

import PageContent from '~/common/components/PageContent';
import Content from '~/common/containers/ContentContainer';

const SecretaryPage = () => {
  // pre-fetch all secretaries here

  return (
    <Content>
      <PageContent>
        <Outlet />
      </PageContent>
    </Content>
  );
};

export default SecretaryPage;
