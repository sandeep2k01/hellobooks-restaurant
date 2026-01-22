import { useState } from 'react';
import { Send, Mic, Download, FileText, TrendingUp, AlertTriangle, Lightbulb, Bot } from 'lucide-react';

const initialMessages = [
    {
        id: 1,
        type: 'user',
        text: "What was my revenue yesterday?"
    },
    {
        id: 2,
        type: 'ai',
        text: `📊 **Yesterday's Performance (Jan 19, 2026)**

• Total Revenue: ₹48,230
• Orders: 134
• Average Order Value: ₹360
• Top Seller: Butter Chicken (42 orders)

Would you like a detailed breakdown?`
    },
    {
        id: 3,
        type: 'user',
        text: "Yes, show me shift-wise"
    },
    {
        id: 4,
        type: 'ai',
        text: `Here's the shift breakdown:

🌅 Morning (6AM-12PM): ₹9,200 (19%)
☀️ Lunch (12PM-5PM): ₹24,100 (50%)
🌙 Dinner (5PM-11PM): ₹14,930 (31%)

Lunch was your peak period!`
    },
    {
        id: 5,
        type: 'user',
        text: "Generate a weekly sales report"
    },
    {
        id: 6,
        type: 'ai',
        isReport: true,
        text: `✅ **Report generated!**

📄 Weekly Sales Report (Jan 13-19, 2026)
Downloading as PDF...`
    },
];

const reportTemplates = [
    { name: "Daily Sales Report", icon: "📊" },
    { name: "Profit & Loss", icon: "💰" },
    { name: "Food Cost Analysis", icon: "📈" },
    { name: "Top Performing Items", icon: "🏆" },
    { name: "Expense Breakdown", icon: "📉" },
    { name: "Staff Performance", icon: "👥" },
];

const recentReports = [
    { name: "Weekly Sales Report.pdf", date: "Jan 13-19" },
    { name: "Monthly P&L.pdf", date: "December 2025" },
    { name: "Food Cost Analysis.pdf", date: "January 2026" },
];

const insights = [
    { title: "Revenue Trend", value: "↗ +12% vs last week", type: "success" },
    { title: "Cost Alert", value: "Food cost increased 3%", type: "warning" },
    { title: "Recommendation", value: "Optimize dinner menu pricing", type: "info" },
];

export default function AIAssistant() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            type: 'user',
            text: input
        };

        setMessages([...messages, newMessage]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: prev.length + 1,
                type: 'ai',
                text: "I'm processing your request. In the full version, I would provide detailed analytics and insights for your query."
            }]);
        }, 1000);
    };

    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Assistant</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Get instant insights and generate reports with AI</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Chat Interface */}
                <div className="col-span-12 lg:col-span-7">
                    <div className="card h-[600px] flex flex-col">
                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.type === 'ai' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-purple flex items-center justify-center mr-2 flex-shrink-0">
                                            <Bot size={16} className="text-white" />
                                        </div>
                                    )}
                                    <div className={msg.type === 'user' ? 'chat-user' : 'chat-ai'}>
                                        <div className="whitespace-pre-line text-sm">
                                            {msg.text}
                                        </div>
                                        {msg.isReport && (
                                            <button className="btn btn-primary text-xs mt-3 py-1.5">
                                                <Download size={14} />
                                                Download Report
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-slate-700">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything about your restaurant..."
                                className="flex-1 px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <button className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-500 dark:text-gray-400">
                                <Mic size={20} />
                            </button>
                            <button
                                onClick={handleSend}
                                className="p-3 bg-primary-500 hover:bg-primary-600 rounded-lg text-white"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="col-span-12 lg:col-span-5 space-y-6">
                    {/* Instant Reports */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl">⚡</span>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Instant Reports</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {reportTemplates.map((report, index) => (
                                <button
                                    key={index}
                                    className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors text-left"
                                >
                                    <span className="text-lg block mb-1">{report.icon}</span>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 block">{report.name}</span>
                                    <span className="text-xs text-primary-500 mt-1 block">Generate →</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Reports */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText size={20} className="text-gray-500 dark:text-gray-400" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Recent Reports</h3>
                        </div>
                        <div className="space-y-3">
                            {recentReports.map((report, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{report.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{report.date}</p>
                                    </div>
                                    <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI Insights */}
                    <div className="grid grid-cols-1 gap-3">
                        {insights.map((insight, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg flex items-center gap-3 ${insight.type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
                                        insight.type === 'warning' ? 'bg-orange-50 dark:bg-orange-900/20' :
                                            'bg-blue-50 dark:bg-blue-900/20'
                                    }`}
                            >
                                {insight.type === 'success' && <TrendingUp size={20} className="text-green-500" />}
                                {insight.type === 'warning' && <AlertTriangle size={20} className="text-orange-500" />}
                                {insight.type === 'info' && <Lightbulb size={20} className="text-blue-500" />}
                                <div>
                                    <p className={`text-xs font-medium ${insight.type === 'success' ? 'text-green-800 dark:text-green-300' :
                                            insight.type === 'warning' ? 'text-orange-800 dark:text-orange-300' :
                                                'text-blue-800 dark:text-blue-300'
                                        }`}>{insight.title}</p>
                                    <p className={`text-sm font-semibold ${insight.type === 'success' ? 'text-green-700 dark:text-green-400' :
                                            insight.type === 'warning' ? 'text-orange-700 dark:text-orange-400' :
                                                'text-blue-700 dark:text-blue-400'
                                        }`}>{insight.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
