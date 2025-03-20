import { CheckCircle, XCircle, ArrowRight, BarChart3, Users, Brain, Database, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CRIvsCRMVisualComparison() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">CRI vs CRM</h1>
          <p className="text-xl max-w-3xl mx-auto">The Evolution of Customer Intelligence</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Beyond Traditional Customer Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While CRM systems have been the standard for decades, Customer Relationship Intelligence (CRI) represents
              the next evolution in how businesses understand and engage with customers.
            </p>
          </div>

          {/* Evolution Arrow */}
          <div className="relative flex justify-center items-center my-12">
            <div className="w-1/3 h-2 bg-gray-300"></div>
            <div className="mx-4">
              <ArrowRight className="h-10 w-10 text-blue-600" />
            </div>
            <div className="w-1/3 h-2 bg-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* CRM Column */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gray-800 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Customer Relationship Management</h2>
                <p className="text-gray-300">Traditional approach to customer data</p>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Database className="h-10 w-10 text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Data Storage Focus</h3>
                    <p className="text-gray-600">Primarily stores and organizes customer information</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Contact information management</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Sales pipeline tracking</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Basic reporting capabilities</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Task and activity management</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-5 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Limitations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Limited predictive capabilities</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Reactive rather than proactive</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Data often siloed across departments</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Minimal AI integration</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="h-10 w-10 text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Business Impact</h3>
                    <p className="text-gray-600">Operational efficiency and organization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CRI Column */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
              <div className="bg-gradient-to-r from-blue-700 to-teal-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Customer Relationship Intelligence</h2>
                    <p className="text-blue-100">AI-powered customer insights</p>
                  </div>
                  <Badge className="bg-white text-blue-700">Lumina CRI</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Brain className="h-10 w-10 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">Intelligence Generation Focus</h3>
                    <p className="text-gray-600">Transforms data into actionable intelligence</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Predictive customer behavior analysis</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>AI-powered recommendation engine</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Automated insight generation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Holistic customer journey mapping</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Proactive opportunity identification</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg mb-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Advantages</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>23% average increase in customer conversion rates</p>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>37% improvement in customer retention</p>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>68% reduction in manual analysis time</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <TrendingUp className="h-10 w-10 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">Business Impact</h3>
                    <p className="text-gray-600">Strategic growth and competitive advantage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Feature Comparison</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-gray-50 text-left text-gray-700 font-semibold border-b">Feature</th>
                  <th className="py-4 px-6 bg-gray-50 text-left text-gray-700 font-semibold border-b">
                    Traditional CRM
                  </th>
                  <th className="py-4 px-6 bg-blue-50 text-left text-blue-700 font-semibold border-b">Lumina CRI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">Data Analysis</td>
                  <td className="py-4 px-6 border-b">Basic reporting on historical data</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">Advanced predictive analytics with AI</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">Customer Insights</td>
                  <td className="py-4 px-6 border-b">Transaction-based profiles</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                    Behavioral and intent-based understanding
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">Decision Support</td>
                  <td className="py-4 px-6 border-b">Manual analysis required</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                    Automated recommendations and next-best-actions
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">Integration Capabilities</td>
                  <td className="py-4 px-6 border-b">Limited to specific data sources</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                    Seamless integration with all customer touchpoints
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">Personalization</td>
                  <td className="py-4 px-6 border-b">Basic segmentation</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">Real-time hyper-personalization</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">Scalability</td>
                  <td className="py-4 px-6 border-b">Limited by manual processes</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                    Fully scalable with automated intelligence
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b font-medium">ROI Timeline</td>
                  <td className="py-4 px-6 border-b">Gradual operational improvements</td>
                  <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">Rapid strategic impact on revenue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-900 to-teal-700 p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Success Story</h3>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">From CRM to CRI: A Transformation</h3>
                <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 mb-6 text-gray-600">
                  "After implementing Lumina CRI, we saw a 42% increase in customer lifetime value and a 31% reduction
                  in acquisition costs. The predictive insights transformed how we approach our market."
                </blockquote>
                <p className="font-semibold text-gray-800">- Marketing Director, Fortune 500 Company</p>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-700">42%</p>
                    <p className="text-sm text-gray-600">Increase in Customer Lifetime Value</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-700">31%</p>
                    <p className="text-sm text-gray-600">Reduction in Acquisition Costs</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-700">3.5x</p>
                    <p className="text-sm text-gray-600">ROI in First Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Evolve Beyond CRM?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover how Lumina CRI can transform your customer data into actionable intelligence that drives growth and
            creates competitive advantage.
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

