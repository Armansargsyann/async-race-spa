import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Winners from '@/pages/Winners';
import Garage from '@/pages/Garage';
import { Layout } from '@/components/ui/Layout';


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