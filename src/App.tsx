import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [projects, setProjects] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch projects and columns at the same time
        const [projRes, colRes] = await Promise.all([
          fetch('http://localhost:4000/projects'),
          fetch('http://localhost:4000/columns')
        ]);

        setProjects(await projRes.json());
        setColumns(await colRes.json());
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>Chargement...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header title="TaskFlow" onMenuClick={() => setSidebarOpen(p => !p)} />
      
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar projects={projects} isOpen={sidebarOpen} />
        <MainContent columns={columns} />
      </div>
    </div>
  );
}

export default App;