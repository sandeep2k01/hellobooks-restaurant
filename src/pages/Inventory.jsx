import { Package, AlertTriangle, XCircle, IndianRupee, TrendingUp, PieChart, Zap, RotateCcw } from 'lucide-react';

const statsData = [
    { title: "Total Items", value: "48", icon: Package, color: "text-primary-500", bg: "bg-primary-50 dark:bg-primary-900/30" },
    { title: "Low Stock", value: "5", icon: AlertTriangle, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/30" },
    { title: "Out of Stock", value: "2", icon: XCircle, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/30" },
    { title: "Total Value", value: "₹1,24,500", icon: IndianRupee, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/30" },
];

const inventoryItems = [
    { name: "Tomatoes", category: "Vegetables", stock: 15, unit: "kg", reorder: 25, status: "low", updated: "2 hours ago" },
    { name: "Chicken Breast", category: "Meat", stock: 8, unit: "kg", reorder: 10, status: "low", updated: "1 hour ago" },
    { name: "Basmati Rice", category: "Grains", stock: 45, unit: "kg", reorder: 20, status: "ok", updated: "3 hours ago" },
    { name: "Paneer", category: "Dairy", stock: 12, unit: "kg", reorder: 8, status: "ok", updated: "1 hour ago" },
    { name: "Onions", category: "Vegetables", stock: 35, unit: "kg", reorder: 15, status: "ok", updated: "4 hours ago" },
    { name: "Cooking Oil", category: "Oils", stock: 2, unit: "L", reorder: 5, status: "critical", updated: "30 min ago" },
    { name: "Cream", category: "Dairy", stock: 18, unit: "L", reorder: 10, status: "ok", updated: "2 hours ago" },
];

const demandForecast = [
    { item: "Butter Chicken", qty: "85 servings" },
    { item: "Biryani", qty: "60 servings" },
    { item: "Naan", qty: "120 pieces" },
];

const categoryBreakdown = [
    { name: "Vegetables", amount: 12450, color: "#f59e0b", percent: 29 },
    { name: "Meat", amount: 18900, color: "#ef4444", percent: 44 },
    { name: "Dairy", amount: 8200, color: "#3b82f6", percent: 19 },
    { name: "Spices", amount: 3400, color: "#10b981", percent: 8 },
];

export default function Inventory() {
    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Inventory Management</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Track ingredients and predict demand with AI</p>
                </div>
                <button className="btn btn-primary">
                    <Package size={18} />
                    Add Item
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="card flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${stat.bg}`}>
                            <stat.icon size={24} className={stat.color} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Inventory Table */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="card">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Inventory Items</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-slate-700">
                                        <th className="pb-3 font-medium">Item Name</th>
                                        <th className="pb-3 font-medium">Category</th>
                                        <th className="pb-3 font-medium text-right">Current Stock</th>
                                        <th className="pb-3 font-medium text-right">Reorder Level</th>
                                        <th className="pb-3 font-medium text-center">Status</th>
                                        <th className="pb-3 font-medium">Last Updated</th>
                                        <th className="pb-3 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inventoryItems.map((item, index) => (
                                        <tr key={index} className="table-row">
                                            <td className="py-3 font-medium text-gray-900 dark:text-white">{item.name}</td>
                                            <td className="py-3 text-gray-600 dark:text-gray-300">{item.category}</td>
                                            <td className={`py-3 text-right font-medium ${item.status === 'critical' ? 'text-red-600 dark:text-red-400' :
                                                    item.status === 'low' ? 'text-orange-600 dark:text-orange-400' :
                                                        'text-gray-900 dark:text-white'
                                                }`}>
                                                {item.stock} {item.unit}
                                            </td>
                                            <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.reorder} {item.unit}</td>
                                            <td className="py-3 text-center">
                                                <span className={`badge ${item.status === 'critical' ? 'badge-danger' :
                                                        item.status === 'low' ? 'badge-warning' :
                                                            'badge-success'
                                                    }`}>
                                                    {item.status === 'critical' ? '🔴 Critical' :
                                                        item.status === 'low' ? '🟠 Low Stock' :
                                                            '🟢 In Stock'}
                                                </span>
                                            </td>
                                            <td className="py-3 text-gray-500 dark:text-gray-400 text-sm">{item.updated}</td>
                                            <td className="py-3 text-right">
                                                {(item.status === 'low' || item.status === 'critical') && (
                                                    <button className="btn btn-primary text-xs py-1.5 px-3">
                                                        <RotateCcw size={14} />
                                                        Reorder
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Alert Banner */}
                    <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg flex items-center gap-3">
                        <AlertTriangle size={20} className="text-orange-500" />
                        <p className="text-sm text-orange-800 dark:text-orange-300">
                            <strong>AI Alert:</strong> Tomatoes price increased by 15% in market. Consider menu price adjustment.
                        </p>
                    </div>
                </div>

                {/* AI Panel */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    {/* AI Demand Forecast */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp size={20} className="text-primary-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">AI Demand Forecast</h3>
                        </div>

                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-4">
                            <h4 className="font-medium text-purple-800 dark:text-purple-300">🚨 Weekend Rush Alert</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">Expected orders: +45% (Sat-Sun)</p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Predicted high-demand:</p>
                            {demandForecast.map((item, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-300">• {item.item}</span>
                                    <span className="font-medium text-gray-900 dark:text-white">{item.qty}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Suggested restock:</p>
                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <p>• Tomatoes: +10 kg</p>
                                <p>• Chicken: +5 kg</p>
                                <p>• Cooking Oil: +3 L</p>
                            </div>
                        </div>
                    </div>

                    {/* Smart Categorization */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-4">
                            <PieChart size={20} className="text-primary-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Smart Categorization</h3>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Auto-categorized expenses</p>

                        <div className="space-y-3">
                            {categoryBreakdown.map((cat, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between text-sm mb-1">
                                        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></span>
                                            {cat.name}
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-white">₹{cat.amount.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{ width: `${cat.percent}%`, backgroundColor: cat.color }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap size={20} className="text-primary-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
                        </div>
                        <div className="space-y-2">
                            <button className="btn btn-primary w-full justify-center">
                                Auto-generate purchase order
                            </button>
                            <button className="btn btn-outline w-full justify-center">
                                View supplier prices
                            </button>
                            <button className="btn btn-outline w-full justify-center">
                                Export inventory report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
