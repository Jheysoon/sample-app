import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ClinicPage from '~/pages/Clinics';
import DashboardPage from '~/pages/Dashboard';
import LoginPage from '~/pages/Login';

import Secretaries from '~/pages/Secretaries';
import SecretaryDetail from '~/pages/Secretaries/Detail';
import SecretaryList from '~/pages/Secretaries/List';

import ClinicsList from './pages/Clinics/List';
import ClinicCreate from './pages/Clinics/Create';

import Content from '~/common/containers/ContentContainer';

function App() {
  // wrap component the browser router and show hide the sidebar
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <AppWrapper>
              <DashboardPage />
            </AppWrapper>
          }
        />

        <Route path="/Secretaries" element={<Secretaries />}>
          <Route index element={<SecretaryList />} />
          <Route path=":id" element={<SecretaryDetail />} />
        </Route>

        <Route path="/Clinics" element={<ClinicPage />}>
          <Route index element={<ClinicsList />} />
          <Route path="create" element={<ClinicCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const AppWrapper = ({ children }: any) => {
  return <Content>{children}</Content>;
};

export default App;
