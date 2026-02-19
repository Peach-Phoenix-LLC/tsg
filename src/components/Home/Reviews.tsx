import React from 'react';

const reviews = [
    {
        name: 'Sophie M.',
        text: '"The quality is absolutely stunning. I\'ve never felt more confident than when I wore the Gabrielle evening gown. It truly is fashion that empowers."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG1upMDlkuPHj-ATByDHySJlRcxVUU3lpQjv8vA-dNMnGGOUVXGTOB1B8Fk-y12atYlxPXQsYK_qr-sAGAJUA_lrM2YGkFRqYnIBqPeXBJvkNTe0e5HOsv-jIsfs3JiVjKMo7Uri3dOqFPC_utIi8LZpGlNrsfTKyMLNGw70MXnlce-ZEWARst2I7oMxWZRjM0A4_sIm_os8kSEowdQuEcn02cWxg2D4H9MpKC38hmRjSs7Az38NpAVSNPrNiK-9_kiv7wadVQLyG2',
        rating: 5
    },
    {
        name: 'Lucas D.',
        text: '"Finally, a brand that understands fluidity and grace. The shipping was fast to Berlin, and the packaging was an experience in itself."',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGNb8yPCMFLc2rgpe9wdk8FsvuyFzsdMj3ToiM9lGk-o2twDlNiUQIrl_6y67cD-8Wp7yT19hAojpYzBaEA6U9ssxayxTsvDKYRzzhOHxp7_ufA1qnl7BskizEJ_vPVUYfLlsQDcHrILxeVhfv-SvWFIDGpWWVQAiTLIaSXo5Hz8udh3AZY9z6IS1uI0Detk-YQLikjyttu3YS01SOyFsHeMdFbFS3bHJX5CNucCK2xl0IzHCLVN_o7EqRwLA-7SEtUxYXZ19QmlL',
        rating: 5
    },
    {
        name: 'Emma R.',
        text: '"Absolutely in love with the accessories collection. The holographic details are subtle yet mesmerizing. Highly recommended!"',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa5XeaO2h6YVBS5r_XF_rBzxvyx-Ati61ZG4xW_ibs20edr7rk3S3aFJUjCQ9suvr7ikvWWbqD1lz2Q1V9u26m-gwbosYvpMC0i3EkCZMR_s-arxiWhZoBfve8Q0HTOyczdxq2oWCOagERqDdLQFbdvTm5mP0BjUS3Rxnv1pexISIzlYVPheSb_ERNS95U43gQLB77g1K3ua5T7xa0L-4yrFs1Fqjhbp9y0j5_ugis7ACMkVVvAZrJz9fc585OPOdE9dQZi7jBv6tv',
        rating: 4.5
    }
];

const Reviews = () => {
    return (
        <section className="py-24 px-6 relative bg-slate-50 overflow-hidden">
            {/* Background gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex items-center gap-2 mb-10">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <h2 className="text-2xl font-bold text-slate-900">Trusted by You</h2>
                </div>

                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory">
                    {reviews.map((review, index) => (
                        <div key={index} className="min-w-[300px] md:min-w-[400px] glass-card p-8 rounded-3xl snap-center transition-transform hover:-translate-y-1">
                            <div className="flex gap-1 text-amber-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-lg fill-current">
                                        {i < Math.floor(review.rating) ? 'star' : (review.rating % 1 !== 0 && i === Math.floor(review.rating) ? 'star_half' : 'star_outline')}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-700 font-light italic mb-6">{review.text}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{review.name}</p>
                                    <p className="text-xs text-slate-500">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
