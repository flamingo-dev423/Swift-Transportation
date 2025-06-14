"use client"

import { useState } from "react"
import LandingPage from "./components/landing-page"
import VerificationForm from "./components/verification-form"
import SuccessPage from "./components/success-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing")

  const handleStartVerification = () => {
    setCurrentPage("form")
  }

  const handleFormSubmit = () => {
    setCurrentPage("success")
  }

  const handleBackToStart = () => {
    setCurrentPage("landing")
  }

  return (
    <div className="min-h-screen">
      {currentPage === "landing" && <LandingPage onStartVerification={handleStartVerification} />}
      {currentPage === "form" && <VerificationForm onSubmitSuccess={handleFormSubmit} />}
      {currentPage === "success" && <SuccessPage onBackToStart={handleBackToStart} />}
    </div>
  )
}
