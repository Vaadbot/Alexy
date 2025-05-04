import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, SendHorizonal } from "lucide-react";

export default function AlexyAssistant() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    { sender: "Alexy", text: "Hi! I'm Alexy, your private Vaad agent. How can I help today?" }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChatLog([...chatLog, { sender: "You", text: message }]);
    setMessage("");
    // Simulate Alexy response
    setTimeout(() => {
      setChatLog(prev => [...prev, { sender: "Alexy", text: "Got it! I'm on it 🚀" }]);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card className="shadow-xl rounded-2xl p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/alexy-profile.jpg"
            alt="Alexy"
            className="w-16 h-16 rounded-full border-2 border-violet-500"
          />
          <div>
            <h2 className="text-lg font-bold">Vaadbot AI - Alexy</h2>
            <p className="text-sm text-muted">Your Private Vaad Agent</p>
          </div>
        </div>
        <CardContent className="mt-4 h-64 overflow-y-auto space-y-2">
          {chatLog.map((entry, i) => (
            <div key={i} className={`text-sm ${entry.sender === "Alexy" ? "text-purple-700" : "text-gray-800"}`}>
              <strong>{entry.sender}:</strong> {entry.text}
            </div>
          ))}
        </CardContent>
        <div className="flex gap-2 mt-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Alexy..."
            className="flex-grow"
          />
          <Button onClick={handleSend}><SendHorizonal size={18} /></Button>
          <Button variant="ghost"><Mic size={18} /></Button>
        </div>
      </Card>
    </div>
  );
}
