import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Title from '@/components/Title';
import toast from 'react-hot-toast';
import { Mail, MapPin, PhoneCall } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
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
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          <div className="xl:col-span-7">
            <div className="flex-center border border-black-50 bg-black-100 rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your full name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? 'Sending...' : 'Send Message'}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-4 min-h-96">
            <div className="bg-[#2eb3cd] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden px-4 py-7 md:px-7 md:py-12 text-white">
              <div className="flex flex-col gap-2 md:gap-6">
                <p className="md:mb-2 text-lg md:text-xl">GET IN TOUCH</p>
                <div className="mb-3 text-2xl md:mb-6 md:text-4xl font-semibold">
                  <img
                    src="/images/chat.png"
                    alt="chat-icon"
                    className="float-left size-7 md:size-10 animate-bounce"
                  />
                  <p>Connect With Me Let's Create Magic Together</p>
                </div>
                <div className="flex flex-col gap-3 md:gap-7">
                  <div className="mb-3 md:mb-6 flex flex-row space-x-4">
                    <div className="flex items-center justify-center border-b p-3 rounded-full shadow-whitesmoke border-whitesmoke">
                      <MapPin className="text-white-50 size-6" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-lg md:text-2xl">
                        Location
                      </h3>
                      <p className="text-base">Nigeria, Remote</p>
                    </div>
                  </div>
                  <div className="mb-3 md:mb-6 flex flex-row space-x-4">
                    <div className="flex items-center justify-center border-b p-3 rounded-full shadow-whitesmoke border-whitesmoke">
                      <PhoneCall className="text-white-50 size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-2xl">
                        Call Me
                      </h3>
                      <p className="text-base">+2348066825721</p>
                    </div>
                  </div>
                  <div className="mb-3 md:mb-6 flex flex-row space-x-4">
                    <div className="flex items-center justify-center border-b  p-3 rounded-full shadow-whitesmoke border-whitesmoke">
                      <Mail className="text-white-50  size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-2xl">
                        Email Me
                      </h3>
                      <p className="text-base">ofogbageorge3@gmail.com</p>
                    </div>
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
