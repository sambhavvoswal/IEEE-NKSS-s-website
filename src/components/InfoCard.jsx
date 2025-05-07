export default function InfoCard({ image, title, description, buttonText, buttonLink, bg = "bg-blue-50" }) {
    return (
    <div className={`rounded-[100px] flex flex-col md:flex-row items-center gap-8 p-8 ${bg}`}>
    <img src={image} alt={title} className="w-40 h-40 object-contain" />
    <div>
        <h2 className="text-3xl font-extrabold text-blue-800 mb-3 tracking-wide">{title}</h2>
        <p className="text-gray-800 mb-4">{description}</p>
        {buttonText && (
        <a href={buttonLink} className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full">
            {buttonText}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
        )}
    </div>
    </div>
);
}
