// Example of how to use the new components
import { SectionHeading, SubsectionHeading } from "./section-headings"
import { EnhancedButton } from "./enhanced-buttons"

export function ExampleSection() {
  return (
    <>
      {/* Example of a main section with the new heading component */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading
            badge="Core Functionality"
            title="Lumina CRI Key Capabilities"
            description="Discover the powerful features that make Lumina CRI the next evolution in customer intelligence."
          />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <SubsectionHeading title="Data Quality & Trust Management" />
            <p className="mb-4">
              Lumina CRI ensures data accuracy and reliability through comprehensive trust management.
            </p>
            {/* Rest of the content */}
          </div>
        </div>
      </section>

      {/* Example of a dark-themed section */}
      <section id="agentic-ai" className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading
            badge="Advanced Technology"
            title="Agentic AI: The Core of Lumina CRI"
            description="Agentic AI redefines customer relationship intelligence by combining goal-driven adaptability with real-time decision-making."
            theme="dark"
          />

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <SubsectionHeading title="Revolutionizing Sales Enablement with Agentic AI" theme="dark" />
            {/* Rest of the content */}
          </div>

          <div className="mt-12 text-center">
            <EnhancedButton variant="primary" size="lg">
              Request a Demo
            </EnhancedButton>
            <EnhancedButton variant="secondary" size="lg" className="ml-4">
              Learn More
            </EnhancedButton>
          </div>
        </div>
      </section>
    </>
  )
}

