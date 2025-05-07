export default function AdvisoryMember({ name, title, location, image, profileLink }) {
    return (
    <div className="bg-pink-50 rounded-[60px] p-8 flex flex-col md:flex-row items-center gap-6">
    <div className="flex-1">
        <h3 className="text-xl font-extrabold text-blue-800 tracking-wide uppercase">{name}</h3>
        <p className="text-gray-700 mt-2">{title}<br />{location}</p>
        <a href={profileLink} className="inline-flex items-center mt-4 border border-blue-500 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition">
        View Profile
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        </a>
    </div>
    <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
    </div>
);
}
