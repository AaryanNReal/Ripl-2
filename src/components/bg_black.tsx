const SectionGoldBackgroundLight = () => {
  return (
    <>
      {/* ===== MODERN GOLD AMBIENCE LAYER (LIGHTER) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft center light wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_65%)]" />

        {/* Subtle hero glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gold/20 rounded-full blur-[260px]" />

        {/* Reduced depth glows */}
        <div className="absolute bottom-24 right-24 w-[700px] h-[700px] bg-gold/16 rounded-full blur-[230px]" />
        <div className="absolute top-1/3 left-16 w-[360px] h-[360px] bg-gold/22 rounded-full blur-[180px]" />

        {/* Very soft vertical light rays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.08)_50%,transparent_100%)] opacity-30" />
      </div>

      {/* ===== PREMIUM GRID / ARCHITECTURAL TEXTURE (UNCHANGED) ===== */}
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

export default SectionGoldBackgroundLight;
