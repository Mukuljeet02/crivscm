"use client"

import { useState, useEffect } from "react"
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Brain,
  Database,
  TrendingUp,
  Zap,
  Shield,
  Code,
  LineChart,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnhancedCRIvsCRMComparison() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Handle scroll to track active section and sticky nav
  useEffect(() => {
    const handleScroll = () => {
      // Make navigation sticky after scrolling past hero
      setIsNavSticky(window.scrollY > 300)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.getAttribute("id") || "intro")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Video Background or Animation */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-teal-700/90 z-10"></div>

        {/* Background video or animated gradient could be added here */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 animate-gradient-x"></div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm py-2 px-4">
            Next Generation Customer Intelligence
          </Badge>
          <h1 className="text-6xl font-bold mb-6 text-white">Lumina CRI vs CRM</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">Transforming Data into Customer Intelligence</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">
              Explore the Difference
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request a Demo
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button variant="ghost" className="text-white rounded-full p-2" onClick={() => scrollToSection("intro")}>
              <ArrowRight className="h-6 w-6 rotate-90" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div
        className={`${isNavSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "relative"} bg-white transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="font-bold text-blue-900">Lumina CRI</div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Button
                    variant={activeSection === "intro" ? "default" : "ghost"}
                    className={activeSection === "intro" ? "bg-blue-600" : "text-gray-700"}
                    onClick={() => scrollToSection("intro")}
                  >
                    Introduction
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeSection === "comparison" ? "default" : "ghost"}
                    className={activeSection === "comparison" ? "bg-blue-600" : "text-gray-700"}
                    onClick={() => scrollToSection("comparison")}
                  >
                    Comparison
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeSection === "capabilities" ? "default" : "ghost"}
                    className={activeSection === "capabilities" ? "bg-blue-600" : "text-gray-700"}
                    onClick={() => scrollToSection("capabilities")}
                  >
                    Capabilities
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeSection === "agentic-ai" ? "default" : "ghost"}
                    className={activeSection === "agentic-ai" ? "bg-blue-600" : "text-gray-700"}
                    onClick={() => scrollToSection("agentic-ai")}
                  >
                    Agentic AI
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeSection === "success-stories" ? "default" : "ghost"}
                    className={activeSection === "success-stories" ? "bg-blue-600" : "text-gray-700"}
                    onClick={() => scrollToSection("success-stories")}
                  >
                    Success Stories
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section id="intro" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Evolution of Customer Management</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Beyond Traditional Customer Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Customer Relationship Intelligence (CRI) is a system that combines advanced analytics, artificial
              intelligence, and data management to provide businesses with deep insights into their customers. CRI goes
              beyond traditional customer management by ensuring data accuracy, uncovering trends, and predicting
              customer behaviors to help businesses make smarter decisions and build stronger relationships.
            </p>
          </div>

          {/* Evolution Visualization */}
          <div className="relative py-16">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-gray-300 via-blue-400 to-blue-600 transform -translate-y-1/2"></div>

            <div className="relative grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Database className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-800">Traditional CRM</h3>
                <p className="text-sm text-gray-600">Data storage & basic reporting</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-blue-800">Predictive CRM</h3>
                <p className="text-sm text-gray-600">Insights & predictions</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-blue-800">Lumina CRI</h3>
                <p className="text-sm text-gray-600">AI-powered intelligence & MDM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison - Interactive */}
      <section id="comparison" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Side-by-Side Comparison</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">CRM vs CRI: The Key Differences</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Lumina CRI transforms traditional customer relationship management with advanced intelligence
              and master data management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CRM Column */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gray-800 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Customer Relationship Management</h2>
                <p className="text-gray-300">Managing and automating customer relationships and workflows</p>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Database className="h-10 w-10 text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Operational Focus</h3>
                    <p className="text-gray-600">Streamlining sales, marketing, and service operations</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Contact management and storage</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Deal tracking and pipeline visualization</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Workflow automation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Basic reporting capabilities</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-5 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Limitations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Primarily structured data focusing on customer profiles</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Basic data entry and storage capabilities</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Limited data quality management</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Minimal AI integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CRI Column */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-700 to-teal-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Customer Relationship Intelligence</h2>
                    <p className="text-blue-100">Insights, intelligence, and extensive data management</p>
                  </div>
                  <Badge className="bg-white text-blue-700">Lumina CRI</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Brain className="h-10 w-10 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">Strategic Focus</h3>
                    <p className="text-gray-600">
                      Enhancing decision-making with actionable insights and data accuracy
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>AI-powered lead scoring and predictive analytics</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Advanced data cleansing and deduplication (MDM)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Trust scoring and sentiment analysis</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Golden record creation for unified customer view</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Agentic AI for dynamic decision-making</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg mb-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Advantages</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Combines structured, semi-structured, and unstructured data</p>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Real-time analytics and dynamic trust updates</p>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Proactive recommendations and next-best actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Comparison Table */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>

            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-gray-50 text-left text-gray-700 font-semibold border-b">Aspect</th>
                    <th className="py-4 px-6 bg-gray-50 text-left text-gray-700 font-semibold border-b">
                      Customer Relationship Management (CRM)
                    </th>
                    <th className="py-4 px-6 bg-blue-50 text-left text-blue-700 font-semibold border-b">
                      Customer Relationship Intelligence (CRI)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-b font-medium">Core Focus</td>
                    <td className="py-4 px-6 border-b">
                      Managing and automating customer relationships, interactions, and operational workflows
                    </td>
                    <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                      Insights, intelligence, and extensive data management capabilities, including Master Data
                      Management (MDM)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-b font-medium">Primary Objective</td>
                    <td className="py-4 px-6 border-b">
                      Streamlining sales, marketing, and service operations to improve customer satisfaction and
                      retention
                    </td>
                    <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                      Enhancing decision-making with actionable insights, ensuring data accuracy, trust, and consistency
                      through MDM
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-b font-medium">Data Utilization</td>
                    <td className="py-4 px-6 border-b">
                      Primarily structured data focusing on customer profiles and interaction records
                    </td>
                    <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                      Combines structured, semi-structured, and unstructured data from multiple sources with strong
                      focus on data deduplication and trust scoring
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-b font-medium">Technologies Used</td>
                    <td className="py-4 px-6 border-b">
                      CRM software for managing contacts, pipelines, and customer communication channels
                    </td>
                    <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                      AI/ML (e.g., lead scoring, churn prediction), predictive analytics, data governance, data lineage
                      tools, and MDM platforms
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 border-b font-medium">Data Management</td>
                    <td className="py-4 px-6 border-b">
                      Basic data entry and storage capabilities for managing customer profiles and contact details
                    </td>
                    <td className="py-4 px-6 border-b bg-blue-50 text-blue-800">
                      Advanced data cleansing, deduplication, and consolidation into a single source of truth through
                      MDM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities - Interactive Tabs */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Core Functionality</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Lumina CRI Key Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make Lumina CRI the next evolution in customer intelligence.
            </p>
          </div>

          <Tabs defaultValue="data-quality" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="data-quality" className="data-[state=active]:bg-blue-600">
                Data Quality & Trust
              </TabsTrigger>
              <TabsTrigger value="master-data" className="data-[state=active]:bg-blue-600">
                Master Data Management
              </TabsTrigger>
              <TabsTrigger value="ai-insights" className="data-[state=active]:bg-blue-600">
                AI & Predictive Insights
              </TabsTrigger>
              <TabsTrigger value="governance" className="data-[state=active]:bg-blue-600">
                Governance & Compliance
              </TabsTrigger>
            </TabsList>

            <div className="bg-white p-1 rounded-lg shadow-md">
              <TabsContent value="data-quality" className="mt-0 p-6 rounded-lg bg-gradient-to-br from-white to-blue-50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Data Quality & Trust Management</h3>
                    <p className="mb-4">
                      Lumina CRI ensures data accuracy and reliability through comprehensive trust management:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Trust Scoring:</span> Attribute-level scoring, entity-level
                          scoring, real-time scoring, auto source-reliability score
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Data Quality Validation:</span> Intelligent and adaptable DQ
                          Rules, real-time validation, API-based validation
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Golden Record Management:</span> Fine-grain survivorship
                          rules, attribute-level consolidation, steward override options
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Dynamic Trust Updates:</span> Customer interaction-based trust
                          updates, real-time score adjustments
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">
                      Success Story: Data Accuracy Revolution
                    </h4>
                    <div className="mb-4">
                      <p className="font-semibold">Challenge:</p>
                      <p>
                        Fragmented customer data led to duplicate and outdated customer records, reducing operational
                        efficiency.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold">Solution:</p>
                      <p>
                        Lumina CRI's deduplication and golden record creation ensured a single, accurate view of
                        customer data.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Impact:</p>
                      <p>
                        Improved data accuracy by 50%, to a sigma-6 level, reducing support resolution times by 30%.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="master-data" className="mt-0 p-6 rounded-lg bg-gradient-to-br from-white to-blue-50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Master Data Management</h3>
                    <p className="mb-4">Lumina CRI provides comprehensive master data management capabilities:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Golden Record Creation:</span> Customer data consolidation,
                          product data unification, supplier data reconciliation
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">AI-Driven Data Unification:</span> Intelligent attribute
                          mapping, automated conflict resolution, user feedback learning
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Real-Time Data Integration:</span> Batch imports, incremental
                          updates, synchronization with external systems
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Lineage & Audit Trail:</span> Lineage visualization, change
                          tracking, historical version management
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Success Story: Real-Time Customer View</h4>
                    <div className="mb-4">
                      <p className="font-semibold">Challenge:</p>
                      <p>
                        Fragmented customer data led to duplicate and outdated customer records, reducing operational
                        efficiency.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold">Solution:</p>
                      <p>
                        Lumina CRI's deduplication and golden record creation ensured a single, accurate view of
                        customer data.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Impact:</p>
                      <p>
                        Improved data accuracy by 50%, to a sigma-6 level, reducing support resolution times by 30%.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai-insights" className="mt-0 p-6 rounded-lg bg-gradient-to-br from-white to-blue-50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">AI & Predictive Insights</h3>
                    <p className="mb-4">Lumina CRI leverages advanced AI to deliver actionable insights:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Predictive Analytics:</span> Customer behavior modeling, churn
                          prediction, revenue forecasting
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Sentiment Analysis:</span> Email sentiment tagging, call
                          sentiment analysis, meeting sentiment scoring
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Proactive Recommendations:</span> Sales opportunity
                          recommendations, customer engagement suggestions, marketing campaign personalization
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Lead Scoring:</span> Engagement-based scoring, AI-prioritized
                          leads, predictive conversion likelihood
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Success Story: Lead Conversion Success</h4>
                    <div className="mb-4">
                      <p className="font-semibold">Challenge:</p>
                      <p>A sales team struggled to prioritize high-quality leads, resulting in low conversion rates.</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold">Solution:</p>
                      <p>
                        The AI-powered lead scoring enabled the team to focus on the top 20% of high-potential leads.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Impact:</p>
                      <p>Increased lead conversion rates by 35%, boosting quarterly revenue by 20%.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="governance" className="mt-0 p-6 rounded-lg bg-gradient-to-br from-white to-blue-50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Governance & Compliance</h3>
                    <p className="mb-4">Lumina CRI ensures data governance and regulatory compliance:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Compliance Monitoring:</span> GDPR monitoring, HIPAA
                          compliance tracking, data usage alerts
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Access Control:</span> Role-based permissions, access logging,
                          sensitive data masking
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Governance View:</span> Policy adherence metrics, access
                          violations, change request workflows
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">Audit and Reporting:</span> Compliance reporting, historical
                          data audits, external audit preparation
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Integrated Data Governance</h4>
                    <p className="mb-4">
                      Lumina CRI implements robust data governance features such as catalog, business and technical
                      metadata management, access control, audit trails, and compliance monitoring (e.g., GDPR, HIPAA,
                      BCBS).
                    </p>
                    <p className="font-semibold mb-2">Key Differentiator:</p>
                    <p>
                      A user-friendly compliance dashboard that tracks data usage, data lineage, and changes across
                      records. This dashboard offers real-time alerts for potential data quality issues or governance
                      violations, which appeals to companies prioritizing data compliance.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Agentic AI Section - Animated */}
      <section id="agentic-ai" className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white">Advanced Technology</Badge>
            <h2 className="text-4xl font-bold mb-4">Agentic AI: The Core of Lumina CRI</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Agentic AI redefines customer relationship intelligence by combining goal-driven adaptability with
              real-time decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-6 transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-2">
              <div className="mb-4">
                <Brain className="h-12 w-12 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dynamic Adaptation</h3>
              <p>
                Unlike traditional AI systems that rely on rigid workflows or static decision trees, Agentic AI
                dynamically adapts to ever-changing customer contexts.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-6 transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-2">
              <div className="mb-4">
                <LineChart className="h-12 w-12 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Intelligence</h3>
              <p>
                By leveraging advanced natural language processing, predictive analytics, and contextual awareness,
                Agentic AI enables Lumina CRI to navigate the complexities of human interactions.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-6 transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-2">
              <div className="mb-4">
                <Zap className="h-12 w-12 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proactive Engagement</h3>
              <p>
                With its ability to anticipate risks, respond to customer sentiment, and prioritize high-value
                opportunities, Agentic AI empowers businesses to foster deeper customer relationships.
              </p>
            </Card>
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Revolutionizing Sales Enablement with Agentic AI</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Challenges Addressed:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Difficulty in prioritizing high-quality leads</p>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Low conversion rates due to scattered insights</p>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Missed opportunities to grow revenue</p>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Lack of personalized engagement strategies</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Agentic AI Solutions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>AI-Powered Lead Scoring that dynamically prioritizes high-potential leads</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Proactive recommendations for next-best actions</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Behavioral insights that track customer behavior to uncover opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Personalized engagement recommendations for improved satisfaction</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-proposition" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Business Impact</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Value Proposition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Lumina CRI delivers measurable business value through enhanced customer intelligence.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg shadow-md mb-10">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Based on Research-backed Science</h3>
            <p className="text-lg text-center mb-6">
              A unified platform merging Master Data Management (MDM) with advanced CRM intelligence, enabling
              actionable insights and personalized engagements.
            </p>

            <div className="grid md:grid-cols-5 gap-4 mt-8">
              <Card className="p-4 border-t-4 border-blue-600 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <h4 className="font-semibold text-blue-800 mb-2">Single Source of Truth</h4>
                <p className="text-sm">Unified customer profiles from multiple sources</p>
              </Card>
              <Card className="p-4 border-t-4 border-teal-600 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <h4 className="font-semibold text-blue-800 mb-2">AI-Powered Insights</h4>
                <p className="text-sm">Predictive analytics, lead prioritization, sentiment analysis</p>
              </Card>
              <Card className="p-4 border-t-4 border-purple-600 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <h4 className="font-semibold text-blue-800 mb-2">Dynamic Trust Scoring</h4>
                <p className="text-sm">Real-time data quality and reliability metrics</p>
              </Card>
              <Card className="p-4 border-t-4 border-green-600 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <h4 className="font-semibold text-blue-800 mb-2">Scalable Integration</h4>
                <p className="text-sm">API-first architecture & open-source data lakes</p>
              </Card>
              <Card className="p-4 border-t-4 border-red-600 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <h4 className="font-semibold text-blue-800 mb-2">Real-Time Analytics</h4>
                <p className="text-sm">Actionable dashboards for sales, marketing, and support teams</p>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Strategic Importance</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Data Quality and Trust Management:</span> Ensures data reliability and
                  foundational quality
                </p>
              </li>
              <li className="flex items-start">
                <Database className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Master Data Management:</span> Provides a unified, trusted data
                  backbone
                </p>
              </li>
              <li className="flex items-start">
                <Brain className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">AI and Predictive Insights:</span> Drives customer-centric strategies
                  and revenue growth
                </p>
              </li>
              <li className="flex items-start">
                <Code className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Scalability and Operational Efficiency:</span> Future-proofs the
                  technology stack
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories - Card Carousel */}
      <section id="success-stories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Real Results</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how organizations have transformed their customer relationships with Lumina CRI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="bg-blue-700 p-4 text-white">
                <h3 className="font-bold text-lg">Lead Conversion Success</h3>
              </div>
              <div className="p-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="mb-4 text-sm">
                  A sales team struggled to prioritize high-quality leads, resulting in low conversion rates.
                </p>

                <p className="font-semibold mb-2">Solution:</p>
                <p className="mb-4 text-sm">
                  The AI-powered lead scoring enabled the team to focus on the top 20% of high-potential leads.
                </p>

                <p className="font-semibold mb-2">Impact:</p>
                <p className="text-sm">Increased lead conversion rates by 35%, boosting quarterly revenue by 20%.</p>
              </div>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="bg-teal-700 p-4 text-white">
                <h3 className="font-bold text-lg">Data Accuracy Revolution</h3>
              </div>
              <div className="p-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="mb-4 text-sm">
                  Fragmented customer data led to duplicate and outdated customer records, reducing operational
                  efficiency.
                </p>

                <p className="font-semibold mb-2">Solution:</p>
                <p className="mb-4 text-sm">
                  Lumina CRI's deduplication and golden record creation ensured a single, accurate view of customer
                  data.
                </p>

                <p className="font-semibold mb-2">Impact:</p>
                <p className="text-sm">
                  Improved data accuracy by 50%, to a sigma-6 level, reducing support resolution times by 30%.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="bg-purple-700 p-4 text-white">
                <h3 className="font-bold text-lg">Insights that Drive Strategy</h3>
              </div>
              <div className="p-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="mb-4 text-sm">
                  Lack of visibility into sales pipeline and customer interaction history hindered strategic
                  decision-making.
                </p>

                <p className="font-semibold mb-2">Solution:</p>
                <p className="mb-4 text-sm">
                  Lumina CRI's real-time reporting dashboard provided insights into lead status, customer engagement,
                  and data quality metrics.
                </p>

                <p className="font-semibold mb-2">Impact:</p>
                <p className="text-sm">
                  Enabled sales managers to prioritize opportunities, reducing pipeline bottlenecks and increasing
                  forecast accuracy by 25%.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Intelligence?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover how Lumina CRI can help your business move beyond traditional CRM to achieve true customer
            intelligence with our unified MDM and AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

