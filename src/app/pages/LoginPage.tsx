import { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, Lock, LogIn, Shield, Mail, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import bgImage from '@/assets/login.png';
import logoBlack from '@/assets/logo.png';

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login successful!', {
        description: 'Welcome back to D247 Gaming',
      });
      navigate('/');
    }, 1500);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Demo login successful!', {
        description: 'Exploring with demo credentials',
      });
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Soft pastel gradient background using the imported image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${bgImage})`
        }} 
      />
      
      {/* Subtle overlay for additional depth (optional) */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
        }} 
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center justify-center mb-4">
            <img 
              src={logoBlack} 
              alt="D247 Gaming Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Login Card - Glassmorphism */}
        <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            {/* Soft glow effect */}
            <div 
              className="absolute -inset-1 rounded-[32px] blur-xl opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.3))'
              }}
            />
            
            {/* Glass card */}
            <div 
              className="relative rounded-[32px] p-8 backdrop-blur-sm border shadow-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                borderWidth: '1px',
                boxShadow: '0 20px 50px rgba(139, 92, 246, 0.15)'
              }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                <p className="text-sm text-gray-600">Enter your credentials to continue</p>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Username */}
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                    Username
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <User className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-12 pr-4 h-14 rounded-2xl text-gray-800 placeholder:text-gray-400 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-200 bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 h-14 rounded-2xl text-gray-800 placeholder:text-gray-400 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-200 bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div 
                        className="w-5 h-5 rounded-md border-2 border-gray-300 bg-white peer-checked:bg-gradient-to-br peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:border-transparent transition-all duration-300 flex items-center justify-center"
                      >
                        {rememberMe && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <a 
                    href="#" 
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Login Button - Primary Gradient */}
                <div className="relative pt-2">
                  <div 
                    className="absolute -inset-0.5 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, #A770EF, #CF57FF, #FC5C7D)'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full h-14 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #A770EF 0%, #CF57FF 50%, #FC5C7D 100%)',
                      boxShadow: '0 8px 24px rgba(167, 112, 239, 0.4)'
                    }}
                  >
                    {/* Shine effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transform: 'translateX(-100%)',
                        animation: 'shine 3s infinite'
                      }}
                    />
                    
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Login Now</span>
                        <LogIn className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Divider */}
                <div className="relative py-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 text-xs font-bold text-gray-400 bg-white">
                      OR
                    </span>
                  </div>
                </div>

                {/* Demo Button - Secondary */}
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  disabled={isLoading}
                  className="w-full h-14 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed border-2 bg-white text-gray-700 border-gray-300 hover:border-purple-400 hover:text-purple-600"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span>Try Demo Account</span>
                  </div>
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                {/* Terms & Privacy */}
                <p className="text-center text-xs text-gray-500">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-purple-600 font-semibold hover:underline">Terms</a>
                  {' '}and{' '}
                  <a href="#" className="text-purple-600 font-semibold hover:underline">Privacy Policy</a>
                </p>
                
                {/* Support & Download */}
                <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
                  <a 
                    href="mailto:support@d247.com" 
                    className="flex items-center gap-1.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>support@d247.com</span>
                  </a>
                  <div className="w-px h-4 bg-gray-300" />
                  <a 
                    href="#" 
                    className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Download App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 animate-in fade-in duration-700" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Facebook */}
            <a 
              href="#" 
              className="w-12 h-12 rounded-2xl backdrop-blur-xl border flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-lg"
              style={{ 
                background: 'rgba(59, 89, 152, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="#" 
              className="w-12 h-12 rounded-2xl backdrop-blur-xl border flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a 
              href="#" 
              className="w-12 h-12 rounded-2xl backdrop-blur-xl border flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-lg"
              style={{ 
                background: 'rgba(29, 161, 242, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="#" 
              className="w-12 h-12 rounded-2xl backdrop-blur-xl border flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group shadow-lg"
              style={{ 
                background: 'rgba(255, 0, 0, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
              </svg>
            </a>
          </div>

          {/* Sign Up */}
          <div className="text-center mb-6">
            <div 
              className="inline-block rounded-2xl px-6 py-3 backdrop-blur-xl border shadow-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <p className="text-sm text-gray-700">
                Don't have an account?{' '}
                <a href="#" className="text-purple-600 font-bold hover:text-purple-700 hover:underline transition-colors">
                  Sign up now
                </a>
              </p>
            </div>
          </div>

          {/* 24/7 Badge */}
          <div className="flex justify-center">
            <div 
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 backdrop-blur-xl border shadow-lg"
              style={{ 
                background: 'rgba(16, 185, 129, 0.95)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-white rounded-full animate-ping absolute" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-white text-sm font-bold">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}