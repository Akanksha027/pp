export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(0.7*(100vh-5rem))] flex-col items-center justify-center bg-[#000000] px-6 text-center md:px-12 lg:px-20"
      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      <div
        className="flex w-full max-w-6xl flex-col items-center uppercase"
        style={{
          lineHeight: 1.1,
          letterSpacing: "0.02em",
          gap: "0.15em",
        }}
      >
        <span
          className="font-bold leading-none text-[#FFFFFF]"
          style={{
            fontSize: "clamp(2.5rem, 9vw, 5.5rem)",
          }}
        >
          I&apos;M akanksha, An
        </span>
        <span
          className="font-bold leading-none"
          style={{
            color: "#DFFF66",
            fontSize: "clamp(2.5rem, 9vw, 5.5rem)",
          }}
        >
          amazing Full-Stack
        </span>
        <span
          className="font-bold leading-none text-[#FFFFFF]"
          style={{
            fontSize: "clamp(2.5rem, 9vw, 5.5rem)",
          }}
        >
          Developer
        </span>
      </div>
      {/* Thin line below hero: 75% width, white/70 */}
      <div
        className="absolute bottom-0 left-1/2 w-[75%] -translate-x-1/2 border-t border-white/70"
        aria-hidden
      />
    </section>
  );
}
