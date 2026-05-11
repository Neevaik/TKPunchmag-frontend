export default function ErrorState({
    title = "Une erreur est survenue",
    message = "Impossible de charger les données pour le moment.",
    className = "",
}) {
    return (
        <section
            className={`flex flex-col items-center justify-center px-6 py-20 text-center ${className}`}
        >
            <div className="max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8">
                <h2 className="mb-3 text-2xl font-bold text-red-400">
                    {title}
                </h2>

                <p className="text-text-muted">
                    {message}
                </p>
            </div>
        </section>
    );
}