"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const quotes: Record<string, string[]> = {
  life: [
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "Life is short, and it's up to you to make it sweet."
  ],
  success: [
    "Success is not in what you have, but who you are.",
    "The secret of success is constancy to purpose.",
    "Success usually comes to those who are too busy to be looking for it."
  ]
}

export default function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = quotes[topic.toLowerCase()]
    setResults(found || ["No quotes found for this topic."])
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Enter a topic (e.g. life, success)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quotes</Button>
      </form>

      <div className="mt-6 space-y-2">
        {results.map((quote, index) => (
          <p key={index} className="text-muted-foreground text-sm">
            {quote}
          </p>
        ))}
      </div>
    </div>
  )
}
