import {
    TrendingUp,
    Percent,
    ShoppingBag,
    Wallet,
    AlertTriangle,
    TrendingDown,
    Lightbulb,
    Medal
} from 'lucide-react';

// Mock data
const kpiData = [
    { title: "Today's Sales", value: "₹45,230", change: "+14.2%", icon: Wallet, gradient: "gradient-blue" },
    { title: "Food Cost %", value: "32%", change: "Optimal", icon: Percent, gradient: "gradient-green", isOptimal: true },
    { title: "Orders Today", value: "127", change: "+8%", icon: ShoppingBag, gradient: "gradient-purple" },
    { title: "Net Profit", value: "₹12,450", change: "+5.1%", icon: TrendingUp, gradient: "gradient-orange" },
];

const orderDistribution = [
    { type: "Dine-in", value: 46, color: "#3b82f6" },
    { type: "Takeaway", value: 35, color: "#8b5cf6" },
    { type: "Delivery", value: 19, color: "#f59e0b" },
];

const revenueByShift = [
    { shift: "Morning", time: "6AM-12PM", value: 8500, height: "38%" },
    { shift: "Lunch", time: "12PM-5PM", value: 22000, height: "100%" },
    { shift: "Dinner", time: "5PM-11PM", value: 14730, height: "67%" },
];

const topDishes = [
    { rank: 1, name: "Butter Chicken", qty: 85, revenue: 18700, trend: "up" },
    { rank: 2, name: "Paneer Tikka Masala", qty: 72, revenue: 14400, trend: "up" },
    { rank: 3, name: "Biryani Bowl", qty: 60, revenue: 12000, trend: "up" },
    { rank: 4, name: "Garlic Naan", qty: 95, revenue: 5700, trend: "up" },
    { rank: 5, name: "Dal Makhani", qty: 50, revenue: 8500, trend: "up" },
];

const aiInsights = [
    {
        type: "alert",
        title: "Low Stock Alert: Tomatoes",
        desc: "Current stock below reorder level. Restock soon.",
        action: "Order Now",
        icon: AlertTriangle
    },
    {
        type: "prediction",
        title: "Predict Busy Saturday",
        desc: "Expected +40% orders this weekend based on trends.",
        action: "View Details",
        icon: TrendingUp
    },
    {
        type: "recommendation",
        title: "Menu Optimization",
        desc: "Increase Butter Chicken price by ₹20 for better margin.",
        action: "Apply",
        icon: Lightbulb
    },
];

export default function Dashboard() {
    const now = new Date();
    const greeting = now.getHours() < 12 ? "Good Morning" : now.getHours() < 17 ? "Good Afternoon" : "Good Evening";
    const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {greeting}, Sandeep! 👋
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Here's what's happening with your restaurant today
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{dateStr}</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Main Content */}
                <div className="col-span-12 lg:col-span-9 space-y-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {kpiData.map((kpi, index) => (
                            <div key={index} className={`card ${kpi.gradient} !border-0`}>
                                <div className="flex items-start justify-between mb-3">
                                    <div className="p-2 rounded-lg bg-white/50 dark:bg-black/20">
                                        <kpi.icon size={20} className="text-gray-700 dark:text-gray-200" />
                                    </div>
                                    <span className={`text-sm font-medium ${kpi.isOptimal ? 'text-green-600 dark:text-green-400' : 'text-green-600 dark:text-green-400'}`}>
                                        {kpi.change} {!kpi.isOptimal && '↗'}
                                        {kpi.isOptimal && '✓'}
                                    </span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{kpi.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Order Distribution */}
                        <div className="card">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Order Distribution</h3>
                            <div className="flex items-center justify-center gap-8">
                                {/* Donut Chart Placeholder */}
                                <div className="relative w-40 h-40">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" className="dark:stroke-slate-700" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="115.2 251.2" strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="12" strokeDasharray="87.92 251.2" strokeDashoffset="-115.2" strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="47.73 251.2" strokeDashoffset="-203.12" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">127</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">Orders</span>
                                    </div>
                                </div>
                                {/* Legend */}
                                <div className="space-y-3">
                                    {orderDistribution.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{item.type}</span>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Revenue by Shift */}
                        <div className="card">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Revenue by Shift</h3>
                            <div className="flex items-end justify-around h-48 px-4">
                                {revenueByShift.map((shift, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">₹{(shift.value / 1000).toFixed(1)}k</span>
                                        <div
                                            className="w-16 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg transition-all duration-500"
                                            style={{ height: shift.height }}
                                        ></div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{shift.shift}</p>
                                            <p className="text-xs text-gray-400">{shift.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Top Selling Dishes */}
                    <div className="card">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Top Selling Dishes</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                                        <th className="pb-3 font-medium">Rank</th>
                                        <th className="pb-3 font-medium">Dish Name</th>
                                        <th className="pb-3 font-medium text-right">Quantity</th>
                                        <th className="pb-3 font-medium text-right">Revenue</th>
                                        <th className="pb-3 font-medium text-right">Trend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topDishes.map((dish) => (
                                        <tr key={dish.rank} className="table-row">
                                            <td className="py-3">
                                                {dish.rank <= 3 ? (
                                                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold
                            ${dish.rank === 1 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
                            ${dish.rank === 2 ? 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' : ''}
                            ${dish.rank === 3 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                          `}>
                                                        {dish.rank === 1 ? '🥇' : dish.rank === 2 ? '🥈' : '🥉'}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-500 dark:text-gray-400 pl-2">{dish.rank}</span>
                                                )}
                                            </td>
                                            <td className="py-3 font-medium text-gray-900 dark:text-white">{dish.name}</td>
                                            <td className="py-3 text-right text-gray-600 dark:text-gray-300">{dish.qty} sold</td>
                                            <td className="py-3 text-right font-semibold text-gray-900 dark:text-white">₹{dish.revenue.toLocaleString()}</td>
                                            <td className="py-3 text-right">
                                                <span className="text-green-500">↗</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* AI Insights Sidebar */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="card sticky top-24">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl">🤖</span>
                            <h3 className="font-semibold text-gray-900 dark:text-white">AI Insights</h3>
                        </div>
                        <div className="space-y-4">
                            {aiInsights.map((insight, index) => (
                                <div key={index} className={`insight-card ${insight.type}`}>
                                    <div className="flex items-start gap-3">
                                        <insight.icon size={18} className={`mt-0.5
                      ${insight.type === 'alert' ? 'text-red-500' : ''}
                      ${insight.type === 'prediction' ? 'text-purple-500' : ''}
                      ${insight.type === 'recommendation' ? 'text-green-500' : ''}
                    `} />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">{insight.title}</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{insight.desc}</p>
                                            <button className={`mt-2 text-xs font-medium
                        ${insight.type === 'alert' ? 'text-red-600 dark:text-red-400' : ''}
                        ${insight.type === 'prediction' ? 'text-purple-600 dark:text-purple-400' : ''}
                        ${insight.type === 'recommendation' ? 'text-green-600 dark:text-green-400' : ''}
                      `}>
                                                {insight.action} →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
