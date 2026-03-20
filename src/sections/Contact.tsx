import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import Title from '@/components/Title.tsx';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: '', email: '', message: '' });
      toast.success('Message sent, I will respond as soon as possible');
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="flex-center px-5 md:px-10 md:mt-40 mt-20">
      <div className="w-full h-full md:px-10 px-5">
        <Title
          title="Let's Talk"
          sub="Open to opportunities & collaborations"
          icon="/svgs/contact.svg"
          iconAlt="contact icon"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-8 h-full">
            <div className="flex-center border border-black-50 bg-black-100 rounded-xl p-4 md:p-6 lg:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm md:text-base font-outfit font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm md:text-base font-outfit font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm md:text-base font-outfit font-semibold"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or how I can help..."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? 'Sending...' : 'Reach Out'}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4 h-full">
            <div className="bg-navy-500 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden px-4 py-7 md:px-7 text-white">
              <div className="flex flex-col gap-2 md:gap-6">
                <p className="md:mb-2 text-lg md:text-xl text-white-50 font-roboto font-medium">
                  GET IN TOUCH
                </p>
                <div className="mb-3 text-2xl md:mb-6 md:text-4xl font-semibold font-roboto">
                  <img
                    src="/images/chat.png"
                    alt="chat-icon"
                    className="float-left size-7 md:size-10 animate-bounce"
                  />
                  <p>Connect With Me Let’s Build Something Impactful</p>
                </div>
                <div className="flex flex-col gap-3 md:gap-7">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-white-50 size-5" />
                      <h3 className="font-semibold font-outfit text-lg md:text-2xl">
                        Location
                      </h3>
                    </div>
                    <p className="text-base">Nigeria, Remote</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="text-white-50 size-5" />
                      <h3 className="font-semibold font-outfit text-lg md:text-2xl">
                        Call Me
                      </h3>
                    </div>
                    <p className="text-base">+2348066825721</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <Mail className="text-white-50  size-5" />
                      <h3 className="font-semibold font-outfit text-lg md:text-2xl">
                        Send an Email
                      </h3>
                    </div>
                    <p className="text-base">ofogbageorge3@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
