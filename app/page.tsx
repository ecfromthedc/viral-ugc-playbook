import {
  TrendingUp,
  Target,
  Zap,
  Users,
  BarChart3,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Video,
  DollarSign,
  Network,
  Mail,
  Globe,
  MapPin
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getAssetPath } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section background="pure" padding="xl">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1f1e1d] text-white rounded-full text-sm">
            <Sparkles className="w-4 h-4" />
            <span>A Partnership Offer from Rising Tides</span>
          </div>
          <h1 className="font-display text-balance">
            The Viral UGC Creator Playbook
          </h1>
          <p className="font-feature text-[#5e5d59] text-balance">
            Scale Your Page, Multiply Your Income, Keep Your Freedom
          </p>
        </div>
      </Section>

      {/* The Real Game */}
      <Section background="secondary" padding="lg">
        <h2 className="mb-8 text-center">Growing Made Easy</h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card variant="bordered" className="bg-white text-center">
            <p className="font-medium text-lg mb-2">What matters:</p>
            <p className="text-2xl text-[#44a6e4]">Median views, not followers.</p>
          </Card>

          <Card variant="bordered" className="bg-white text-center">
            <p className="font-medium text-lg mb-2">What works:</p>
            <p className="text-2xl text-[#44a6e4]">Systems, not guessing.</p>
          </Card>

          <Card variant="bordered" className="bg-white text-center">
            <p className="font-medium text-lg mb-2">What you need:</p>
            <p className="text-2xl text-[#44a6e4]">Volume + consistency.</p>
          </Card>
        </div>

        {/* Track Record */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-4">The Results Speak for Themselves</h3>
            <p className="text-lg text-[#5e5d59] max-w-3xl mx-auto">
              Real analytics from pages using this exact system. This is what consistent execution looks like.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card variant="bordered" className="bg-white overflow-hidden">
              <div className="w-full aspect-[9/16] bg-gray-100 flex items-center justify-center">
                <img
                  src={getAssetPath("/images/analytics-365-days.jpg")}
                  alt="365-day follower growth from 41K to 125K followers"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm text-[#5e5d59]">365-Day Growth</p>
                <p className="text-lg font-medium">41K → 125K followers</p>
              </div>
            </Card>

            <Card variant="bordered" className="bg-white overflow-hidden">
              <div className="w-full aspect-[9/16] bg-gray-100 flex items-center justify-center">
                <img
                  src={getAssetPath("/images/analytics-28-days.jpg")}
                  alt="28-day analytics showing 325M views, 376.6% follower growth"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm text-[#5e5d59]">28-Day Performance</p>
                <p className="text-lg font-medium">325M views • 376.6% growth</p>
              </div>
            </Card>
          </div>

          <Card variant="bordered" className="bg-[#1f1e1d] text-white text-center border-[#1f1e1d]">
            <p className="text-xl lg:text-2xl font-medium">
              This isn't theory. This is what happens when you execute the system consistently.
            </p>
          </Card>
        </div>
      </Section>

      {/* The System Header */}
      <Section background="primary" padding="lg" className="border-y border-[#e8e6dc]">
        <h2 className="mb-4">The System (6 Steps)</h2>
      </Section>

      {/* Step 1 */}
      <Section background="pure" padding="lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#1f1e1d] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">1</div>
          <h3 className="text-3xl lg:text-4xl pt-2">Train Your Algorithm</h3>
        </div>

        <div className="space-y-6 ml-0 lg:ml-20">
          <ul className="space-y-3 text-lg text-[#5e5d59]">
            <li>Find 5-10 top creators in your niche</li>
            <li>Sort their content by "Most Liked"</li>
            <li>Favorite 5-10 of their best posts each</li>
            <li>Now your FYP is dialed and will show you winning content patterns</li>
          </ul>

          <Card variant="bordered" className="bg-[#faf9f6] border-l-4 border-[#44a6e4]">
            <p className="text-lg text-[#5e5d59]">
              <strong className="text-[#1f1e1d]">Already have a page but your FYP is all over the place?</strong> Reset your For You page in settings and recondition a new algorithm optimized for the niche you're trying to grow with.
            </p>
          </Card>
        </div>
      </Section>

      {/* Step 2 */}
      <Section background="secondary" padding="lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#1f1e1d] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">2</div>
          <h3 className="text-3xl lg:text-4xl pt-2">The Slingshot Method</h3>
        </div>

        <div className="space-y-6 ml-0 lg:ml-20">
          <p className="text-lg text-[#5e5d59]">
            TikTok tracks: <strong className="text-[#1f1e1d]">viral sound + viral words = pattern.</strong>
          </p>

          <p className="text-lg text-[#5e5d59]">
            When you use viral words on a viral sound, the algorithm slingshots your post harder than the original.
          </p>

          <Card variant="bordered" className="bg-[#faf9f6] border-l-4 border-[#44a6e4]">
            <p className="text-lg text-[#5e5d59]">
              <strong className="text-[#1f1e1d]">Pro tip:</strong> Sentiments that are easy to share to your significant other or best friend are likely to go viral, as are relatable sentiments that are repostable.
            </p>
          </Card>

          <Card variant="bordered" className="bg-[#44a6e4] text-white border-[#44a6e4]">
            <p className="text-lg">
              This growth hacks you into highly engaged algorithms. Your page accrues engagement that compounds to stronger results quickly. Iterate the words or use them verbatim—either way, the app detects the pattern and propels it to mass audiences.
            </p>
          </Card>

          <Card variant="bordered" className="bg-[#1f1e1d] text-white border-[#1f1e1d]">
            <p className="text-lg">
              95% of fast-growing pages do this. It's not stealing—it's pattern extension.
            </p>
          </Card>
        </div>
      </Section>

      {/* Step 3 */}
      <Section background="pure" padding="lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#1f1e1d] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">3</div>
          <h3 className="text-3xl lg:text-4xl pt-2">Daily Workflow</h3>
        </div>

        <div className="ml-0 lg:ml-20 space-y-8">
          <div className="space-y-6">
            <div>
              <p className="font-medium text-lg mb-3">Morning (15-30 min):</p>
              <ul className="space-y-2 ml-6 text-[#5e5d59]">
                <li>Scroll FYP</li>
                <li>Identify 5-15 viral slingshots</li>
                <li>Stack in drafts</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-lg mb-3">All day:</p>
              <ul className="space-y-2 ml-6 text-[#5e5d59]">
                <li>Post every 30 min to an hour for maximum growth—allowing enough time for each video to get a strong start into the algorithm before it's followed by another</li>
                <li>Repeat until you've posted all of your viral clips</li>
              </ul>
            </div>

            <Card variant="bordered" className="bg-[#44a6e4] text-white border-[#44a6e4]">
              <p className="text-lg">
                Some posts pop immediately. Others hit days later. Keep posting consistently—your content keeps appearing in For You pages, compounding your growth.
              </p>
            </Card>

            <Card variant="bordered" className="bg-[#1f1e1d] text-white border-[#1f1e1d]">
              <p className="text-xl font-medium">That's it. Scroll → Stack → Post.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Step 4 */}
      <Section background="secondary" padding="lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#1f1e1d] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">4</div>
          <h3 className="text-3xl lg:text-4xl pt-2">Speed Control Cheat Code</h3>
        </div>

        <div className="ml-0 lg:ml-20 space-y-6">
          <p className="text-lg text-[#5e5d59]">
            TikTok has speed controls (3x, 2x, 1x, 0.5x, 0.3x):
          </p>

          <ul className="space-y-3 ml-6 text-[#5e5d59]">
            <li><strong className="text-[#1f1e1d]">Speed up (3x/2x):</strong> Audio plays slower → more time to move → TikTok speeds you up</li>
            <li><strong className="text-[#1f1e1d]">Slow down (0.5x/0.3x):</strong> Audio plays faster → less motion captured → TikTok slows you down</li>
          </ul>

          <Card variant="bordered" className="bg-[#44a6e4] text-white border-[#44a6e4]">
            <p className="text-lg">
              Warping reality with these camera tricks increases retention time—holding attention longer triggers more virality.
            </p>
          </Card>

          <Card variant="bordered" className="bg-[#1f1e1d] text-white border-[#1f1e1d]">
            <p className="text-lg">Zero editing. Maximum effect.</p>
          </Card>
        </div>
      </Section>

      {/* Step 5 */}
      <Section background="pure" padding="lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#1f1e1d] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">5</div>
          <h3 className="text-3xl lg:text-4xl pt-2">Create & Maintain a Native TikTok Aesthetic</h3>
        </div>

        <div className="ml-0 lg:ml-20 space-y-6">
          <p className="text-lg text-[#5e5d59]">
            Your content needs to feel native to TikTok, not like an ad or out-of-place post.
          </p>

          <Card variant="bordered" className="bg-[#faf9f6]">
            <h4 className="font-medium text-lg mb-3">Reverse engineer pages in your niche:</h4>
            <ul className="ml-6 space-y-2 text-[#5e5d59]">
              <li>Study the top creators in your niche</li>
              <li>Identify the visual and content patterns they use</li>
              <li>Note the editing styles, transitions, and formats</li>
              <li>Understand what makes their content feel authentic</li>
            </ul>
          </Card>

          <Card variant="bordered" className="bg-[#44a6e4] text-white border-[#44a6e4]">
            <h4 className="font-medium text-lg mb-3">Make memes that use proven viral elements:</h4>
            <ul className="ml-6 space-y-2">
              <li>Use the same visual language as viral content in your niche</li>
              <li>Incorporate proven viral elements (text styles, transitions, sounds)</li>
              <li>Match the pacing and energy of top-performing posts</li>
              <li>Keep it authentic—don't force it, but lean into what works</li>
            </ul>
          </Card>

          <Card variant="bordered" className="bg-[#1f1e1d] text-white border-[#1f1e1d]">
            <p className="text-lg">
              The goal: Your content should blend seamlessly into someone's For You page. When it feels native, it performs better.
            </p>
          </Card>
        </div>
      </Section>

      {/* Step 6 */}
      <Section background="secondary" padding="lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-full bg-[#1f1e1d] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">6</div>
          <h3 className="text-3xl lg:text-4xl pt-2">What Gets You Booked</h3>
        </div>

        <div className="ml-0 lg:ml-20 space-y-6">
          <p className="text-lg text-[#5e5d59]">
            Not followers. <strong className="text-[#1f1e1d]">Median views.</strong>
          </p>

          <Card variant="bordered" className="bg-[#faf9f6] border-l-4 border-[#44a6e4]">
            <p className="text-lg text-[#5e5d59] mb-3">
              <strong className="text-[#1f1e1d]">Highly engaged pages are more likely to get into the For You page.</strong> Engagement compounds—the more engagement you get, the more the algorithm pushes your content.
            </p>
            <p className="text-lg text-[#5e5d59]">
              Applying these strategies is the most proven way to increase engagement and raise median views.
            </p>
          </Card>

          <Card variant="bordered" className="bg-[#44a6e4] text-white border-[#44a6e4]">
            <p className="text-xl font-medium">
              20K followers + 100K median views {'>'} 200K followers + 10K median views.
            </p>
          </Card>
        </div>
      </Section>

      {/* How We Work Together */}
      <Section background="secondary" padding="lg">
        <h2 className="mb-12">How We Work Together</h2>

        <div className="space-y-12">
          {/* You Get */}
          <div>
            <h3 className="text-2xl font-medium mb-6">You Get:</h3>
            <ol className="space-y-3 ml-6 text-lg text-[#5e5d59]">
              <li><strong className="text-[#1f1e1d]">1.</strong> This playbook (implement it yourself or with my support)</li>
              <li><strong className="text-[#1f1e1d]">2.</strong> Campaign bookings from Atlantic, Warner, Sony, indie labels</li>
              <li><strong className="text-[#1f1e1d]">3.</strong> Optional deal management (we handle inquiries, you create)</li>
              <li><strong className="text-[#1f1e1d]">4.</strong> Network access to other top creators + ongoing optimization</li>
            </ol>
          </div>

          {/* The Exchange */}
          <div>
            <h3 className="text-2xl font-medium mb-6">The Exchange:</h3>
            <Card variant="bordered" className="bg-white space-y-6">
              <div>
                <p className="font-medium text-lg mb-3">Preferred rates on campaigns we book you for:</p>
                <p className="text-lg text-[#5e5d59] mb-4">
                  Whatever your main rate is, it needs to be discounted in favor of our higher volume, optimized workflow in 2026.
                </p>
                <ul className="ml-6 space-y-2 text-[#5e5d59]">
                  <li>You keep 100% of your own inbound deals</li>
                  <li>No exclusivity</li>
                  <li>High volume = consistent income</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Non-Negotiables */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Non-Negotiables:</h3>
            <ul className="space-y-3 ml-6 text-lg text-[#5e5d59]">
              <li>You own your page, content, and audience</li>
              <li>No exclusivity required</li>
              <li>You can take outside deals anytime</li>
              <li>Partnership, not ownership</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Next Steps */}
      <Section background="pure" padding="lg">
        <h2 className="mb-12">Next Steps</h2>

        <div className="space-y-8">
          <Card variant="bordered" className="bg-white">
            <h3 className="text-2xl font-medium mb-6">If you want to work together:</h3>
            <div className="space-y-4">
              <p className="text-lg">
                Email: <strong className="text-[#44a6e4]">ec@risingtidesent.com</strong><br />
                Subject: "UGC Creator Partnership"
              </p>
              <div>
                <p className="font-medium mb-2">Include:</p>
                <ul className="ml-6 space-y-1 text-[#5e5d59]">
                  <li>Your handles</li>
                  <li>What you're interested in (just campaigns or full deal management)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="bg-[#faf9f6]">
            <h3 className="text-xl font-medium mb-4">Process:</h3>
            <ol className="ml-6 space-y-2 text-[#5e5d59] list-decimal">
              <li>15-min intro call</li>
              <li>Simple onboarding (rate, PayPal, bio setup if needed)</li>
              <li>Start getting campaigns</li>
              <li>Execute, get paid, grow</li>
            </ol>
          </Card>
        </div>
      </Section>

      {/* Quick FAQ */}
      <Section background="secondary" padding="lg">
        <h2 className="mb-12">Quick FAQ</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {[
            { q: "Exclusive?", a: "No. Keep all your outside deals at 100%." },
            { q: "Cost?", a: "Nothing. The playbook is free. Value exchange = preferred rates on campaigns I send." },
            { q: "How many campaigns?", a: "Depends on your performance and my pipeline. Could be 10/month, could be 100+." },
            { q: "Can I opt out?", a: "Yes. Partnership, not a contract." },
            { q: "Why free?", a: "Better creators = better network = everyone wins." }
          ].map((faq, i) => (
            <Card key={i} variant="bordered" className="bg-white">
              <p className="font-medium text-lg mb-2">{faq.q}</p>
              <p className="text-[#5e5d59]">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* The Real Talk */}
      <Section background="primary" padding="lg" className="border-y border-[#e8e6dc]">
        <h2 className="mb-8">The Real Talk</h2>

        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <p className="text-2xl text-[#5e5d59]">
            You can keep guessing what works, or you can implement a system that's generated 500M impressions in 60 days.
          </p>

          <p className="text-xl text-[#5e5d59]">
            The playbook is here. The campaigns are ready. The network is growing.
          </p>

          <p className="text-2xl font-medium">
            Build with us or build alone—either way, now you know the system.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="pure" padding="lg">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Card variant="bordered" className="bg-[#1f1e1d] text-white border-[#1f1e1d]" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-xl">
                <Mail className="w-6 h-6" />
                <a href="mailto:ec@risingtidesent.com" className="text-[#44a6e4] hover:text-[#3590d0]">
                  ec@risingtidesent.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-xl">
                <Globe className="w-6 h-6" />
                <a href="https://www.risingtidesent.com" className="text-[#44a6e4] hover:text-[#3590d0]" target="_blank" rel="noopener noreferrer">
                  risingtidesent.com
                </a>
              </div>
            </div>
          </Card>

          <p className="text-xl text-[#5e5d59] italic">
            A rising tide lifts all ships.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 bg-[#1f1e1d] text-white text-center">
        <p className="text-[#87867f]">© 2024 Rising Tides Entertainment. All rights reserved.</p>
      </footer>
    </main>
  );
}
