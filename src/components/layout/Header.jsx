import { Search, Bell, Sun, Moon, ChevronDown, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-60 right-0 h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 z-40">
            {/* Left - Menu button (mobile) */}
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 lg:hidden">
                <Menu size={20} className="text-gray-600 dark:text-gray-400" />
            </button>

            {/* Center - Search */}
            <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search transactions, items, or reports..."
                        className="w-full pl-10 pr-16 py-2.5 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 dark:text-gray-200 placeholder-gray-400"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-400 bg-gray-100 dark:bg-slate-600 px-1.5 py-0.5 rounded">
                        <span>⌘</span>
                        <span>K</span>
                    </div>
                </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {isDark ? (
                        <Sun size={20} className="text-yellow-500" />
                    ) : (
                        <Moon size={20} className="text-gray-600" />
                    )}
                </button>

                {/* Notifications */}
                <button className="relative p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                    <Bell size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                </button>

                {/* User Profile */}
                <button className="flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">SANDEEP</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Owner</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium text-sm">
                        S
                    </div>
                    <ChevronDown size={16} className="text-gray-400" />
                </button>
            </div>
        </header>
    );
}
