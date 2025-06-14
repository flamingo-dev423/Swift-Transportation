"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, Clock } from "lucide-react"

import PropTypes from "prop-types"

export default function SuccessPage({ onBackToStart }) {
  return (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <CheckCircle className="mx-auto h-24 w-24 text-green-400 mb-8" />

          <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6">Verification Submitted Successfully!</h1>

          <p className="text-xl text-grey-500 mb-8 text-center leading-relaxed">
            Thank you for completing your identity verification. Your information has been securely submitted and is now
            being processed.
          </p>

          <div className="bg-white/5 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              What happens next?
            </h3>
            <ul className="space-y-3 text-grey-500">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You will receive a confirmation email within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Our team will review your documents within 2-3 business days</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You'll be notified of the verification status via email</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-grey-500 text-sm">Reference ID: VER-{Date.now().toString().slice(-8)}</p>

            <Button
              onClick={onBackToStart}
              variant="outline"
              size="lg"
              className="bg-black border-white/30 text-white hover:bg-white/20 px-8 py-3"
            >
              Return to Start
            </Button>
          </div>
        </div>
  )
}

SuccessPage.propTypes = {
  onBackToStart: PropTypes.func.isRequired,
}
