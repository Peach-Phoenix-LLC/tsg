import React from 'react';

const orders = [
    {
        id: "ORD-9482-XCA",
        item: "Cashmere Blend Overcoat",
        price: "$1,250.00",
        date: "Oct 12, 2023",
        status: "Delivered",
        details: "Size: 48 • Color: Sandstone",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF_wa4oISPT9EBn6VO_LbKGeLtprLuTcmOBU1KLCBRth9iV14cMpNVST6P0twcxmL1BHTdF9xzzwwhsIaKpuTXEz3MSOBz3xyo8XUvAgd1q4rzbKcsYrfE-48_LJAmDQP7lrbtBuEDu8kcMI_MuzWxtMBZWL9ACSVQd7OikKwZiuMboPOGeDfpq1wl8H1qaXDsTE2f2WkDxeM4Xn4Pwki033S_H_RKX4jnDceMBEmb3oAoJxM5XhveO3ZQH2Guxysz6RAKe1CuCYTn"
    },
    {
        id: "ORD-8933-LMP",
        item: "Full-Grain Leather Boots",
        price: "$890.00",
        date: "Sept 28, 2023",
        status: "Returned",
        details: "Size: 44 • Color: Onyx Black",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvD2Jxud5Ed2IMIrkfpG66IVqhbo4Ievu1EMzP-z77lyKEE8m0jbKnsWK-aoWEQ4RR1LMMFgrGysfKWOCPhzIZg9-hoywhELFelKdoZl3PsCQRok6WGDhD5fINg04W5dXtcpWQYkcXODGhu1NoRaOyZHELsGXhvL8j9Md29I1S4p6VX57B6gZ8Qvq44F75r9DO6SEwlgaBcaXam0kCa6us3zu3sc1GN1eXWyV6zKZ3R8qcS3209E_08wnFuyZ8XWQMY3ahsauT8g8I"
    },
    {
        id: "ORD-7102-BQW",
        item: "Structured Serge Trousers",
        price: "$420.00",
        date: "Aug 15, 2023",
        status: "Delivered",
        details: "Size: 50 • Color: Noir",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtmnabbg_be_MfzKr7Lq1z9Sjbu8iwK3AoHoK6GEIfH3VgO6WPwOHfWYYPFoyR6N4jxBL1hDzAMGl7EF9w3PGVpyELhiEC4l1PLkWP9VZD_sXwVTRuIOzpM0P6MmG3SqrvM-rqs7SkucZ-xkd_SJx2QBmFyzswVKIWyPXYwlEp7-JZpSCn33cn9Roi0H0Rbik4pbn-rcaPiVlU1GEqGddgpCy8k7VWIhZUkC34eRw_wEWno5yoMQONq26LD6j8j2SP-vAlB8LdwhPS"
    }
];

export default function OrderHistory() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Order History</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage your recent luxury acquisitions and track shipments.</p>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-accent-blue bg-accent-blue/5 hover:bg-accent-blue/10 px-4 py-2 rounded-lg transition-colors border border-accent-blue/10">
                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                    Filter Orders
                </button>
            </div>

            <div className="divide-y divide-gray-100">
                {orders.map((order) => (
                    <div key={order.id} className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 hover:bg-gray-50/50 transition-colors">

                        {/* Image */}
                        <div className="w-full lg:w-32 h-32 lg:h-40 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={order.image} alt={order.item} className="w-full h-full object-cover mix-blend-multiply" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{order.item}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{order.details}</p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-lg font-semibold text-gray-900">{order.price}</p>
                                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Order {order.id}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-4">
                                <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${order.status === 'Delivered' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-600 border border-gray-200'
                                    }`}>
                                    <span className="material-symbols-outlined text-[14px]">
                                        {order.status === 'Delivered' ? 'check_circle' : 'assignment_return'}
                                    </span>
                                    {order.status}
                                </div>
                                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px] text-gray-400">calendar_month</span>
                                    {order.status === 'Delivered' ? 'Purchased' : 'Returned'} on {order.date}
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex lg:flex-col justify-end gap-3 lg:w-40 flex-shrink-0 pt-2 lg:pt-0">
                            <button className="flex-1 lg:flex-none px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors shadow-sm text-center">
                                View Details
                            </button>
                            {order.status === 'Delivered' && (
                                <button className="flex-1 lg:flex-none px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-200 transition-colors text-center">
                                    Buy Again
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-6 border-t border-gray-100 text-center bg-gray-50/50">
                <button className="text-accent-blue text-sm font-semibold hover:text-blue-800 transition-colors">
                    View All Orders →
                </button>
            </div>
        </div>
    );
}
