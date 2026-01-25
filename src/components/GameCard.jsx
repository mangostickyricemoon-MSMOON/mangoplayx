import { motion } from "framer-motion"
import "../GameCard.css"

export default function GameCard({ title, desc, image, link, buttonText = "Play" }) {
  return (
    <motion.div
      className="game-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {image && (
        link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="game-image-link">
            <img
              src={image}
              alt={title}
              className="game-image"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={title}
            className="game-image"
          />
        )
      )}
      <div className="game-content">
        <h3 className="game-title">{title}</h3>
        <p className="game-desc">{desc}</p>

        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="game-btn">
            {buttonText}
          </a>
        ) : (
          <button className="game-btn" disabled>
            {buttonText}
          </button>
        )}
      </div>
    </motion.div>
  )
}
