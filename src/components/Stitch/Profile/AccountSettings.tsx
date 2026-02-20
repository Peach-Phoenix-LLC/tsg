import React from 'react';

export default function AccountSettings() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">Account Settings</h2>

            <form className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                            type="text"
                            defaultValue="Julian"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                            type="text"
                            defaultValue="Vane"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        defaultValue="julian.vane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                    />
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
                    <button type="button" className="px-6 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition-colors">
                        Cancel
                    </button>
                    <button type="button" className="px-6 py-2.5 bg-accent-blue hover:bg-blue-800 text-white font-medium rounded-xl transition-colors shadow-sm">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
