import React from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckIcon, 
  StarIcon,
  ChartBarIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">LeaderSetup</h1>
              </div>
              <nav className="hidden md:ml-10 md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Streamline Your Team Leadership
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empower your team with intelligent task management, seamless collaboration, 
              and data-driven insights. Transform the way you lead and achieve exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Started Free
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop"
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to lead effectively
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to help you manage tasks, collaborate with your team, 
              and make data-driven decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ClipboardDocumentListIcon className="h-8 w-8" />,
                title: "Task Management",
                description: "Create, assign, and track tasks with intuitive workflows and real-time updates."
              },
              {
                icon: <UsersIcon className="h-8 w-8" />,
                title: "Team Collaboration",
                description: "Foster seamless communication and collaboration across your entire team."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Analytics & Reports",
                description: "Gain insights with comprehensive analytics and customizable reporting tools."
              },
              {
                icon: <CogIcon className="h-8 w-8" />,
                title: "Automation",
                description: "Automate repetitive tasks and workflows to boost productivity and efficiency."
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by teams worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about LeaderSetup
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Engineering Manager",
                company: "TechCorp",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
                content: "LeaderSetup has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Product Director",
                company: "InnovateLab",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
                content: "The analytics and reporting features give us incredible insights into our team's performance. It's become an essential tool for our organization.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Team Lead",
                company: "StartupXYZ",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
                content: "Simple, powerful, and effective. LeaderSetup helps us stay organized and focused on what matters most. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for your team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for small teams getting started",
                features: [
                  "Up to 5 team members",
                  "Basic task management",
                  "Email support",
                  "Mobile app access"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                price: "$29",
                period: "per month",
                description: "Best for growing teams and businesses",
                features: [
                  "Unlimited team members",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                  "Advanced reporting",
                  "Team collaboration tools"
                ],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                description: "For large organizations with specific needs",
                features: [
                  "Everything in Pro",
                  "Custom workflows",
                  "Dedicated support",
                  "SSO integration",
                  "Advanced security",
                  "Custom training"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg border-2 p-8 ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">/{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">LeaderSetup</h3>
              <p className="text-gray-400 mb-4">
                Streamline your team leadership with powerful tools and insights.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 LeaderSetup. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage