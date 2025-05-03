"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const AIPage = () => {
  const aiTrends = [
    {
      title: "AI Agents",
      description: "Autonomous systems that can plan, reason, and execute complex tasks",
      icon: "🤖",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Multimodal AI",
      description: "Models that understand and generate across text, images, and video",
      icon: "🎨",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Edge AI",
      description: "AI processing on local devices for faster, more private applications",
      icon: "📱",
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI Safety",
      description: "Focus on developing safe, ethical, and aligned AI systems",
      icon: "🛡️",
      color: "from-red-500 to-red-600"
    }
  ];

  const latestDevelopments = [
    {
      title: "OpenAI's Sora",
      description: "Revolutionary text-to-video model with unprecedented quality and coherence",
      date: "February 15, 2024"
    },
    {
      title: "Gemini 1.5",
      description: "Google's breakthrough in long-context understanding with 1M token capacity",
      date: "February 15, 2024"
    },
    {
      title: "Claude 3",
      description: "Anthropic's latest model with improved reasoning and safety features",
      date: "March 4, 2024"
    }
  ];

  const blogPosts = [
    {
      title: "The Rise of AI Agents: Beyond ChatGPT",
      description: "Exploring how autonomous AI systems are changing the landscape of artificial intelligence",
      date: "March 15, 2024",
      readTime: "8 min read",
      link: "/blog/ai-agents"
    },
    {
      title: "OpenAI's Sora: The Future of Video Generation",
      description: "A deep dive into OpenAI's revolutionary text-to-video model and its implications",
      date: "March 1, 2024",
      readTime: "6 min read",
      link: "/blog/sora-analysis"
    },
    {
      title: "Gemini 1.5: Google's Leap in Context Understanding",
      description: "Analyzing Google's breakthrough in long-form context processing",
      date: "March 15, 2024",
      readTime: "7 min read",
      link: "/blog/gemini-1.5"
    }
  ];

  const aiAgents = [
    {
      name: "OpenAI's GPT-4",
      strengths: ["Exceptional reasoning", "Creative writing", "Code generation"],
      context: "32k tokens (GPT-4 Turbo)",
      specialization: "General-purpose tasks",
      integration: "Extensive API ecosystem",
      icon: "🧠"
    },
    {
      name: "Anthropic's Claude",
      strengths: ["Ethical alignment", "Safety features", "Document analysis"],
      context: "200k tokens (Claude 3)",
      specialization: "Long document processing",
      integration: "Enterprise applications",
      icon: "🤝"
    },
    {
      name: "Meta's Llama",
      strengths: ["Open-source", "Customization", "Research flexibility"],
      context: "Up to 32k tokens",
      specialization: "Research and development",
      integration: "Community support",
      icon: "🦙"
    },
    {
      name: "Mistral AI",
      strengths: ["Efficient performance", "Small model size", "Cost-effective"],
      context: "Up to 32k tokens",
      specialization: "Enterprise deployment",
      integration: "Growing ecosystem",
      icon: "🌪️"
    }
  ];

  return (
    <motion.div
      className="min-h-screen pt-12 px-4 md:px-8 lg:px-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI Insights
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Exploring the latest developments and trends in artificial intelligence. From breakthroughs in language models to the future of autonomous systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/blog"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Read My Blog
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src="/AI.png"
              alt="AI Brain"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="relative z-0 py-32 px-4 overflow-hidden -skew-y-6 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-4 mb-24" style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div className="absolute inset-0 w-[120vw] left-1/2 -translate-x-1/2 min-h-[700px] h-full -z-10">
          <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary opacity-90" />
        </div>
        <div className="skew-y-6 relative max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Areas of Focus
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTrends.map((trend, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${trend.color} text-white w-16 h-16 rounded-full flex items-center justify-center`}>
                  {trend.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{trend.title}</h3>
                <p className="text-white">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Market Comparison Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-black mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AI Agent Market Comparison
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiAgents.map((agent, index) => (
            <motion.div
              key={index}
              className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-black">{agent.icon}</div>
                <h3 className="text-xl font-bold text-black">{agent.name}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black">Strengths</h4>
                  <ul className="list-disc list-inside text-black">
                    {agent.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Context Window</h4>
                  <p className="text-black">{agent.context}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Specialization</h4>
                  <p className="text-black">{agent.specialization}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Integration</h4>
                  <p className="text-black">{agent.integration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Developments and Blog Posts Section */}
      <section className="relative z-0 py-32 px-4 overflow-hidden w-screen left-1/2 right-1/2 mt-4 " style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div className="absolute inset-0 w-[120vw] left-1/2 -translate-x-1/2 min-h-[700px] h-full -z-10">
          <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary opacity-90" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Latest Developments & Blog Posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Latest Developments */}
            {latestDevelopments.map((dev, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/20 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{dev.title}</h3>
                <p className="text-white mb-4 flex-grow">{dev.description}</p>
                <p className="text-sm text-white/80">{dev.date}</p>
              </motion.div>
            ))}
            {/* Blog Posts */}
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/20 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                <p className="text-white mb-4 flex-grow">{post.description}</p>
                <div className="flex justify-between items-center text-sm text-white/80">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={post.link}
                  className="mt-4 inline-block text-white hover:text-white/80 transition-colors"
                >
                  Read more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AIPage; 