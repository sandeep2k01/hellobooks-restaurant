import { Construction } from 'lucide-react';

export default function ComingSoon({ title, description }) {
    return (
        <div className="animate-fadeIn flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-6 rounded-full bg-gray-100 dark:bg-slate-800 mb-6">
                <Construction size={48} className="text-gray-400 dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {title || 'Coming Soon'}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
                {description || 'This feature is currently under development. Check back soon for updates!'}
            </p>
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Note:</strong> For this assignment, we focused on the 4 most impactful restaurant-specific screens:
                    Dashboard, Kitchen/Menu, Inventory, and AI Assistant.
                </p>
            </div>
        </div>
    );
}
