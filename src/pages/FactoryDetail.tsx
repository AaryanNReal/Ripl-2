import { ArrowLeft, MapPin } from "lucide-react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

const FactoryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const factory = location.state?.factory;

  if (!factory) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="min-h-screen bg-charcoal">
      {/* Header */}
      <div className="pt-16 lg:pt-16  pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              hover:bg-white/10
              transition-all duration-300
              mb-12
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Title Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-gold" />

              <span className="text-gold uppercase tracking-[0.2em] text-xs">
                {factory.location}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              {factory.name}
            </h1>

            {factory.shortDescription && (
              <p className="max-w-3xl mx-auto mt-6 text-white/70 text-lg">
                {factory.shortDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {factory.images?.map(
              (image: string, index: number) => (
                <div
                  key={index}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border border-white/5
                  "
                >
                  <img
                    src={image}
                    alt={`${factory.name} ${index + 1}`}
                    className="
                      w-full
                      aspect-[4/3]
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryDetail;