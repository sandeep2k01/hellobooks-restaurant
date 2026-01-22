import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import MenuCosting from './pages/MenuCosting';
import Inventory from './pages/Inventory';
import AIAssistant from './pages/AIAssistant';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Fully Designed Pages */}
            <Route index element={<Dashboard />} />
            <Route path="menu" element={<MenuCosting />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="ai-assistant" element={<AIAssistant />} />

            {/* Placeholder Pages - Same as Base MVP */}
            <Route path="banking" element={
              <ComingSoon
                title="Banking"
                description="Bank reconciliation and transaction management. This feature remains the same as the base MVP as it's a universal banking feature."
              />
            } />
            <Route path="sales" element={
              <ComingSoon
                title="Sales & Invoicing"
                description="Proposed enhancements: Add table number, order type (Dine-in/Takeaway/Delivery), and waiter assignment for restaurant-specific sales tracking."
              />
            } />
            <Route path="staff" element={
              <ComingSoon
                title="Staff Management"
                description="Proposed enhancements: Add shift scheduling, tips tracking, and performance metrics specifically designed for restaurant staff."
              />
            } />
            <Route path="purchases" element={
              <ComingSoon
                title="Purchases"
                description="Vendor bill management and purchase orders. This feature remains similar to the base MVP with minor enhancements for ingredient categorization."
              />
            } />
            <Route path="reports" element={
              <ComingSoon
                title="Reports"
                description="Financial reports are now accessible via the AI Assistant for natural language queries and instant PDF generation. Visit AI Assistant for smart reporting!"
              />
            } />
            <Route path="settings" element={
              <ComingSoon
                title="Settings"
                description="Application settings and configuration. This feature remains the same as the base MVP as it's a universal configuration feature."
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
