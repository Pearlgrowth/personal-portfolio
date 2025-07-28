"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Send,
  Calendar,
} from "lucide-react";
import { SocialLinks } from "@/components/social-links";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        const errorData = await response.json();
        console.error("API Error:", errorData.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wanguipearl1@gmail.com",
      href: "mailto:wanguipearl1@gmail.com?subject=Project Inquiry&body=Hi Pearl,%0D%0A%0D%0AI'd like to discuss a project with you.",
      color: "text-purple-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 738331300",
      href: "tel:+254738331300",
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "text-green-400",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to opportunities",
      href: "#",
      color: "text-orange-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-slate-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In Touch <span className="text-purple-400">📧</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to
              life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {"Let's start a conversation"}
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  I'm always excited about new opportunities and challenging
                  projects. Whether you want to collaborate, have a question, or
                  just want to connect, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group cursor-pointer"
                    target={
                      item.href.startsWith("mailto:") ||
                      item.href.startsWith("tel:")
                        ? "_self"
                        : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:") ||
                      item.href.startsWith("tel:")
                        ? ""
                        : "noopener noreferrer"
                    }
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow me on social media
                </h4>
                <SocialLinks className="justify-start" />
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Quick Response
                </h4>
                <p className="text-slate-300 text-sm">
                  I typically respond to emails within 24 hours. For urgent
                  matters, feel free to call or connect on LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Send me a message
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Fill out the form below and I'll get back to you as soon as
                    possible. I'd love to hear about your project!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault(); // prevent full page reload
                      const form = e.currentTarget;
                      const formData = new FormData(form);

                      const response = await fetch(
                        "https://formspree.io/f/xvgqrbaj",
                        {
                          method: "POST",
                          body: formData,
                          headers: {
                            Accept: "application/json",
                          },
                        }
                      );

                      if (response.ok) {
                        alert("Thank you! Your message has been sent.");
                        form.reset();
                      } else {
                        alert("There was an error. Please try again.");
                      }
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Inquiry"
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 text-green-300 bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                        <CheckCircle className="h-5 w-5" />
                        <span>
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 text-red-300 bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                        <AlertCircle className="h-5 w-5" />
                        <span>
                          Failed to send message. Please try again or email me
                          directly.
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
