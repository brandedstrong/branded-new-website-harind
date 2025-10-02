import emailjs from "@emailjs/browser";

/**
 * Contact Form Email Service
 *
 * This service handles sending contact form submissions to harindersindiit@gmail.com
 *
 * SETUP INSTRUCTIONS:
 *
 * Method 1: EmailJS (Recommended for production)
 * 1. Create account at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with variables: {{to_email}}, {{from_name}}, {{from_email}}, {{phone}}, {{company_name}}, {{website_url}}, {{project_description}}
 * 4. Create a .env.local file in your project root with:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *    VITE_CONTACT_EMAIL=harindersindiit@gmail.com
 *
 * Method 2: Mailto Fallback (Works immediately)
 * - If EmailJS fails or isn't configured, the form will open the user's default email client
 * - This method works out of the box but requires user interaction
 *
 * Method 3: Formspree (Alternative)
 * - Uncomment the Formspree function and get form ID from https://formspree.io/
 * - Replace the form action in handleSubmit function
 */

// EmailJS configuration - these will come from environment variables or fallback to defaults
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_contact_form";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact_form";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here";
const TARGET_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "harindersindiit@gmail.com";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  projectDescription: string;
}

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<void> => {
  try {
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: TARGET_EMAIL,
      name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.companyName,
      website: formData.websiteUrl,
      message: formData.projectDescription,
      reply_to: formData.email,
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    };

    console.log(EMAILJS_SERVICE_ID);
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      console.log("Email sent successfully!", response);
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Alternative method using Formspree (if you prefer not to use EmailJS)
export const sendContactEmailFormspree = async (
  formData: ContactFormData
): Promise<void> => {
  try {
    const response = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.fullName,
        phone: formData.phone,
        company: formData.companyName,
        website: formData.websiteUrl,
        message: formData.projectDescription,
        _replyto: formData.email,
        _subject: `New Contact Form Submission from ${formData.fullName}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email via Formspree:", error);
    throw error;
  }
};

// Simple mailto fallback for immediate implementation
export const createMailtoLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent(
    `Contact Form Submission from ${formData.fullName}`
  );
  const body = encodeURIComponent(`
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.companyName}
Website: ${formData.websiteUrl}

Project Description:
${formData.projectDescription}
  `);

  return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
};
