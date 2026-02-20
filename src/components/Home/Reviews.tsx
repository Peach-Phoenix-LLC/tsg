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
        <section className="py-32 px-8 relative bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-medium">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary tracking-tight">The Gabrielle Experience</h2>
                    </div>
                    <div className="flex items-center gap-2 pb-2 border-b border-black/5">
                        <span className="material-symbols-outlined text-accent text-[20px]">verified</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-medium">Verified by Our Community</span>
                    </div>
                </div>

                <div className="flex gap-1 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory">
                    {reviews.map((review, index) => (
                        <div key={index} className="min-w-[320px] md:min-w-[450px] bg-[#FDFCF8] p-10 snap-center border border-black/5 hover:border-accent/20 transition-colors duration-500">
                            <div className="flex gap-1 text-accent mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-[16px] fill-current">
                                        {i < Math.floor(review.rating) ? 'star' : (review.rating % 1 !== 0 && i === Math.floor(review.rating) ? 'star_half' : 'star_outline')}
                                    </span>
                                ))}
                            </div>
                            <p className="text-base md:text-lg text-primary/80 font-light leading-relaxed tracking-wide italic mb-10">
                                {review.text}
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-xs font-serif text-primary tracking-widest uppercase">{review.name}</p>
                                    <p className="text-[10px] text-primary/40 uppercase tracking-tighter mt-1">Connoisseur</p>
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
