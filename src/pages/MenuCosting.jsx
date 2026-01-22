import { useState } from 'react';
import { Search, Plus, Edit2, Eye, Lightbulb, Check } from 'lucide-react';

const menuItems = [
    { id: 1, name: "Butter Chicken", category: "Main Course", sellingPrice: 320, costPrice: 98, margin: 69, status: "Active" },
    { id: 2, name: "Paneer Tikka Masala", category: "Main Course", sellingPrice: 280, costPrice: 85, margin: 70, status: "Active" },
    { id: 3, name: "Biryani Bowl", category: "Rice", sellingPrice: 250, costPrice: 95, margin: 62, status: "Active" },
    { id: 4, name: "Garlic Naan", category: "Bread", sellingPrice: 60, costPrice: 18, margin: 70, status: "Active" },
    { id: 5, name: "Dal Makhani", category: "Main Course", sellingPrice: 180, costPrice: 52, margin: 71, status: "Active" },
];

const selectedDishDetails = {
    name: "Butter Chicken",
    ingredients: [
        { name: "Chicken", qty: "500g", cost: 45 },
        { name: "Tomatoes", qty: "200g", cost: 12 },
        { name: "Cream", qty: "100ml", cost: 18 },
        { name: "Spices Mix", qty: "-", cost: 8 },
        { name: "Butter", qty: "50g", cost: 15 },
    ],
    totalIngredient: 98,
    laborCost: 15,
    overhead: 7,
    totalCost: 120,
    sellingPrice: 320,
    profit: 200,
    profitPercent: 62.5,
};

const aiSuggestion = {
    suggestedPrice: 340,
    increase: 20,
    reason: "Market demand high, competitor avg ₹350",
    impact: "+₹1,200/week",
};

export default function MenuCosting() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Menu & Recipe Costing</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your menu items and calculate recipe costs</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={18} />
                    Add New Dish
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Menu Items Table */}
                <div className="col-span-12 lg:col-span-7">
                    <div className="card">
                        {/* Search */}
                        <div className="mb-4">
                            <div className="relative">
                                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search dishes, categories..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-slate-700">
                                        <th className="pb-3 font-medium">Dish Name</th>
                                        <th className="pb-3 font-medium">Category</th>
                                        <th className="pb-3 font-medium text-right">Selling Price</th>
                                        <th className="pb-3 font-medium text-right">Cost Price</th>
                                        <th className="pb-3 font-medium text-right">Margin %</th>
                                        <th className="pb-3 font-medium text-center">Status</th>
                                        <th className="pb-3 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {menuItems.map((item) => (
                                        <tr
                                            key={item.id}
                                            className={`table-row cursor-pointer ${selectedId === item.id ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}
                                            onClick={() => setSelectedId(item.id)}
                                        >
                                            <td className="py-3">
                                                <span className={`font-medium ${selectedId === item.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-900 dark:text-white'}`}>
                                                    {item.name}
                                                </span>
                                            </td>
                                            <td className="py-3 text-gray-600 dark:text-gray-300">{item.category}</td>
                                            <td className="py-3 text-right text-gray-900 dark:text-white">₹{item.sellingPrice}</td>
                                            <td className="py-3 text-right text-gray-600 dark:text-gray-300">₹{item.costPrice}</td>
                                            <td className="py-3 text-right">
                                                <span className={`font-medium ${item.margin >= 65 ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                                    {item.margin}%
                                                </span>
                                            </td>
                                            <td className="py-3 text-center">
                                                <span className="badge badge-success">Active</span>
                                            </td>
                                            <td className="py-3 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-slate-600 text-gray-500 dark:text-gray-400">
                                                        <Edit2 size={14} />
                                                    </button>
                                                    <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-slate-600 text-gray-500 dark:text-gray-400">
                                                        <Eye size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Cost Analysis Panel */}
                <div className="col-span-12 lg:col-span-5 space-y-6">
                    {/* Recipe Cost Breakdown */}
                    <div className="card">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{selectedDishDetails.name} - Cost Analysis</h3>
                            <span className="badge badge-success">Active</span>
                        </div>

                        {/* Ingredients */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Ingredients</h4>
                            <div className="space-y-2">
                                {selectedDishDetails.ingredients.map((ing, index) => (
                                    <div key={index} className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-300">
                                            {ing.name} <span className="text-gray-400">({ing.qty})</span>
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-white">₹{ing.cost}</span>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100 dark:border-slate-700">
                                    <span className="font-medium text-gray-900 dark:text-white">Total Ingredient Cost</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">₹{selectedDishDetails.totalIngredient}</span>
                                </div>
                            </div>
                        </div>

                        {/* Additional Costs */}
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Labor Cost</span>
                                <span className="text-gray-900 dark:text-white">₹{selectedDishDetails.laborCost}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Overhead (Gas, etc)</span>
                                <span className="text-gray-900 dark:text-white">₹{selectedDishDetails.overhead}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100 dark:border-slate-700">
                                <span className="font-semibold text-gray-900 dark:text-white">TOTAL COST</span>
                                <span className="font-bold text-gray-900 dark:text-white">₹{selectedDishDetails.totalCost}</span>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Selling Price</span>
                                <span className="font-medium text-gray-900 dark:text-white">₹{selectedDishDetails.sellingPrice}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-900 dark:text-white">PROFIT</span>
                                <span className="font-bold text-green-600 dark:text-green-400">
                                    ₹{selectedDishDetails.profit} ({selectedDishDetails.profitPercent}%)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* AI Suggestions */}
                    <div className="card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 !border-primary-200 dark:!border-primary-800">
                        <div className="flex items-center gap-2 mb-3">
                            <Lightbulb size={20} className="text-primary-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">AI Price Optimizer</h3>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{aiSuggestion.suggestedPrice}</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">(+₹{aiSuggestion.increase})</span>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Reason:</span> {aiSuggestion.reason}
                            </p>

                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Projected profit increase:</span>{' '}
                                <span className="text-green-600 dark:text-green-400 font-semibold">{aiSuggestion.impact}</span>
                            </p>

                            <button className="btn btn-primary w-full mt-2">
                                <Check size={16} />
                                Apply Suggestion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
