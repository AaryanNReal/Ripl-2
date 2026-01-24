import { Quote } from "lucide-react";

const testimonials = [
  {
    company: "HyperCITY Retail",
    author: "Sivakumar S",
    role: "General Manager - Projects",
    content:
      "BNP Interiors has executed civil, interior, and carpentry work for our stores in Mumbai, Hyderabad and Amritsar. The projects have been executed within targeted timelines and the quality of work is satisfactory.",
  },
  {
    company: "Novotel Hotels",
    author: "Rajesh Kumar",
    role: "Director of Operations",
    content:
      "Working with BNP Interiors has been an exceptional experience. Their attention to detail and commitment to quality has helped us deliver world-class hospitality spaces.",
  },
  {
    company: "HDFC Bank",
    author: "Priya Sharma",
    role: "Infrastructure Head",
    content:
      "BNP Interiors delivered our branch renovations on time and exceeded our expectations. Their professionalism and craftsmanship are commendable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Our Customer Words
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our quality of work is exceptional. Keeping our customers happy is our primary 
            objective, and we put in our best efforts to ensure that.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-cream p-8 relative hover:shadow-xl transition-shadow duration-500"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-6">
                <h4 className="font-serif text-lg text-foreground mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                <p className="text-gold text-sm font-medium mt-2">
                  {testimonial.company}
                </p>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
