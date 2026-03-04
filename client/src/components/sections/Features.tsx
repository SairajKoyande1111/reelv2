import { motion } from "framer-motion";
import instaIcon from "@assets/instagram_(1)_1772635290363.png";
import lightningIcon from "@assets/lightning_1772635445711.png";
import noWatermarkIcon from "@assets/prohibition_1772635526816.png";
import secureIcon from "@assets/insurance_1772635570218.png";
import hdIcon from "@assets/video_1772635646433.png";

export function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Our optimized servers process and fetch your video links in milliseconds.",
      icon: <img src={lightningIcon} className="w-8 h-8 object-contain" alt="Lightning Fast" />
    },
    {
      title: "No Watermarks",
      description: "Download pure, original content without any annoying logos or watermarks added.",
      icon: <img src={noWatermarkIcon} className="w-8 h-8 object-contain" alt="No Watermarks" />
    },
    {
      title: "100% Secure",
      description: "We don't store your history. All downloads are direct and private.",
      icon: <img src={secureIcon} className="w-8 h-8 object-contain" alt="100% Secure" />
    },
    {
      title: "High Quality (HD)",
      description: "Get the highest available resolution for every Reel you download.",
      icon: <img src={hdIcon} className="w-8 h-8 object-contain" alt="High Quality" />
    }
  ];

  return (
    <section id="features" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why choose <br/>
              <span className="text-gradient">FastVideoSaves?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've built the most reliable tool to save content from Instagram directly to your device. Here's what makes us different.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 rounded-xl flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-white/50 flex items-center justify-center p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground/80 leading-snug font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* 3D App Representation / Graphic container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-purple-100 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
            <div className="glass-panel w-full max-w-sm aspect-[4/5] rounded-[2.5rem] p-6 flex flex-col items-center justify-center relative overflow-hidden border-2 border-white shadow-2xl">
              
              {/* Actual Instagram Logo */}
              <div className="w-32 h-32 rounded-[2.5rem] bg-white p-4 shadow-xl mb-6 flex items-center justify-center border-4 border-white">
                <img src={instaIcon} className="w-full h-full object-contain" alt="Instagram" />
              </div>

              <div className="w-3/4 h-3 bg-slate-200/50 rounded-full mb-3 animate-pulse"></div>
              <div className="w-1/2 h-3 bg-slate-200/50 rounded-full mb-6 animate-pulse"></div>
              
              <div className="w-full grid grid-cols-3 gap-3">
                <div className="aspect-square bg-slate-100/50 rounded-xl border border-white/20"></div>
                <div className="aspect-square bg-slate-100/50 rounded-xl border border-white/20"></div>
                <div className="aspect-square bg-slate-100/50 rounded-xl border border-white/20"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-[1px]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
