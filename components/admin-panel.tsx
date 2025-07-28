"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "@/components/image-upload"
import { Settings, Save, EyeOff } from "lucide-react"

export function AdminPanel() {
  const [isVisible, setIsVisible] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Pearl Wangui",
    title: "Full Stack Developer",
    description: "Passionate about creating beautiful, functional, and user-centered digital experiences.",
    email: "pearl.wangui@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    profileImage: "",
    bio: "I'm Pearl Wangui, a passionate full-stack developer with over 5 years of experience creating innovative digital solutions. I love transforming complex challenges into elegant, user-friendly applications.",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (imageUrl: string) => {
    setProfileData((prev) => ({
      ...prev,
      profileImage: imageUrl,
    }))
  }

  const handleSave = () => {
    // In a real app, you would save to your backend/database
    console.log("Saving profile data:", profileData)
    alert("Profile updated successfully!")
  }

  if (!isVisible) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* <Button
          onClick={() => setIsVisible(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Settings className="mr-2 h-4 w-4" />
          Edit Profile
        </Button> */}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <div>
            {/* <h2 className="text-2xl font-bold text-white">Edit Profile</h2> */}
            <p className="text-slate-400">Update your portfolio information</p>
          </div>
          <Button variant="ghost" onClick={() => setIsVisible(false)}>
            <EyeOff className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Profile Image Upload */}
            <ImageUpload currentImage={profileData.profileImage} onImageChange={handleImageChange} />

            {/* Basic Info */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Basic Information</CardTitle>
                <CardDescription className="text-slate-300">Your main profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="title" className="text-slate-300">
                    Professional Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={profileData.title}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-slate-300">
                    Short Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={profileData.description}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
              <CardDescription className="text-slate-300">How people can reach you</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-slate-300">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-slate-300">
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">About Me</CardTitle>
              <CardDescription className="text-slate-300">Your detailed bio for the about section</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                className="bg-slate-700/50 border-slate-600 text-white min-h-[120px]"
                placeholder="Tell your story..."
              />
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button variant="outline" onClick={() => setIsVisible(false)} className="border-slate-600 text-slate-300">
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
