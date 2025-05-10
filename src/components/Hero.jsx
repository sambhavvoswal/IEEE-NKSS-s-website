import heroBg from '/assets/hero-bg.jpg';

export default function Hero() {
    return (
    <section
    // className="relative h-[95vh] bg-cover bg-center flex items-center justify-center text-center "
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-center "
    style={{ backgroundImage: `url(${heroBg})` }}
    >

    {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
    <div className="relative z-10 px-4 ">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
        IEEE NKSS
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium inline-flex items-center transition">
        Explore
        <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        </button>
    </div>
    </section>
);
}
