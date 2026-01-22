import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Building2,
    ShoppingCart as CartIcon,
    UtensilsCrossed,
    Package,
    Users,
    ShoppingCart,
    BarChart3,
    Settings,
    Bot,
    Grid2X2
} from 'lucide-react';

const menuItems = [
    { name: 'Overview', path: '/', icon: Grid2X2 },
    { name: 'Banking', path: '/banking', icon: Building2 },
    { name: 'Sales', path: '/sales', icon: CartIcon },
    { name: 'Kitchen/Menu', path: '/menu', icon: UtensilsCrossed },
    { name: 'Inventory', path: '/inventory', icon: Package },
    { name: 'Staff', path: '/staff', icon: Users },
    { name: 'Purchases', path: '/purchases', icon: ShoppingCart },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'AI Assistant', path: '/ai-assistant', icon: Bot },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-full w-60 bg-slate-900 flex flex-col z-50">
            {/* Logo - Dark Style */}
            <div className="p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">H</span>
                    </div>
                    <div className="flex items-baseline">
                        <span className="font-bold text-xl text-white">HelloBooks</span>
                        <span className="text-blue-400 font-semibold">.ai</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 overflow-y-auto">
                <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-blue-500 text-white'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`
                                }
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700">
                <p className="text-xs text-slate-500 text-center">
                    Restaurant Edition v1.0
                </p>
            </div>
        </aside>
    );
}
