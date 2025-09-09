export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-4  z-20 bg-white rounded-t-[44px] shadow-xl -mt-16 py-10">
      <div className=" mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="float">
            <img
              src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757404128/peaceful-meditation-scene-with-person-in-lotus-pos_ivve8x.jpg"
              alt="About The Mystic Healers"
              className="rounded-2xl shadow-2xl w-full h-120"
            />
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              At The Mystic Healers, we believe energy healing is essential because it addresses every aspect of
              well-being. Emotions like anger, fear, and sadness can create blockages that manifest as physical and
              mental health issues.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We offer a supportive environment for people seeking balance, clarity, spiritual guidance, and emotional
              well-being through our online healing, divination and coaching techniques and experienced self-healing.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                <div className="text-muted-foreground">Healing Sessions</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Certified Healers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
