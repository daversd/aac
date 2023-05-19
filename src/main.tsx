import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { SearchApp } from './search-app/search-app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteFC } from './site-fc';
import { SobreApp } from './sobre/sobre';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteFC />}>
          <Route path='/' element={<SearchApp />} />
          <Route path='/sobre' element={<SobreApp />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Ops, não tem nada aqui 🤷</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
