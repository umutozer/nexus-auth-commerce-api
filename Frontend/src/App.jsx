import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Products from './pages/Products';
import { LayoutDashboard, ShoppingBag, Users, LogOut } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const { logout } = useAuth();
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-darkBg text-white p-6">
        <h2 className="text-xl font-bold mb-10 text-primary">NEXUS PANEL</h2>
        <nav className="space-y-4">
          <Link to="/" className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/products" className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors">
            <ShoppingBag size={20} /> Ürünler
          </Link>
          <Link to="/users" className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors">
            <Users size={20} /> Kullanıcılar
          </Link>
          <button onClick={logout} className="flex items-center gap-3 p-3 w-full text-left text-accent hover:bg-secondary rounded-lg transition-colors mt-auto">
            <LogOut size={20} /> Çıkış Yap
          </button>
        </nav>
      </aside>
      <main className="flex-1 bg-background">
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <DashboardLayout>
                <div className="p-8"><h1 className="text-3xl font-bold">Hoş Geldiniz</h1><p className="mt-4">Sistem durumunu buradan takip edebilirsiniz.</p></div>
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/products" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Products />
              </DashboardLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;