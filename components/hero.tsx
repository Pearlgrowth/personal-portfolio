"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download, MapPin, BookOpen } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image"; // Import Image component
import pearlImage from "../public/pearl-image.jpeg";
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div
            className={`mb-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                  {/* Use Image component for profile picture */}
                  <Image
                    src={pearlImage}
                    alt="Pearl Wangui"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`mb-6 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg text-purple-300 mb-2 font-medium">
              👋 Hey, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white drop-shadow-lg">
              Pearl Wangui
            </h1>
            <p className="text-xl md:text-3xl mb-3">
              A passionate{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
                Full Stack Developer
              </span>
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
              specialized in building stunning pixel-perfect interactive
              websites/applications.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 mb-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.open(
                  "mailto:wanguipearl1@gmail.com?subject=Let's%20work%20together&body=Hi%20Pearl,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.",
                  "_blank"
                );
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300 bg-transparent"
             onClick={() => window.open("https://www.gaif.ai/articles/6", "_blank")}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Read My Blogs
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <SocialLinks className="justify-center" variant="ghost" />
          </div>

          {/* Scroll Indicator */}
          <div
            className={`animate-bounce transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <ArrowDown className="h-6 w-6 mx-auto text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
