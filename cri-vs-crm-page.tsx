import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export default function CRIvsCRMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">CRI vs CRM</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding the difference between Customer Relationship Intelligence and Customer Relationship Management
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Transforming How Businesses Understand Customers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While CRM systems have been the standard for decades, Customer Relationship Intelligence (CRI) represents
              the next evolution in customer data utilization. Explore the key differences below.
            </p>
          </div>

          {/* Accordion Component */}
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-t-lg">
                What is Customer Relationship Management (CRM)?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-gray-50 rounded-b-lg mb-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">CRM Overview</h3>
                    <p className="mb-4">
                      Customer Relationship Management (CRM) is a technology for managing all your company's
                      relationships and interactions with customers and potential customers. The goal is simple: Improve
                      business relationships to grow your business.
                    </p>
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Key Characteristics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Contact management and storage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sales pipeline tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Task and activity management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic reporting and analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">CRM Limitations</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Primarily focused on transaction history</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Limited predictive capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Reactive rather than proactive</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Data often siloed and underutilized</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Limited integration with modern AI capabilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-t-lg">
                What is Customer Relationship Intelligence (CRI)?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-gray-50 rounded-b-lg mb-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">CRI Overview</h3>
                    <p className="mb-4">
                      Customer Relationship Intelligence (CRI) is an advanced approach that leverages AI, machine
                      learning, and data analytics to transform customer data into actionable intelligence. It goes
                      beyond storing information to actively generating insights.
                    </p>
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Key Advantages</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Predictive customer behavior analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Real-time personalization capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Automated insight generation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Holistic customer journey mapping</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Proactive opportunity identification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">How CRI Works</h3>
                    <p className="mb-4">
                      CRI systems integrate data from multiple sources, apply advanced analytics, and deliver actionable
                      intelligence that drives business growth.
                    </p>
                    <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-5 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">The CRI Process:</h4>
                      <ol className="space-y-2 list-decimal list-inside">
                        <li>Collect data from all customer touchpoints</li>
                        <li>Apply AI and machine learning algorithms</li>
                        <li>Generate predictive insights and recommendations</li>
                        <li>Deliver actionable intelligence to decision-makers</li>
                        <li>Continuously learn and improve from outcomes</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-t-lg">
                Key Differences: CRI vs CRM
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-gray-50 rounded-b-lg mb-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold text-gray-700">
                          Feature
                        </th>
                        <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold text-gray-700">
                          CRM
                        </th>
                        <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold text-blue-700">
                          CRI (Lumina)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-6 border-b border-gray-200 font-medium">Primary Focus</td>
                        <td className="py-3 px-6 border-b border-gray-200">Managing customer data and interactions</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-blue-800">
                          Generating actionable intelligence from customer data
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-6 border-b border-gray-200 font-medium">Data Approach</td>
                        <td className="py-3 px-6 border-b border-gray-200">Historical and descriptive</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-blue-800">
                          Predictive and prescriptive
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 border-b border-gray-200 font-medium">AI Integration</td>
                        <td className="py-3 px-6 border-b border-gray-200">Limited or bolted-on</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-blue-800">
                          Core functionality, deeply integrated
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-6 border-b border-gray-200 font-medium">Decision Support</td>
                        <td className="py-3 px-6 border-b border-gray-200">Basic reporting</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-blue-800">
                          Advanced recommendations and next-best-actions
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 border-b border-gray-200 font-medium">Customer Understanding</td>
                        <td className="py-3 px-6 border-b border-gray-200">Transaction-based</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-blue-800">
                          Behavioral and intent-based
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-6 border-b border-gray-200 font-medium">Business Impact</td>
                        <td className="py-3 px-6 border-b border-gray-200">Operational efficiency</td>
                        <td className="py-3 px-6 border-b border-gray-200 text-blue-800">
                          Strategic growth and competitive advantage
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-t-lg">
                Business Impact: Why Choose CRI?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-gray-50 rounded-b-lg">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-5 border-t-4 border-blue-600 shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Increased Revenue</h3>
                    <p>
                      Companies using CRI report an average 23% increase in revenue through improved customer targeting
                      and personalized engagement strategies.
                    </p>
                  </Card>
                  <Card className="p-5 border-t-4 border-teal-600 shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Enhanced Retention</h3>
                    <p>
                      Predictive churn analysis helps identify at-risk customers before they leave, increasing retention
                      rates by up to 37%.
                    </p>
                  </Card>
                  <Card className="p-5 border-t-4 border-purple-600 shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Operational Efficiency</h3>
                    <p>
                      Automated intelligence reduces manual analysis time by 68%, allowing teams to focus on strategy
                      rather than data processing.
                    </p>
                  </Card>
                </div>

                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Real-World Success Story</h3>
                  <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
                    "After implementing Lumina CRI, we saw a 42% increase in customer lifetime value and a 31% reduction
                    in acquisition costs. The predictive insights transformed how we approach our market."
                  </blockquote>
                  <p className="font-semibold">- Marketing Director, Fortune 500 Company</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Intelligence?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover how Lumina CRI can help your business move beyond traditional CRM to achieve true customer
            intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

