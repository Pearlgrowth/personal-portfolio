"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Camera, User } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  currentImage?: string
  onImageChange: (imageUrl: string) => void
  className?: string
}

export function ImageUpload({ currentImage, onImageChange, className = "" }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    setUploading(true)

    try {
      // Create a local URL for preview
      const imageUrl = URL.createObjectURL(file)
      onImageChange(imageUrl)

      // In a real app, you would upload to your server/cloud storage here
      // const formData = new FormData()
      // formData.append('image', file)
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      // const { url } = await response.json()
      // onImageChange(url)
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Failed to upload image. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const removeImage = () => {
    onImageChange("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className={`bg-slate-800/50 border-slate-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Profile Image
        </CardTitle>
        <CardDescription className="text-slate-300">
          Upload your profile picture. Drag and drop or click to browse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Image Preview */}
          {currentImage && (
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-purple-500/30">
                <Image
                  src={currentImage || "/placeholder.svg"}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
              dragActive
                ? "border-purple-500 bg-purple-500/10"
                : "border-slate-600 hover:border-slate-500 hover:bg-slate-700/30"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={uploading}
            />

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center">
                {uploading ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                ) : (
                  <Upload className="h-8 w-8 text-slate-400" />
                )}
              </div>

              <div>
                <p className="text-white font-medium mb-1">
                  {uploading ? "Uploading..." : "Drop your image here, or browse"}
                </p>
                <p className="text-sm text-slate-400">Supports: JPG, PNG, GIF (max 5MB)</p>
              </div>

              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
              >
                <User className="mr-2 h-4 w-4" />
                Choose Image
              </Button>
            </div>
          </div>

          {/* Upload Tips */}
          <div className="text-xs text-slate-400 space-y-1">
            <p>• Best results with square images (1:1 ratio)</p>
            <p>• Recommended size: 400x400px or larger</p>
            <p>• Keep file size under 5MB for faster loading</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
