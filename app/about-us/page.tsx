"use client";

import { motion, MotionConfig } from 'framer-motion';
import {
  LucideCheckCircle,
  LucideRocket,
  LucideUserCheck,
  LucideTarget,
  LucideLock,
  LucideQuote,
  LucideLayoutGrid,
  LucideUsers,
  LucideBookOpen,
  LucideTrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
      text: "We",
    },
    {
      text: "Build",
      
    },
    {
      text: "Bots.",
      className: "text-primary",
    },
    {
      text: "You",
    },
    {
      text: "focus",
    },
    {
      text: "on",
      
    },
    {
      text: "Winning",
      
    },
  ];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
    <MotionConfig transition={{ duration: 0.6, ease: 'easeInOut' }}>
      <main className="px-2 sm:px-6 md:px-20 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto py-20">
          
          <TypewriterEffectSmooth words={words} />
          <p className="mt-6 text-lg">
            TechNests is the mission-driven, trader-first AI automation company empowering evaluation and funded traders to win — consistently, confidently, and without burnout.
          </p>
          <p className="mt-2 font-semibold text-primary">
            We don’t give capital. We give you the engine to conquer it.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 rounded-xl p-10 text-center shadow-sm">
          <LucideRocket className="mx-auto mb-4 text-primary" size={40} />
          <h2 className="text-2xl font-bold mb-2">🚀 OUR MISSION</h2>
          <p className="text-lg">
            To unlock sustainable success for prop firm traders through intelligent automation — removing guesswork, enhancing discipline, and enabling payouts.
          </p>
        </section>

        {/* Why We Exist */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">👨‍⚖️ WHY TECHNESTS EXISTS</h2>
            <ul className="space-y-2 text-lg">
              <li>Today, over 90% of traders fail prop firm evaluations.</li>
              <li><strong>Not</strong> because they’re undisciplined.</li>
              <li><strong>Not</strong> because they lack edge.</li>
              <li>But because the evaluation process demands precision, consistency, and emotional control — every single day.</li>
              <li className="mt-4">We’ve walked this path. That’s why we built TechNests: a full-stack automation system engineered for the <em>real-world chaos</em> of prop trading.</li>
            </ul>
          </div>
          <motion.div
            className="rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
            src="/assets/technest-bot.png" 
            alt="Trader stressed out at computer"
            className="rounded-xl shadow-md"
          />
          </motion.div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-primary/5 rounded-xl p-10 shadow-inner">
          <h2 className="text-2xl font-bold mb-4">🧠 WHAT MAKES US DIFFERENT</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>We’re not a signal provider</li>
            <li>We’re not a marketplace</li>
            <li>We’re not a brokerage</li>
          </ul>
          <div className="bg-white mt-6 p-6 rounded-lg shadow text-lg">
            👉 <strong>We’re your trading brain — in a box.</strong><br/>
            TechNests bots are hyper-personalized, AI-enhanced assistants that:
            <ul className="list-disc list-inside mt-3 ml-4 space-y-1">
              <li>Run locally</li>
              <li>Follow your firm’s rules</li>
              <li>Execute trades without ego or exhaustion</li>
            </ul>
          </div>
        </section>

        {/* Impact By The Numbers */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">🏆 IMPACT BY THE NUMBERS</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              ['1,100+ bots deployed', 'Across Apex, Topstep, Elite, and more'],
              ['78% success rate', 'Funded account retention vs. 12% industry avg.'],
              ['2.7x faster payout', 'Time to first withdrawal'],
              ['6+ hrs saved daily', 'Per trader'],
              ['94% satisfaction', 'With "hands-off" mode'],
              ['14+ countries', '100% trader-owned accounts']
            ].map(([stat, desc], i) => (
              <motion.div key={i} className="bg-white rounded-lg p-6 shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-xl font-bold text-primary">{stat}</p>
                <p className="text-sm mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ecosystem */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <LucideUserCheck className="text-primary mb-2" size={32} />
            <h3 className="text-xl font-bold">🧑‍⚕️ Dr. Markets</h3>
            <p>Generates pre-market outlooks, daily bias, and setups using real indicators and professional logic.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <LucideTarget className="text-primary mb-2" size={32} />
            <h3 className="text-xl font-bold">💊 TradeRx</h3>
            <p>Emotion-free execution engine that respects rules, manages trades, and never chases.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <LucideUsers className="text-primary mb-2" size={32} />
            <h3 className="text-xl font-bold">🌐 You</h3>
            <p>You define your edge and risk. Our bots handle the rest.</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">📈 HOW TECHNESTS WORKS</h2>
          <ol className="space-y-3 max-w-2xl mx-auto text-left text-lg">
            <li>1. Choose your prop firm and rules</li>
            <li>2. Configure your preferences</li>
            <li>3. Plug into NinjaTrader</li>
            <li>4. Trade with precision — hands-free</li>
            <li>5. Collect, review logs, optimize — repeat</li>
          </ol>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-10 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6">📣 WHAT OUR USERS SAY</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              '“I finally passed Apex after 4 fails. It wasn’t magic. It was structure.”',
              '“I’m trading 5 accounts now, and I sleep through most of the trades.”',
              '“TechNests gave me my confidence — and weekends — back.”',
              '“Payouts feel automatic now. I just check the reports.”'
            ].map((quote, i) => (
              <motion.blockquote key={i} className="bg-white p-6 rounded-xl shadow text-lg italic" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <LucideQuote className="mb-2 text-primary" />
                {quote}
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎯 WHO TECHNESTS IS FOR</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              'Beginner & intermediate traders',
              'Apex, Topstep, Earn2Trade users',
              'Funded account holders needing risk automation',
              'Traders running multiple evaluations',
              'Options traders switching to futures',
              'Professionals seeking passive income'
            ].map((target, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow text-left">
                <LucideCheckCircle className="inline-block mr-2 text-primary" />
                {target}
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg font-medium">If you’ve ever thought “I wish I could just <em>follow my plan</em> without getting in my own way…” — TechNests is built for you.</p>
        </section>

        {/* Core Beliefs */}
        <section className="bg-primary/5 p-10 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-6">🔐 CORE BELIEFS</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-lg">
            <p>• Traders should control their capital</p>
            <p>• Automation should follow <em>your</em> logic</p>
            <p>• You don’t need to be perfect — just consistent</p>
            <p>• Emotional control is designed, not forced</p>
            <p>• Tools should never cost more than profits</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2  className="text-3xl md:text-4xl font-bold mb-4">
            📢 WANT TO JOIN THE NEST?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            We’re always looking to partner with funded traders, influencers, prop firms, and agencies.
          </p>
          <Button size="lg" className="bg-primary text-white">Explore the Ecosystem</Button>
        </section>

       
      </main>
    </MotionConfig>
    </div>
  );
}
