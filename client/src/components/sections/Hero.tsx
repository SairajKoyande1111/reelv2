import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Loader2, Download, AlertCircle, CheckCircle2 } from "lucide-react";
import { useDownloadReel } from "@/hooks/use-reels";

export function Hero() {
  const [url, setUrl] = useState("");
  const { mutate, isPending, data, isError, error, reset } = useDownloadReel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    mutate(url);
  };

  const handleReset = () => {
    setUrl("");
    reset();
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-3xl -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
            Download Instagram Reels <br />
            <span className="text-gradient">Instantly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Paste any public Instagram Reel or Video URL below to download it in high quality format. Free, fast, and no registration required.
          </p>

          <div className="mt-12 max-w-2xl mx-auto relative">
            <div className="glass-panel rounded-3xl p-2 md:p-3 relative z-10 transition-all duration-300 hover:shadow-purple-500/10">
              
              {!data ? (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Link2 className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="url"
                      placeholder="Paste Instagram URL here..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 md:py-5 bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-purple-300 focus:bg-white rounded-2xl outline-none transition-all text-foreground placeholder:text-muted-foreground text-lg"
                      required
                      data-testid="input-reel-url"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending || !url}
                    className="flex items-center justify-center gap-2 px-8 py-4 md:py-5 bg-foreground text-white rounded-2xl font-semibold text-lg hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    data-testid="button-submit-url"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-green-100 shadow-inner"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Download</h3>
                  <p className="text-muted-foreground mb-6">Your video has been processed successfully.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <a 
                      href={`/api/proxy?url=${encodeURIComponent(data.videoUrl || "")}`}
                      download="instagram-reel.mp4"
                      className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                      data-testid="link-save-video"
                    >
                      <Download className="w-5 h-5" />
                      Save Video
                    </a>
                    <button 
                      onClick={handleReset}
                      className="px-8 py-3 bg-muted text-foreground rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                      data-testid="button-download-another"
                    >
                      Download Another
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              <AnimatePresence>
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl flex items-start gap-3 text-left border border-red-100">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Error processing URL</p>
                        <p className="text-sm opacity-90">{error?.message || "Please make sure it's a valid public Instagram Reel link."}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Disclaimer text */}
            <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              By using this service you agree to our Terms of Service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
