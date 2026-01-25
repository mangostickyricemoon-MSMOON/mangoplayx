// src/components/FAQ.jsx
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../faq.css"

const faqs = [
  {
    q: "Do I need to have a Web3 wallet to access the game?",
    a: "No, you can enjoy free-to-play games without a wallet. Play-to-earn requires wallet connection."
  },
  {
    q: "What Web3 wallets does the game support?",
    a: "We support MetaMask, WalletConnect, and RainbowKit-compatible wallets."
  },
  {
    q: "Which network is the game on?",
    a: "The games run on Shido Network for play-to-earn features."
  },
  {
    q: "How can I add Shido Network to my wallet?",
    a: "You can add it manually via custom RPC settings in your wallet."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
