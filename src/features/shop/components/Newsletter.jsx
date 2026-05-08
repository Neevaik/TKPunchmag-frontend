import ActionButton from "../../../components/ui/ActionButton";

export default function Newsletter() {
    return (
        <section className="py-20 px-6 lg:px-20 text-center">

            <div className="max-w-2xl mx-auto border border-primary/20 p-10 rounded-xl bg-gradient-to-b from-primary/5 to-transparent">

                <h2 className="text-white text-3xl font-black uppercase italic mb-4">Join the Ranks</h2>

                <p className="text-slate-400 mb-8 uppercase text-xs tracking-widest font-bold">Get 10% off your first order & exclusive gear drops.</p>

                <form className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="email"
                        placeholder="YOUR EMAIL ADDRESS"
                        className="
              flex-1
              bg-white/5
              border border-white/10
              rounded
              px-6
              py-4
              text-xs
              font-bold
              tracking-widest
              uppercase
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:border-primary
            "
                    />

                    <ActionButton className="text-xs gap-2 hover:translate-x-2">
                        Subscribe
                    </ActionButton>

                </form>
            </div>
        </section>
    );
}