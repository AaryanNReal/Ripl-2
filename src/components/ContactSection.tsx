import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID = "service_g87u5gl";
const TEMPLATE_ID = "template_afnmo8l";
const PUBLIC_KEY = "1rGPF-l2YJuzlwKgk";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailSend = async () => {
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-amber-50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">

  {/* LEFT SIDE */}
  <div>
    <p className="text-gold uppercase tracking-[0.35em] text-sm font-medium mb-4">
      Get In Touch
    </p>

    <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
      Let's Create Your Next Landmark Project
    </h2>

    <div className="w-24 h-[2px] bg-gold mb-10" />

    <div className="space-y-5 mb-12">
      <a
        href="tel:+912249723622"
        className="flex items-center gap-4 text-charcoal/70 hover:text-gold transition-colors"
      >
        <Phone className="w-5 h-5 text-gold" />
        <span>(+91-22) 49723622</span>
      </a>

      <a
        href="mailto:email@raghbir.net"
        className="flex items-center gap-4 text-charcoal/70 hover:text-gold transition-colors"
      >
        <Mail className="w-5 h-5 text-gold" />
        <span>email@raghbir.net</span>
      </a>
    </div>

    {/* OFFICE CARDS */}
    <div className="grid md:grid-cols-2 gap-8 border-2 border-gold/50 rounded-2xl p-8 bg-white/50">

      {/* INDIA */}
      <div className="bg-white rounded-2xl border border-gold/60 hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl p-8 min-h-[420px] flex flex-col">

        <div className="text-center mb-8">
          <div className="w-16 h-[2px] bg-gold mx-auto mb-4" />

          <h3 className="font-serif text-4xl lg:text-5xl text-charcoal">
            INDIA
          </h3>
        </div>

        <div className="flex-1 text-charcoal/75 text-sm leading-7">
          <p>218, Nigos Building,</p>
          <p>Cama Estate,</p>
          <p>Goregaon (East),</p>
          <p>Mumbai – 400 063.</p>
        </div>

        <div className="pt-6 mt-6 border-t border-charcoal/10">
          <p className="font-medium text-charcoal">
            Tel: (+91-22) 49723622 / 23
          </p>

          <a
            href="mailto:email@raghbir.net"
            className="block mt-3 text-gold break-all"
          >
            email@raghbir.net
          </a>
        </div>
      </div>

      {/* THAILAND */}
      <div className="bg-white border rounded-2xl border-gold/60 hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl p-8 min-h-[420px] flex flex-col">

        <div className="text-center mb-8">
          <div className="w-16 h-[2px] bg-gold mx-auto mb-4" />

          <h3 className="font-serif text-4xl lg:text-5xl text-charcoal">
            THAILAND
          </h3>
        </div>

        <div className="flex-1 text-charcoal/75 text-sm leading-7">
          <p>Level 20, Metropolis Building,</p>
          <p>Suite 81, 725 Sukhumvit Road,</p>
          <p>Klongtan Nua, Wattana,</p>
          <p>Bangkok 10110.</p>
        </div>

        <div className="pt-6 mt-6 border-t border-charcoal/10">
          <p className="font-medium text-charcoal">
            Tel: (+66) 891520090
          </p>

          <a
            href="mailto:tushar@raghbir.net"
            className="block mt-3 text-gold break-all"
          >
            tushar@raghbir.net
          </a>
        </div>
      </div>

    </div>
  </div>

  {/* RIGHT SIDE FORM */}
  <div className="bg-white p-10 shadow-xl border border-gold/10">

    <h3 className="font-serif text-3xl text-charcoal mb-8">
      Send Us a Message
    </h3>

    <div className="space-y-5">

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full bg-white border border-charcoal/15 px-5 py-4 focus:border-gold focus:outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-white border border-charcoal/15 px-5 py-4 focus:border-gold focus:outline-none"
      />

      <input
        name="phone"
        type="text"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full bg-white border border-charcoal/15 px-5 py-4 focus:border-gold focus:outline-none"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-white border border-charcoal/15 px-5 py-4 resize-none focus:border-gold focus:outline-none"
      />

      <button
        onClick={handleEmailSend}
        disabled={loading}
        className="w-full bg-gold text-charcoal py-4 font-medium flex items-center justify-center gap-2 hover:bg-gold-dark transition-all disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {loading ? "Sending..." : "Send Message"}
      </button>

    </div>
  </div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;