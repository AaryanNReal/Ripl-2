const SectionGoldBackground = () => {
  return (
    <>
      {/* ===== MODERN GOLD AMBIENCE LAYER ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Strong center light wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.32),transparent_60%)]" />

        {/* Hero glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gold/35 rounded-full blur-[220px]" />

        {/* Depth glows */}
        <div className="absolute bottom-24 right-24 w-[700px] h-[700px] bg-gold/25 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 left-16 w-[360px] h-[360px] bg-gold/45 rounded-full blur-[150px]" />

        {/* Vertical light rays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.12)_50%,transparent_100%)] opacity-40" />
      </div>

      {/* ===== PREMIUM GRID / ARCHITECTURAL TEXTURE ===== */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.45) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />
    </>
  );
};

export default SectionGoldBackground;
