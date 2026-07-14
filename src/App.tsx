import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/ui/Layout';
import { Garage } from '@/pages/Garage';
import { Winners } from '@/pages/Winners';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Garage />} />
          <Route path="/winners" element={<Winners />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;