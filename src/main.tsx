import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteFC } from './site-fc';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteFC />}>
          <Route path='/' element={<App />} />
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
