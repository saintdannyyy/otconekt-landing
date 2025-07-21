"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Smartphone,
  Video,
  Calendar,
  Shield,
  Clock,
  Users,
  Star,
  Download,
  Play,
  CheckCircle,
  Zap,
  Globe,
  Lock,
  Heart,
  UserCheck,
  MessageCircle,
  BarChart3,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { useState } from "react"


export default function OTConektLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Connect with licensed occupational therapists anytime, anywhere",
    },
    {
      icon: UserCheck,
      title: "Easy Access",
      description: "Get paired with therapists based on your specific needs and location",
    },
    {
      icon: Video,
      title: "Secure Video Calls",
      description: "HIPAA-compliant video consultations with crystal-clear quality",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book appointments that fit your lifestyle and schedule",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your recovery journey with detailed analytics and insights",
    },
    {
      icon: MessageCircle,
      title: "Real-time Communication",
      description: "Stay connected with your therapist through secure messaging",
    },
  ]

  const clientFeatures = [
    "Easy appointment booking",
    "Progress tracking dashboard",
    "Educational resources library",
    "Secure file sharing",
    "Personalized care plans",
    "Mobile-friendly interface",
  ]

  const therapistFeatures = [
    "Expand your practice reach",
    "Flexible scheduling tools",
    "Comprehensive patient management",
    "Secure documentation system",
    "Revenue tracking dashboard",
    "Professional networking",
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Recovery Patient",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "OTConekt made my recovery so much easier. Having 24/7 access to my therapist changed everything.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Licensed OT",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "This platform has revolutionized how I practice. I can help more patients while maintaining quality care.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Chronic Pain Patient",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "The convenience and professional quality of care exceeded my expectations. Highly recommended!",
      rating: 5,
    },
  ]

  const stats = [
    { number: "$4.2B", label: "Global OT Market" },
    { number: "24/7", label: "Availability" },
    { number: "100%", label: "HIPAA Compliant" },
    { number: "2", label: "Platforms Supported" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/ot.png" alt="OTConekt Logo" width={40} height={40} className="rounded-full" />
                <span className="ml-2 text-xl font-bold text-gray-900">OTConekt</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#features" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                  Features
                </Link>
                <Link
                  href="#for-clients"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  For Clients
                </Link>
                <Link
                  href="#for-therapists"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  For Therapists
                </Link>
                <Link href="#security" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                  Security
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent w-full md:w-auto"
                >
                  Join as Therapist
                </Button>
              </Link>
              <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto">Download App</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600"
              >
                Features
              </Link>
              <Link
                href="#for-clients"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600"
              >
                For Clients
              </Link>
              <Link
                href="#for-therapists"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600"
              >
                For Therapists
              </Link>
              <Link
                href="#security"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600"
              >
                Security
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    Join as Therapist
                  </Button>
                </Link>
                <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Download App</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-16 pb-20 sm:pt-24 sm:pb-32 animate-fade-in-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div 
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left animate-fade-in-left"
            >
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
                Transform Your <span className="text-emerald-600">Recovery Journey</span> with OTConekt
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Connect with licensed occupational therapists anytime, anywhere. Professional rehabilitation services at
                your fingertips.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3 shadow-lg transition-all duration-200">
                    <Download className="mr-2 h-5 w-5" />
                    Download App
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 bg-white/60 backdrop-blur-md shadow transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                  Licensed Therapists
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                  24/7 Available
                </div>
              </div>
            </div>
            <div 
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center animate-fade-in-right"
            >
              <div className="animate-bounce-slow">
                <Image
                  src="/ot.png?height=600&width=500"
                  alt="OTConekt App Interface"
                  width={500}
                  height={600}
                  className="w-full rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-600">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className="py-20 bg-gray-50/80 backdrop-blur-lg animate-fade-in-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4">Core Features</Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl drop-shadow-md">
              Everything You Need for Successful Recovery
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and support you need for effective occupational therapy, whether you're a client or therapist.
            </p>
          </div>

          <div className="mt-16 overflow-hidden">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.12 + 0.2}s` }}
                >
                  <Card className="hover:shadow-2xl transition-shadow duration-300 bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4 shadow">
                        <feature.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual Audience Section */}
      <section className="py-20 bg-white/80 backdrop-blur-lg animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Built for Everyone in the Recovery Journey</h2>
            <p className="mt-4 text-xl text-gray-600">
              Whether you're seeking therapy or providing it, OTConekt has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Clients */}
            <div id="for-clients">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">For Clients</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Get the care you need with convenient access to licensed occupational therapists.
                  </p>
                  <ul className="space-y-3">
                    {clientFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                </Link>
                </CardContent>
              </Card>
            </div>

            {/* For Therapists */}
            <div id="for-therapists">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                      <UserCheck className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">For Therapists</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Expand your practice and help more patients with our comprehensive platform.
                  </p>
                  <ul className="space-y-3">
                    {therapistFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">Join as Therapist</Button>
                </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gray-50/80 backdrop-blur-lg animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 mb-4">Technology</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Cutting-Edge Technology for Better Care
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Built with modern technology stack to ensure reliability, security, and seamless user experience across
                all platforms.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg mr-4 mt-1">
                    <Smartphone className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cross-Platform Application</h4>
                    <p className="text-gray-600">Seamless experience on iOS, Android</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg mr-4 mt-1">
                    <Zap className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Communication</h4>
                    <p className="text-gray-600">Seamless messaging between Therapist and Client</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg mr-4 mt-1">
                    <Video className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WebRTC Video Integration</h4>
                    <p className="text-gray-600">High-quality, secure video consultations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg mr-4 mt-1">
                    <Globe className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy To Use</h4>
                    <p className="text-gray-600">Install directly from browser.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Image
                src="/video.webp?height=500&width=600"
                alt="Technology Dashboard"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/80 backdrop-blur-lg animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by Thousands of Users</h2>
            <p className="mt-4 text-xl text-gray-600">
              See what our clients and therapists are saying about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-20 bg-gray-50/80 backdrop-blur-lg animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4">Security & Compliance</Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Your Privacy and Security Come First</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your sensitive health information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                <p className="text-gray-600">
                  Full compliance with healthcare privacy regulations to protect your sensitive information.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                  <Lock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  All communications and data are encrypted using industry-standard protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  Your data is never shared without consent and you maintain full control over your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-2xl animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Get Started Today</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Download OTConekt now and take the first step towards better occupational therapy care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
            </Link>
            <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src="/qr.png?height=2000&width=200"
              alt="QR Code for App Download"
              width={150}
              height={150}
            />
          </div>
          <p className="text-emerald-100 mt-4 text-sm">Scan QR code for quick mobile download</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/95 text-white py-12 backdrop-blur-lg shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-xl font-bold">OTConekt</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Revolutionizing occupational therapy through innovative technology and compassionate care.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-emerald-600">HIPAA Compliant</Badge>
                <Badge className="bg-blue-600">Cross-Platform</Badge>
                <Badge className="bg-purple-600">24/7 Support</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 OTConekt. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-emerald-600 p-4 md:hidden z-40">
        <Link href="https://expo.dev/accounts/saintdannyyy/projects/otconekt/builds/76f2ef78-9b8c-4960-adcd-c4a07887de92" target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold">
            <Download className="mr-2 h-5 w-5" />
            Download OTConekt Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
