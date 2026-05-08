import ActionButton from "../../../components/ui/ActionButton";

const backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNBkEHiytm56S2I3q7QKmI_6CrAsCXWmc9Cn0s0r9k_c5bsIPIV6MfE9HB0A-OT3j7EM6_7ry60xFTGEO7n1aEzmcJH6Whcb5NIuqajnM3Xai-77RFcr42BOxoNyAtmtOitRGz5nWM64YLSFX3t71rEldKBUZVw-sRYRmq26ovE_-3LwTeYVhTrCHK5EB7K994rW1MlslsDWvuHN0BEd63O2s0-2DF4PcMEiiLQJptZicC8EOdjsee1jeZtsLPqmu4UPmPmC5ffpnA";

export default function Hero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `
            linear-gradient(
              to right,
              rgba(34, 16, 16, 0.9) 0%,
              rgba(34, 16, 16, 0.4) 50%,
              rgba(34, 16, 16, 0.9) 100%
            ),
            url(${backgroundImage}) `,
            }} />

            <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">

                <span className="text-primary font-black tracking-[0.4em] uppercase mb-4 text-sm animate-pulse">Tested in the Trenches</span>

                <h1 className="text-white text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase italic mb-6">Forged for <br />
                    <span className="text-transparent border-t-2 border-b-2 border-primary py-2 px-4 inline-block mt-2" style={{ WebkitTextStroke: "1px white" }}>The Fight</span>
                </h1>

                <p className="max-w-xl text-slate-300 text-base md:text-lg mb-8 font-light leading-relaxed">
                    Professional-grade combat equipment designed for those who live in
                    the gym. No gimmicks. Just performance.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <ActionButton size="sm">Shop All Gear</ActionButton>
                    <ActionButton variant="outline" size="sm">Pro Series</ActionButton>
                </div>
                
            </div>
        </section>
    );
}