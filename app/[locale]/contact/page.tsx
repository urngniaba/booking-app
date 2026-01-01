import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
  return (
    <div>
      <div>Contact us page</div>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <ContactForm />
    </div>
  );
}
