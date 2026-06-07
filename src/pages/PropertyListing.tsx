import { Link } from "react-router-dom";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Scope of Agreement",
    content:
      "The Host agrees to list their property on Book My Adda's platform for the purpose of short-term accommodation bookings. This agreement governs the rules of listing, booking management and revenue share.",
  },
  {
    title: "Listing Terms & Obligations",
    points: [
      "The Host shall provide accurate details about the property including images, pricing, availability and house rules.",
      "The Host agrees to maintain the property in a clean and hospitable condition for guests.",
      "The Host shall provide updated availability and pricing in real-time.",
      "The Platform reserves the right to remove or modify a listing that violates terms or receives multiple complaints.",
    ],
  },
  {
    title: "Commission & Payment Terms",
    points: [
      "The Host agrees to pay the platform a commission on every successful booking as per the selected plan.",
      "Payouts to the Host will be processed within 10 days after the guest checks out.",
      "The Host is responsible for any applicable taxes on earnings and agrees to comply with local taxation laws.",
    ],
  },
  {
    title: "Cancellation & Refunds",
    points: [
      "The Host must specify their cancellation policy (Flexible, Moderate, Strict) at the time of listing.",
      "In the event of cancellation by the Platform, they may be subject to penalties as per the refund conditions on the Platform's cancellation policy.",
      "Refunds to guests will be handled as per the Host's chosen cancellation policy and the Platform's service guidelines.",
    ],
  },
  {
    title: "Liability & Indemnification",
    points: [
      "The Platform is not liable for any damages, theft, or incidents occurring at the Host's property.",
      "The Host agrees to indemnify the Platform from any legal claim arising from the Host or any third-party.",
      "The Host shall carry appropriate insurance coverage for their property and operation.",
    ],
  },
  {
    title: "Termination & Breach",
    points: [
      "Either party may terminate this agreement with a 10-day prior written notice.",
      "The Platform may terminate this agreement immediately if the Host engages in fraudulent activity, violates terms, or receives multiple guest complaints.",
    ],
  },
];

const PropertyListing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationBar />

      <div className="w-[90%] max-w-[800px] mx-auto my-5 bg-card p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-extrabold text-foreground mb-4">Property Listing Agreement</h1>
        <p className="text-muted-foreground mb-3">
          This agreement is made on <strong>21st February 2025</strong> between:
        </p>
        <p className="text-foreground leading-relaxed mb-3">
          <strong>Book My Adda Pvt Ltd.</strong>, a company registered under the laws of India, with
          its registered office at [address]
        </p>
        <p className="text-foreground leading-relaxed mb-3">
          <strong>Property Owner/Manager Name</strong>, the legal owner or authorized representative
          of the property located at <strong>Property Address</strong>.
        </p>

        {sections.map((section, i) => (
          <section key={i} className="mt-6">
            <h2 className="text-lg font-bold text-foreground mb-2">
              {i + 1}) {section.title}
            </h2>
            {section.content && <p className="text-muted-foreground leading-relaxed">{section.content}</p>}
            {section.points && (
              <ol className="ml-5 text-muted-foreground leading-relaxed">
                {section.points.map((pt, idx) => (
                  <li key={idx} className="mb-1.5">{pt}</li>
                ))}
              </ol>
            )}
          </section>
        ))}

        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground mb-2">7) Governing Law & Dispute Resolution</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Agreement shall be governed by the laws of India. Any dispute shall be resolved
            through arbitration in [City], and the decision shall be final and binding on both
            parties.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold text-foreground mb-2">8) Acceptance</h2>
          <p className="text-muted-foreground leading-relaxed">
            By signing below, both parties agree to the terms and conditions outlined in this
            contract.
          </p>
        </section>

        <div className="flex justify-between gap-10 mt-8 pt-5 border-t border-border">
          <p className="text-foreground leading-relaxed">
            <strong>For Book My Adda Pvt Ltd</strong>
            <br />Authorized Representative
            <br />Designation:
            <br />Date:
          </p>
          <p className="text-foreground leading-relaxed">
            <strong>For Host (Property Owner/ Manager Name)</strong>
            <br />Name:
            <br />Signature:
            <br />Date:
          </p>
        </div>

        <Link to="/pricing">
          <button className="w-full mt-8 bg-primary text-primary-foreground border-none py-3.5 rounded-lg font-bold text-lg cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all">
            Select your Listing Plan
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyListing;
