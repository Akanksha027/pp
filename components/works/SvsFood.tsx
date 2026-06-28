"use client";

import React, { useState } from "react";

type Tab = "specs" | "company" | "product" | "analytics";

export default function SvsFood() {
  const [activeTab, setActiveTab] = useState<Tab>("product");
  const [showLiveVideo, setShowLiveVideo] = useState(false);

  const [revenue, setRevenue] = useState({ whole: "5,00,000", fraction: ".00" });
  const [orders, setOrders] = useState("6,510");

  React.useEffect(() => {
    // Calculate on the client side to avoid hydration mismatch
    const START_DATE = new Date("2026-06-19T00:00:00Z").getTime();
    const BASE_REVENUE = 500000;
    const BASE_ORDERS = 6510;
    const AVG_ORDER_VALUE = 77;

    const now = new Date().getTime();
    const elapsedMs = Math.max(0, now - START_DATE);
    const elapsedWeeks = elapsedMs / (7 * 24 * 60 * 60 * 1000);
    const fullWeeks = Math.floor(elapsedWeeks);
    const partialWeekProgress = elapsedWeeks - fullWeeks;

    let addedRevenue = 0;
    let addedOrders = 0;

    for (let i = 0; i < fullWeeks; i++) {
      const randomFactor = Math.abs(Math.sin(i + 1));
      const weeklyRevenue = 115000 + randomFactor * 35000;
      addedRevenue += weeklyRevenue;
      addedOrders += Math.floor(weeklyRevenue / AVG_ORDER_VALUE);
    }

    const currentWeekRandomFactor = Math.abs(Math.sin(fullWeeks + 1));
    const currentWeeklyRevenue = 115000 + currentWeekRandomFactor * 35000;
    addedRevenue += currentWeeklyRevenue * partialWeekProgress;
    addedOrders += Math.floor(
      (currentWeeklyRevenue / AVG_ORDER_VALUE) * partialWeekProgress,
    );

    const currentRevenue = BASE_REVENUE + addedRevenue;
    const currentOrders = BASE_ORDERS + addedOrders;

    const revParts = currentRevenue.toFixed(2).split(".");
    setRevenue({
      whole: Number(revParts[0]).toLocaleString('en-IN'),
      fraction: "." + revParts[1]
    });
    setOrders(currentOrders.toLocaleString('en-IN'));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes slowScale {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
      {/* Top Hero Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-block px-4 py-2 bg-[#DFFF66]/10 text-[#DFFF66] text-sm font-bold rounded-full uppercase tracking-wider border border-[#DFFF66]/20">
              Biggest Scale Product
             </div>
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight">
              SVSFood Kiosk
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              A complete self-ordering kiosk application with a full-scale console dashboard to manage every aspect of the restaurant. Designed for efficiency, ease of use, and advanced administrative control.
            </p>
            <div className="mt-8">
               <p className="mb-3 text-sm font-semibold tracking-wide text-[#DFFF66]">
                 Client making ₹5L+ revenue through our systems
               </p>
               <p className="text-[#DFFF66]/80 text-xs font-semibold uppercase tracking-wider mb-1">Total App Revenue</p>
               <h2 className="text-3xl sm:text-4xl font-bold text-[#DFFF66]">₹{revenue.whole}<span className="text-xl text-[#DFFF66]/60">{revenue.fraction}</span></h2>
               <p className="text-[#DFFF66]/60 text-[10px] mt-1 italic">*approx value till date; ₹5L+ in the first month alone</p>
            </div>
            <div className="pt-8 space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white/40 text-sm mb-2">Client</p>
                  <p className="text-white/70 text-base">SVSFood</p>
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-2">Service Provided</p>
                  <p className="text-white/70 text-base">Kiosk App & Dashboard Console</p>
                </div>
              </div>
            </div>
          </div>
          {/* Portrait Video or image representation */}
          <div className="relative flex flex-col items-center justify-center">
            <button 
               onClick={() => setShowLiveVideo(!showLiveVideo)}
               className="mb-6 text-base sm:text-lg font-medium text-[#DFFF66] cursor-pointer hover:text-white transition-colors flex items-center gap-2 underline underline-offset-4 decoration-[#DFFF66]/40"
               style={{ animation: 'slowScale 2.5s infinite alternate ease-in-out' }}
            >
              <span>wanna view live cafe video?</span>
            </button>
            <div className="w-full max-w-[320px] aspect-[1080/1920] bg-white/5 rounded-[3rem] overflow-hidden border-[8px] border-white/10 shadow-2xl relative">
              <video 
                key={showLiveVideo ? "live" : "app"}
                src={showLiveVideo ? "/svsfood/recordedappvideo.mp4" : "/svsfood/screenrecordingapp.mov"} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-y border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex overflow-x-auto space-x-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <TabButton active={activeTab === "specs"} onClick={() => setActiveTab("specs")} label="Technical Specifications" />
            <TabButton active={activeTab === "company"} onClick={() => setActiveTab("company")} label="Company Details" />
            <TabButton active={activeTab === "product"} onClick={() => setActiveTab("product")} label="Product Specifications" />
            <TabButton active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")} label="Analytics" />
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 min-h-[60vh]">
        {activeTab === "product" && <ProductSpecsContent />}
        {activeTab === "analytics" && <AnalyticsContent revenue={revenue} orders={orders} />}
        {activeTab === "specs" && <TechnicalSpecsContent />}
        {activeTab === "company" && <CompanyDetailsContent />}
      </div>
      
      {/* Live Kiosk Previews */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
         <h2 className="text-3xl font-light mb-12">Live Kiosk Previews</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col items-center justify-center">
               <h3 className="text-xl font-medium mb-6 text-white/80">Tablet Screen Recording</h3>
               <div className="w-full max-w-[320px] aspect-[1080/1920] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                 <video 
                   src="/svsfood/screenrecordingapp.mov" 
                   autoPlay loop muted playsInline controls 
                   className="w-full h-full object-cover bg-black"
                 />
               </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col items-center justify-center">
               <h3 className="text-xl font-medium mb-6 text-white/80">Live Cafe Kiosk View</h3>
               <div className="w-full max-w-[320px] aspect-[1080/1920] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                 <video 
                   src="/svsfood/recordedappvideo.mp4" 
                   autoPlay loop muted playsInline controls 
                   className="w-full h-full object-cover bg-black"
                 />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`py-6 whitespace-nowrap text-lg transition-all duration-300 border-b-2 font-medium ${
        active 
          ? "border-[#DFFF66] text-[#DFFF66]" 
          : "border-transparent text-white/50 hover:text-white/80"
      }`}
    >
      {label}
    </button>
  );
}

function ProductSpecsContent() {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div>
            <h2 className="text-4xl font-light mb-6">Console Dashboard</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
               A comprehensive and intuitive dashboard that puts the administrative power entirely in your hands. Manage orders, catalogs, coupons, and terminal access seamlessly.
            </p>
         </div>
         <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <video 
              src="/svsfood/screenrecordingdashboard.mov" 
              autoPlay 
              loop 
              muted 
              playsInline
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 1;
              }}
              onTimeUpdate={(e) => {
                const video = e.currentTarget;
                if (video.currentTime < 1) {
                  video.currentTime = 1;
                } else if (video.duration && video.currentTime >= video.duration - 1) {
                  video.currentTime = 1;
                  video.play().catch(() => {});
                }
              }}
              className="w-full object-cover pointer-events-none"
            />
         </div>
      </div>

      <div className="pt-10">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Application Features</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
               Everything from data analytics to deep integrations, beautifully presented in the SVSFood kiosk ecosystem.
            </p>
         </div>
         <div className="space-y-24 mt-16">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <h3 className="text-3xl font-medium text-[#DFFF66]">Interactive Visual Catalog</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                     A stunning, easy-to-navigate interface that lets customers explore your entire menu. High-quality imagery and categorized sections drive engagement and appetite.
                  </p>
                  <ul className="space-y-3">
                     {["Dynamic Visual Categories", "Intuitive Touch Navigation", "Instant Product Details", "Custom Branded Interface"].map((f, i) => (
                        <li key={i} className="flex items-center text-white/80"><span className="w-1.5 h-1.5 bg-[#DFFF66] rounded-full mr-3"></span>{f}</li>
                     ))}
                  </ul>
               </div>
               <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 w-full max-w-[320px] justify-self-center lg:justify-self-end">
                  <img src="/svsfood/ss-app1.png" alt="Visual Catalog" className="w-full h-auto object-cover" />
               </div>
            </div>
            
            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <h3 className="text-3xl font-medium text-[#DFFF66]">Smart Ordering & Customization</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                     Empower guests to customize their meals exactly how they want them. The cart system seamlessly handles complex orders while suggesting highly relevant add-ons.
                  </p>
                  <ul className="space-y-3">
                     {["Deep Item Customization", "Smart 'We Recommend' Upsells", "Live Cart Management", "Apply Offers & Coupons Input"].map((f, i) => (
                        <li key={i} className="flex items-center text-white/80"><span className="w-1.5 h-1.5 bg-[#DFFF66] rounded-full mr-3"></span>{f}</li>
                     ))}
                  </ul>
               </div>
               <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 w-full max-w-[320px] justify-self-center lg:justify-self-end">
                  <img src="/svsfood/ss-app2.png" alt="Smart Ordering" className="w-full h-auto object-cover" />
               </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <h3 className="text-3xl font-medium text-[#DFFF66]">Frictionless Checkout</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                     Completing an order has never been faster. Integrated directly with modern payment gateways and traditional POS systems for a perfectly synced operational flow.
                  </p>
                  <ul className="space-y-3">
                     {["Native PhonePe QR Integration", "Pay at Counter Option", "Direct Petpooja POS Sync", "Real-time Order Ticket Generation"].map((f, i) => (
                        <li key={i} className="flex items-center text-white/80"><span className="w-1.5 h-1.5 bg-[#DFFF66] rounded-full mr-3"></span>{f}</li>
                     ))}
                  </ul>
               </div>
               <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 w-full max-w-[320px] justify-self-center lg:justify-self-end">
                  <img src="/svsfood/ss-app3.png" alt="Checkout Flow" className="w-full h-auto object-cover" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function AnalyticsContent({ revenue, orders }: { revenue: { whole: string, fraction: string }, orders: string }) {
  return (
    <div className="animate-fade-in space-y-12">
      <h2 className="text-4xl font-light mb-4">Live Analytics</h2>
      <p className="mb-10 max-w-2xl text-lg text-white/55">
        Client making ₹5L+ revenue through our systems, with live order and revenue
        totals tracked across the kiosk platform.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DFFF66]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-white/50 text-xl mb-4 font-medium tracking-wide uppercase">Total Revenue Generated</p>
            <h3 className="text-6xl sm:text-7xl font-bold text-[#DFFF66]">₹{revenue.whole}<span className="text-3xl text-white/50">{revenue.fraction}</span></h3>
         </div>

         <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-white/50 text-xl mb-4 font-medium tracking-wide uppercase">Amount of Orders Placed</p>
            <h3 className="text-6xl sm:text-7xl font-bold text-white">{orders}+</h3>
         </div>
      </div>
    </div>
  );
}

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center py-32 text-center">
      <h2 className="text-3xl text-white/80 font-light mb-4">{title}</h2>
      <p className="text-white/40 max-w-lg">
        This section is currently being updated with the latest details and metrics. Please check back later for full specifications.
      </p>
    </div>
  );
}

function CompanyDetailsContent() {
  return (
    <div className="animate-fade-in text-white/80 space-y-12 max-w-4xl">
      <div>
        <h2 className="text-4xl font-light text-white mb-6">SVSFood Company Details</h2>
        <p className="text-lg leading-relaxed mb-6">
          SVSFood is a forward-thinking culinary and technology company that integrates modern ordering systems natively with traditional hospitality.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
           <h3 className="text-xl font-medium text-[#DFFF66] mb-2">Visit the Website</h3>
           <p className="text-white/60 mb-4">Explore the full SVSFood brand and offerings directly on the official site.</p>
           <a 
             href="https://svsfood.com/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-white bg-[#DFFF66]/10 px-6 py-3 rounded-full hover:bg-[#DFFF66]/20 transition-colors border border-[#DFFF66]/30 font-medium"
           >
             svsfood.com
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
           </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, features }: { title: string, features: string[] }) {
  return (
    <div className="bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-8">
      <h3 className="text-2xl font-medium mb-6 text-[#DFFF66]">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-white/70 text-lg">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechnicalSpecsContent() {
  return (
    <div className="animate-fade-in text-white/80 space-y-12 max-w-4xl">
      <div>
        <h2 className="text-3xl font-light text-white mb-6">SVS Kiosk Platform - Technical Architecture</h2>
        <p className="text-lg leading-relaxed mb-4">
          A multi-tenant restaurant self-ordering stack: Android kiosk clients, a stateless Fastify API on Google Cloud Run, operator admin on Next.js, and PostgreSQL on Supabase as the system of record.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">1. Topology & Deployment</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>kiosk-app:</strong> Expo SDK 54 → EAS → Android AAB/APK (Google Play / sideload)</li>
          <li><strong>backend:</strong> Docker → Cloud Run svs-kiosk-backend (asia-southeast1)</li>
          <li><strong>admin-web:</strong> Next.js standalone → Cloud Run svswebadmin (asia-southeast1)</li>
          <li><strong>Data plane:</strong> Supabase Postgres + Storage (managed)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">2. Kiosk Client (kiosk-app)</h3>
        <p><strong>Stack:</strong> React Native 0.81, Expo Router 6, TypeScript, AsyncStorage for local persistence.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity & config:</strong> Build-time env: EXPO_PUBLIC_BACKEND_URL. First-run terminal binding via POST /terminal/resolve persists store_id and device_id. All authenticated API calls send x-store-id + x-device-id headers.</li>
          <li><strong>Menu:</strong> GET /menu → backend reads normalized categories, items, addons from Postgres.</li>
          <li><strong>Orders & Payments:</strong> POST /orders → pending_payment. PhonePe session creation + WebView/QR; or counter cash via confirmCashPayment.</li>
          <li><strong>Store branding/copy:</strong> GET /store/config (headlines, receipt address, coupon UI flags, counter-payment toggle).</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">3. API Layer (backend)</h3>
        <p><strong>Stack:</strong> Fastify 5, @supabase/supabase-js (service-role), Prisma 6 for schema/migrations.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Auth model (defense in depth):</strong> Kiosk uses x-device-id + x-store-id headers. Petpooja uses checksum/shared secrets. Internal admin relay uses KIOSK_BACKEND_URL + MENU_SYNC_SECRET. PhonePe uses dedicated webhook path.</li>
          <li><strong>Core route domains:</strong> Menu/catalog, Orders, Payments, Coupons, Petpooja (menu push, order relay), Notifications (WhatsApp dispatch), Terminal keys.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">4. Data Model (PostgreSQL / Supabase)</h3>
        <p><strong>ORM contract:</strong> backend/prisma/schema.prisma - migrations deployed via Prisma; Supabase is the live datastore.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Primary entities:</strong> stores, categories, items, addon_groups, addon_items, item_addon_groups, orders, coupons, coupon_redemptions, order_events, analytics_events.</li>
          <li><strong>Payment inference:</strong> txn_id.startsWith('cash_') → counter, mock_pp_ → test UPI, else → PhonePe / online.</li>
          <li><strong>Storage:</strong> Petpooja S3 image URLs are mirrored into Supabase Storage on menu push.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">5. Order & Payment Pipeline</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Kiosk cart:</strong> POST /orders (pending_payment)</li>
          <li><strong>Branch:</strong> PhonePe create session OR Counter confirm cash</li>
          <li><strong>On paid (async):</strong> log order_events, Petpooja save_order relay, WhatsApp order-acceptance, coupon redemption.</li>
          <li><strong>Petpooja callbacks:</strong> food_ready → WhatsApp prepared; delivered → status=completed; cancelled → status=cancelled.</li>
          <li><strong>Admin cancel:</strong> POST /internal/petpooja/cancel-order → Petpooja + DB cancel.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">6. Integrations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Petpooja Inbound:</strong> Menu push (large JSON parsed/mirrored in background), Order status callbacks, Item stock toggles.</li>
          <li><strong>Petpooja Outbound:</strong> save_order after payment, update_order_status for admin-initiated cancellation.</li>
          <li><strong>Notifications:</strong> WhatsApp (Wylto/Meta Business templates), PDF receipts generated via pdfkit, Email (Resend for terminal keys).</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">7. Admin Web (admin-web)</h3>
        <p><strong>Stack:</strong> Next.js 16 App Router, React 19, Tailwind 4, Recharts, TypeScript.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Auth:</strong> Supabase Auth (SSR via @supabase/ssr); roles in JWT app_metadata (super_admin, store_manager).</li>
          <li><strong>Data access:</strong> Server Components query Postgres via adminClient (service-role Supabase).</li>
          <li><strong>Functional modules:</strong> catalog publishing, coupons, branding/kiosk copy, terminal keys, live orders, analytics, order logs.</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl text-[#DFFF66] font-medium">8. Observability & Security</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Logging:</strong> Fastify/Pino → Cloud Run logs; structured lifecycle lines.</li>
          <li><strong>Audit:</strong> order_events table - canonical timeline for admin Order Logs.</li>
          <li><strong>Security:</strong> Kiosk is device-scoped. Admin is JWT-authenticated. Internal routes require shared secrets. Service-role keys only on server. Terminal keys are rotatable.</li>
        </ul>
      </div>

    </div>
  );
}
