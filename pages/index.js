export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hearts}>
        <div style={{ ...styles.heart, top: "10%", left: "15%", fontSize: "60px", animation: "bounce 4s ease-in-out infinite" }}>💖</div>
        <div style={{ ...styles.heart, top: "50%", right: "20%", fontSize: "50px", animation: "bounce 6s ease-in-out infinite" }}>💕</div>
        <div style={{ ...styles.heart, bottom: "15%", left: "25%", fontSize: "60px", animation: "bounce 4s ease-in-out infinite" }}>❤️</div>
      </div>

      <div style={styles.text}>
        <h1 style={styles.title}>Roberta, te amo muito!</h1>
        <p style={styles.subtitle}>Obrigado por me apoiar em tudo!</p>
        <p style={styles.footer}>Amo nossa família e nossa Popô 💗</p>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.1); }
          40% { transform: scale(0.95); }
          60% { transform: scale(1.05); }
          80% { transform: scale(0.98); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        h1 {
          animation: heartbeat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fb7185, #f9a8d4, #c084fc)",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hearts: {
    position: "absolute",
    inset: 0,
    opacity: 0.3,
  },
  heart: {
    position: "absolute",
  },
  text: {
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontSize: "60px",
    fontFamily: "serif",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  footer: {
    fontSize: "22px",
    fontStyle: "italic",
  },
};
