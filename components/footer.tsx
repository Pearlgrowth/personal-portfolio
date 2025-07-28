import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SocialLinks className="justify-center mb-6" />
          <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
            <p className="text-slate-600 dark:text-slate-400">
              © 2025 Pearl Wangui. Built with Next.js and Tailwind CSS.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Crafted with ❤️ and lots of coffee</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
