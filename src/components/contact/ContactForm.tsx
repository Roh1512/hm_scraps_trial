import React, { useState, useRef, memo } from "react";
import { motion, useInView } from "framer-motion";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStatusMessage(null); // Clear status message on input change
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { name, phone, email, message } = formData;

      const text = `Hello, I'm ${name}.\nMessage: ${message}.\nPhone: ${phone}\nEmail: ${email}`;
      const encodedText = encodeURIComponent(text);
      const recipientNumber = "966548581513"; // No '+' sign

      const isMobile =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        );
      const baseUrl = isMobile
        ? `https://wa.me/${recipientNumber}?text=${encodedText}`
        : `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodedText}`;

      window.open(baseUrl, "_blank");

      setStatusMessage({
        type: "success",
        text: "WhatsApp message window opened successfully.",
      });
    } catch (err) {
      console.error(err);
      setStatusMessage({
        type: "error",
        text: "Failed to open WhatsApp. Please try again.",
      });
    } finally {
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Clear the message after a few seconds
      setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="card shadow-2xl bg-base-100 max-w-2xl"
    >
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Get in touch with us
        </h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
                id="name"
              />

              <input
                type="tel"
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                placeholder="Phone"
                pattern="[0-9]*"
                minLength={10}
                maxLength={10}
                title="Must be 10 digits"
                className="input input-bordered w-full"
                required
                id="phone"
              />
            </div>

            <input
              type="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
              id="email"
            />

            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="textarea textarea-bordered w-full"
              placeholder="Your message..."
              rows={4}
              required
              id="message"
            />

            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-4 w-full">
                Send Message
              </button>
            </div>
          </fieldset>
        </form>
        {statusMessage && (
          <div
            className={`text-center mb-4 px-4 py-2 rounded ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage.text}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default memo(ContactForm);

// import React, { useState, useRef, memo } from "react";
// import { motion, useInView } from "framer-motion";

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const [statusMessage, setStatusMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setStatusMessage(null); // Clear status message on input change
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const { name, phone, email, message } = formData;

//       const text = `Hello, I'm ${name}.\nMessage: ${message}.\nPhone: ${phone}\nEmail: ${email}`;
//       const encodedText = encodeURIComponent(text);
//       const recipientNumber = "966548581513"; // No '+' sign

//       const isMobile =
//         /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
//           navigator.userAgent
//         );
//       const baseUrl = isMobile
//         ? `https://wa.me/${recipientNumber}?text=${encodedText}`
//         : `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodedText}`;

//       window.open(baseUrl, "_blank");

//       setStatusMessage({
//         type: "success",
//         text: "WhatsApp message window opened successfully.",
//       });
//     } catch (err) {
//       console.error(err);
//       setStatusMessage({
//         type: "error",
//         text: "Failed to open WhatsApp. Please try again.",
//       });
//     } finally {
//       setFormData({ name: "", phone: "", email: "", message: "" });

//       // Clear the message after a few seconds
//       setTimeout(() => setStatusMessage(null), 4000);
//     }
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="card shadow-2xl bg-base-100 max-w-2xl"
//     >
//       <div className="card-body">
//         <h2 className="text-3xl font-bold text-center mb-6 text-primary">
//           Get in touch with us
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <fieldset className="space-y-4">
//             <div className="flex flex-col md:flex-row gap-4">
//               <input
//                 type="text"
//                 onChange={handleChange}
//                 value={formData.name}
//                 name="name"
//                 placeholder="Name"
//                 className="input input-bordered w-full"
//                 required
//                 id="name"
//               />

//               <input
//                 type="tel"
//                 onChange={handleChange}
//                 value={formData.phone}
//                 name="phone"
//                 placeholder="Phone"
//                 pattern="[0-9]*"
//                 minLength={10}
//                 maxLength={10}
//                 title="Must be 10 digits"
//                 className="input input-bordered w-full"
//                 required
//                 id="phone"
//               />
//             </div>

//             <input
//               type="email"
//               onChange={handleChange}
//               value={formData.email}
//               name="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//               required
//               id="email"
//             />

//             <textarea
//               name="message"
//               onChange={handleChange}
//               value={formData.message}
//               className="textarea textarea-bordered w-full"
//               placeholder="Your message..."
//               rows={4}
//               required
//               id="message"
//             />

//             <div className="text-center">
//               <button type="submit" className="btn btn-primary mt-4 w-full">
//                 Send Message
//               </button>
//             </div>
//           </fieldset>
//         </form>
//         {statusMessage && (
//           <div
//             className={`text-center mb-4 px-4 py-2 rounded ${
//               statusMessage.type === "success"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {statusMessage.text}
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default memo(ContactForm);
