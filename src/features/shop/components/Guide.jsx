import GuideCard from "../../../components/ui/GuideCard";

export default function GuideSection() {

    const guides = [
        {
            id: 1,
            title: "The Grunt's Guide: Wraps",
            description:
                "Don't break your tools. Learn the fundamental art of the perfect hand wrap for maximum protection.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDafa9SDU94NAoHV0lXIfgQ7IUfvM3Ah8ngrx9j0uEQobbR2x1ZcqwQpQ69DDgj2hpOxPaTqbGVT8mRCFLiF8Pk1b6VQ3B7oME1CtMjGvXcJRwLqTMkrPlAsK2mpxxHbuQVtd4WQ8bXLgARvc12v8XmvOCsPUegl7Z4Dx6d9oTLuMQ9A7UBIQiHPr0q7AxE92Hkl5bqwpFNoCIKWd0wWxnwfxYcjvAtenlifxGQCpLAmKNfjXpOZ3MPGKn9ydEMC2flPe0L7hFNluuV",
        },
        {
            id: 2,
            title: "Choosing Your Ounces",
            description:
                "10oz, 12oz, or 16oz? We break down exactly which glove weight fits your training goals.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDK6nIO2i42plhzH92keR1h5aTNwO9t6uJW6akbg5wdIhkz4gSh7g1W3MU8lDiVBkOA6EK1_Njn4JrILzerdw2BhY-m7oniCvwOUoO-qQy0gHQvepUc_1wLBuhCA8ZfGOqII0w7Nb71D_glJc0P2P1nvqRZH5t0lBERwqsKXd44w8hookA10wtZmVQUrhSN5XX3RdD9F9GyJI2A_tyfLJYiiCtccfv5t4jZrujIj2FhwR8Huuj_nzmtcbIRwAKuJROHR7uB6FttIIjp",
        },
    ];

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-6 lg:px-20 mb-20">
            {guides.map((guide) => (
                <GuideCard key={guide.id} {...guide} />
            ))}
        </section>
    );
}