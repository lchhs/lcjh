/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Trophy,
  Plane,
  Calendar,
  MapPin,
  HeartHandshake,
  Landmark,
  Phone,
  Users,
  TrendingUp,
  Copy,
  Check,
  ImageIcon
} from 'lucide-react';
import ImageGallery from './components/ImageGallery';

const CopyButton = ({ text, className = "text-slate-500 hover:text-slate-900 hover:bg-slate-200" }: { text: string, className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-md transition-colors focus:outline-none ${className}`}
      title="複製"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};

const highlights = Array.from({ length: 10 }, (_, i) => `/${i + 1}.jpg`);

export default function App() {
  const goalAmount = 2092800;
  
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-700 flex items-center justify-center text-white font-black text-xl">
              LJ
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-slate-900 leading-tight">龍井國中手球隊</span>
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">Handball Team</span>
            </div>
          </div>
          <a
            href="#donate"
            className="bg-slate-900 hover:bg-orange-400 text-white hover:text-slate-900 px-6 py-2.5 font-bold transition-colors flex items-center gap-2 border-2 border-transparent hover:border-slate-900 uppercase tracking-widest text-sm"
          >
            <HeartHandshake className="w-5 h-5" />
            <span className="hidden sm:inline">立即支持</span>
            <span className="sm:hidden">支持</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white border-b-2 border-slate-900">
        <div className="absolute inset-0 z-0 bg-slate-50">
          <img 
            src="https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80&w=2070" 
            alt="Handball match overlay" 
            className="w-full h-full object-cover opacity-5 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-0">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-800 mb-4 sm:mb-6">
             2026 國際賽事募款
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
            為夢想出發<span className="text-blue-700">。</span><br />
            讓世界看見我們
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-orange-400 pl-4">
            支持臺中市立龍井國中男子手球隊前進斯洛維尼亞<br className="hidden sm:block"/>站上國際殿堂，為台灣爭光。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        
        {/* Progress Card */}
        <div className="bg-blue-700 text-white p-8 md:p-10 mb-16 border-2 border-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-white font-bold tracking-[0.2em] text-xs mb-3 flex items-center gap-2 uppercase">
                <Landmark className="w-4 h-4 text-orange-400"/>
                經費需求 Project Budget
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                本次國際賽事行程共計 15 天，包含參賽、技術交流與異地訓練。<br className="hidden md:block" />
                總經費預估需 <span className="text-orange-400 font-bold tracking-wider">NT$ 2,092,800</span>，主要包含隊職員旅費、競賽裝備及必要保險。
              </p>
              <p className="text-white/90 leading-relaxed text-lg">
                除了政府提供的部分補助，我們誠摯尋求各界的參與，協助分擔剩餘的資金缺口，確保優秀球員能專注於競技場，無後顧之憂地追逐國際夢想。
              </p>
            </div>
            
            <div className="flex flex-col gap-4 lg:justify-end">
              <a href="#donate" className="bg-slate-900 hover:bg-orange-400 text-white hover:text-slate-900 px-8 py-5 font-bold text-center transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-lg border-2 border-transparent hover:border-slate-900">
                我要贊助 <HeartHandshake className="w-5 h-5"/>
              </a>
              <a href="#story" className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-blue-700 px-8 py-5 font-bold text-center transition-colors uppercase tracking-widest text-lg">
                了解故事
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column: Story & Info */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Outline 1: Team Intro & Story */}
            <section id="story" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-5 bg-blue-700"></div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">球隊介紹與募款故事</h2>
              </div>
              
              <div className="text-slate-700 max-w-none leading-relaxed space-y-6">
                <p className="text-lg font-medium text-slate-900 border-l-4 border-slate-900 pl-4">
                  本校手球隊長期致力於培養學生紀律、團隊合作與運動家精神，歷年於全國賽事中表現優異。本次代表學校及台灣參與國際賽事，為學生難得之學習與成長機會。
                </p>
                <div className="bg-slate-100 p-8 border-l-8 border-blue-700">
                  <p className="mb-4">
                    每一位隊員都在課業與訓練之間努力堅持。清晨的體能訓練、放學後的反覆練習，只為在球場上展現最佳表現。
                  </p>
                  <p>
                    然而，高額的出國費用對許多家庭而言是一大負擔。您的一份支持，將讓孩子們有機會站上國際舞台，開拓人生視野。這趟旅程不僅是競賽，更是翻轉他們人生的重要契機，讓台灣囝仔的韌性被世界看見。
                  </p>
                </div>
              </div>
            </section>

            {/* Outline 2: Tournament Plan */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-5 border-2 border-slate-900"></div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">參賽計畫</h2>
              </div>

              <div className="border-t-2 border-slate-900 pt-8">
                <p className="text-slate-900 font-bold text-lg mb-4">
                  第32屆 EUROFEST European handball festival 國際手球分齡賽將有來自20個國家的隊伍參加，包括：
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  奧地利、比利時、波士尼亞與赫塞哥維納、捷克、法國、馬爾他、挪威、荷蘭、克羅埃西亞、加拿大、智利、匈牙利、波蘭、斯洛伐克、塞爾維亞、斯洛維尼亞、西班牙、瑞典、台灣。
                </p>
                <p className="text-slate-900 font-bold text-lg mb-8">
                  匯聚各國優秀隊伍，透過交流提升競技能力並拓展國際視野。
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-blue-700 shrink-0 mt-1">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Tournament</h4>
                      <p className="font-bold text-slate-900 text-lg">32.th EUROFEST 國際手球分齡賽</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-blue-700 shrink-0 mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Location</h4>
                      <p className="font-bold text-slate-900 text-lg">斯洛維尼亞 / 科佩 <span className="text-slate-500 text-base font-normal">(Koper, Slovenia)</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l-4 border-orange-400 pl-4 py-2 mt-4 ml-1">
                    <div className="text-orange-500 shrink-0 mt-1 hidden">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">Dates</h4>
                      <p className="font-bold text-slate-900 text-xl tracking-tighter">2026年 7月1日 — 7月15日 <span className="text-orange-500 text-sm tracking-normal ml-2 uppercase">15 Days</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Funding & Action */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Outline 5: Action (Donate) */}
            <div id="donate" className="bg-white border-2 border-slate-900 border-r-8 border-b-8 p-8 scroll-mt-32">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="w-4 h-4 bg-orange-400"></span> 匯款資訊
              </h3>
              
              <div className="bg-slate-50 p-6 border border-slate-200 mb-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Bank Name</div>
                    <div className="flex items-center justify-between gap-2">
                       <div className="font-bold text-slate-900">郵局 <span className="text-slate-500 font-normal ml-1">(代號 700)</span></div>
                       <CopyButton text="700" />
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-slate-200"></div>

                  <div>
                     <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Account Name</div>
                    <div className="flex items-center justify-between gap-2">
                       <div className="font-bold text-slate-900">臺中市立龍井國民中學學生家長會紀恒紋</div>
                       <CopyButton text="臺中市立龍井國民中學學生家長會紀恒紋" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-700 text-white p-5 border-2 border-slate-900 mb-4">
                <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Account Number (匯款帳號)</div>
                <div className="flex items-center justify-between gap-4">
                   <div className="font-mono font-black text-2xl tracking-widest break-all">
                     01414380192756
                   </div>
                   <CopyButton text="01414380192756" className="text-blue-200 hover:text-white hover:bg-blue-600 shrink-0" />
                </div>
              </div>

              <div className="bg-slate-50 p-6 border border-slate-200 mb-4">
                <div>
                   <div className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Memo(備註)</div>
                  <div className="flex items-center justify-between gap-2">
                     <div className="font-bold text-slate-900">手球隊訓練及比賽經費</div>
                     <CopyButton text="手球隊訓練及比賽經費" />
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-4 pt-4 mt-6">
                <h4 className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-2">注意事項 Notice</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  匯款後請聯繫總務主任林主任 (04-26353344#731) 告知捐款人資訊，家長會將開立正式收據。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Highlights Gallery */}
      <section className="bg-slate-900 py-16 border-t-2 border-b-2 border-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
           <div className="flex items-center gap-3">
             <ImageIcon className="w-8 h-8 text-orange-400" />
             <h2 className="text-3xl font-black text-white tracking-tight uppercase">精彩回顧 Highlights</h2>
           </div>
           <p className="text-slate-400 mt-2 font-medium">看見球員們在場上的拚搏與汗水（照片可左右滑動）</p>
        </div>
        
        {/* Dynamic Image Gallery */}
        <div className="px-4 pb-16">
          <ImageGallery images={highlights} />
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-slate-50 text-slate-900 pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 border-b-2 border-slate-200 pb-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white font-black text-sm">
                  LJ
                </div>
                <span className="font-black text-xl text-slate-900 tracking-tighter uppercase">龍井國中手球隊</span>
              </div>
              
              <h4 className="text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4">聯絡窗口 Contacts</h4>
              <ul className="space-y-2 text-sm font-bold">
                <li className="flex items-center gap-3">
                  <span className="text-slate-500 w-24">學校名稱</span>
                  <span>臺中市立龍井國民中學</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-slate-500 w-24">聯絡專線</span>
                  <span>04-26353344#720、725</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-slate-500 w-24">聯絡人</span>
                  <span>體育組林組長、許教練</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center flex flex-col items-center justify-center">
              <h4 className="text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4">關於專案 About</h4>
              <p className="max-w-md leading-relaxed text-slate-600 text-sm font-medium">
                龍井國中手球隊致力於發展基層體育，不僅追求競技成績，更重視品格教育與全人發展。感謝您成為我們築夢的推手。
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-center text-xs font-bold tracking-widest uppercase text-slate-500">
            <p>© 2026 龍中校隊募款計畫</p>
          </div>
        </div>
        
        {/* Bottom Geometric Accent */}
        <div className="mt-12 flex items-center gap-2 overflow-hidden whitespace-nowrap opacity-10 pointer-events-none">
          <div className="text-4xl font-black tracking-widest uppercase text-slate-900">DREAM BIG • PLAY HARD • DRAGON WELL • TAIWAN • HANDBALL 2026 • </div>
          <div className="text-4xl font-black tracking-widest uppercase text-slate-900">DREAM BIG • PLAY HARD • DRAGON WELL • TAIWAN • HANDBALL 2026 • </div>
        </div>
      </footer>
    </div>
  );
}

