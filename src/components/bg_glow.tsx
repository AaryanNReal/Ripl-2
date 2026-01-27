const SectionChampagneEdgeGlowStrong = () => {
  return (
    <>
      {/* ===== STRONG EDGE-FOCUSED CHAMPAGNE GLOW ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* LEFT EDGE — STRONG */}
        <div
          className="
            absolute
            top-1/2 left-[-420px]
            -translate-y-1/2
            w-[1200px] h-[1200px]
            rounded-full
            blur-[320px]
          "
          style={{
            background: "rgba(244, 228, 188, 0.42)",
          }}
        />

        {/* RIGHT EDGE — STRONG */}
        <div
          className="
            absolute
            top-1/2 right-[-420px]
            -translate-y-1/2
            w-[1200px] h-[1200px]
            rounded-full
            blur-[320px]
          "
          style={{
            background: "rgba(244, 228, 188, 0.42)",
          }}
        />

        {/* SECONDARY EDGE BOOST (adds punch) */}
        <div
          className="
            absolute
            top-1/2 left-[-180px]
            -translate-y-1/2
            w-[700px] h-[700px]
            rounded-full
            blur-[240px]
          "
          style={{
            background: "rgba(244, 228, 188, 0.35)",
          }}
        />

        <div
          className="
            absolute
            top-1/2 right-[-180px]
            -translate-y-1/2
            w-[700px] h-[700px]
            rounded-full
            blur-[240px]
          "
          style={{
            background: "rgba(244, 228, 188, 0.35)",
          }}
        />

        {/* EDGE LIGHT RAYS (VERY VISIBLE) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(244,228,188,0.22), transparent 18%, transparent 82%, rgba(244,228,188,0.22))",
            opacity: 0.6,
          }}
        />
      </div>

      {/* ===== ARCHITECTURAL GRID TEXTURE ===== */}
      <div
        className="absolute inset-0 opacity-[0.18]"
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

export default SectionChampagneEdgeGlowStrong;
