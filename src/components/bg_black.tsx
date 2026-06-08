const SectionGoldBackgroundLight = () => {
  return (
    <>
      {/* ===== PERFORMANCE OPTIMIZED GOLD BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main center glow */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-gold/10
            blur-[120px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[450px]
            h-[450px]
            rounded-full
            bg-gold/8
            blur-[100px]
          "
        />

        {/* Soft gold wash */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]
          "
        />
      </div>

      {/* ===== LIGHT ARCHITECTURAL GRID ===== */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </>
  );
};

export default SectionGoldBackgroundLight;