import ActionButton from "./ActionButton";

export default function GuideCard({ title, description, image }) {
    return (
        <div className="relative min-h-[400px] flex flex-col justify-end p-10 overflow-hidden group hover:cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(34, 16, 16, 1) 10%, transparent 70%), url('${image}')`, }} />

            <div className="relative z-10">
                <h3 className="text-white text-3xl font-black uppercase italic mb-4">
                    {title}
                </h3>

                <p className="text-slate-300 text-sm mb-6 max-w-md">
                    {description}
                </p>

                <ActionButton variant="primary" size="sm">
                    Read Guide
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </ActionButton>
            </div>
        </div>
    );
}