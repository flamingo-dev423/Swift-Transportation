"use client"

import { Button } from "@/components/ui/button"
import PropTypes from "prop-types"

export default function LandingPage({ onStartVerification }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/images/image-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-12 border border-white/30 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Mandatory Identity & Background Verification for Employment Onboarding
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Complete your identity verification process to proceed with your employment onboarding. This secure process
            ensures compliance with federal regulations.
          </p>
          <Button
            onClick={onStartVerification}
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 text-xl px-12 py-6 rounded-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-white/20"
          >
            Complete Identity Confirmation
          </Button>
        </div>
      </div>
    </div>
  )
}

LandingPage.propTypes = {
  onStartVerification: PropTypes.func.isRequired,
}
