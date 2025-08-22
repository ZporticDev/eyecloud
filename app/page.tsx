// app/page.tsx
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">UI Library Storage 7</h1>
      <div className="flex gap-4">
        <Button
          asChild
          variant="default"
          className="bg-white text-black hover:bg-gray-200 border border-gray-800"
        >
          <a href="https://discord.gg/xxxx" target="_blank" rel="noopener noreferrer">
            Join Discord
          </a>
        </Button>
        <Button
          asChild
          variant="default"
          className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800"
        >
          <a href="https://github.com/xxxx" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}
