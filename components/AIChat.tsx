import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';
import { PERSONAL_INFO } from '../constants';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `Hello! I'm ${PERSONAL_INFO.name}'s AI Career Assistant. Ask me anything about his experience in NR/LTE Protocol Stack development, embedded systems, or his work at MediaTek. How can I help you?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedQueries = [
    "What is Cheng-hung's expertise in 5G?",
    'Tell me about the NTN cell selection project',
    'What was the IEEE ICASI 2018 paper about?',
    '介紹一下他的工作經歷',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await geminiService.chatWithAI(userMessage, messages);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection timeout. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuery = (query: string) => {
    setInput(query);
  };

  return (
    <section id="ai-chat" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">AI Career Assistant</h2>
          <p className="text-gray-500 fira-code text-sm">Ask me anything about Cheng-hung&apos;s experience and skills</p>
        </div>

        <div className="glass rounded-2xl overflow-hidden border border-white/5">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs text-gray-500 fira-code">career-assistant</span>
            </div>
            <span className="text-[10px] fira-code text-green-400/60 uppercase tracking-widest">
              Status: Online
            </span>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-slate-800/50 text-gray-300 rounded-bl-md border border-white/5'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 text-gray-400 px-4 py-3 rounded-2xl rounded-bl-md text-sm border border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="fira-code text-xs">Processing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Queries */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {suggestedQueries.map((query) => (
                <button
                  key={query}
                  onClick={() => handleSuggestedQuery(query)}
                  className="px-3 py-1.5 text-xs text-gray-400 bg-white/5 rounded-lg hover:bg-blue-500/10 hover:text-blue-300 transition-colors fira-code"
                >
                  {query}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/5">
            <div className="flex gap-3">
              <span className="text-blue-500 fira-code font-bold pt-2.5">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, skills, projects..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 outline-none fira-code text-sm py-2"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
