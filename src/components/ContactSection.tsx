  import { useState } from "react";
  import { Phone, Mail, Send } from "lucide-react";
  import emailjs from "emailjs-com";
  import { useToast } from "@/hooks/use-toast";

  const SERVICE_ID = "service_g87u5gl";
  const TEMPLATE_ID = "template_afnmo8l";
  const PUBLIC_KEY = "1rGPF-l2YJuzlwKgk";

  const WHATSAPP_NUMBER = "9137933718";

  const ContactSection = () => {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
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
          title: "Message sent",
          description: "We’ll get back to you shortly.",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch {
        toast({
          title: "Something went wrong",
          description: "Please try again or use WhatsApp.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    const handleWhatsAppSend = () => {
      const message = `
  New Website Enquiry

  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}

  Message:
  ${formData.message}
      `;

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    };

    return (
      <section id="contact" className="py-20 lg:py-32 bg-amber-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* LEFT — CONTACT INFO */}
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">
                Get In Touch
              </p>

              <h2 className="text-4xl font-serif text-charcoal mb-6">
                Let's Build Something Beautiful Together
              </h2>

              <div className="w-16 h-1 bg-gold mb-8" />

              <div className="space-y-6">
                <a
                  href="tel:+912249723622"
                  className="flex items-center gap-4 text-charcoal/70 hover:text-gold"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  (+91-22) 49723622
                </a>

                <a
                  href="mailto:email@raghbir.net"
                  className="flex items-center gap-4 text-charcoal/70 hover:text-gold"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  email@raghbir.net
                </a>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="bg-cream p-8 lg:p-10 shadow-lg">
              <h3 className="text-2xl font-serif text-charcoal mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                {["name", "email", "phone"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="
                      w-full
                      bg-white
                      border border-charcoal/20
                      px-4 py-3
                      text-charcoal
                      focus:border-gold
                      focus:outline-none
                    "
                  />
                ))}

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-white
                    border border-charcoal/20
                    px-4 py-3
                    text-charcoal
                    focus:border-gold
                    focus:outline-none
                    resize-none
                  "
                />

                {/* ACTION BUTTONS */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={handleWhatsAppSend}
                    className="bg-green-500 text-white py-3 font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition"
                  >
                    <Send className="w-4 h-4" />
                    WhatsApp
                  </button>

                  <button
                    onClick={handleEmailSend}
                    disabled={loading}
                    className="bg-gold text-charcoal py-3 font-medium flex items-center justify-center gap-2 hover:bg-gold-dark transition disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Email"}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  };

  export default ContactSection;
