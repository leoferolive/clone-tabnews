export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9a8d4, #fbcfe8, #c084fc)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corações flutuando */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            fontSize: "4rem",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          💖
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "20%",
            fontSize: "3.5rem",
            animation: "float 8s ease-in-out infinite",
          }}
        >
          💕
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "30%",
            fontSize: "4rem",
            animation: "float 7s ease-in-out infinite",
          }}
        >
          ❤️
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "serif",
            fontWeight: "bold",
            textShadow:
              "3px 3px 10px rgba(0, 0, 0, 0.35), 0 0 20px rgba(255,255,255,0.35)",
            animation: "heartbeat 2.8s ease-in-out infinite",
            color: "#000",
          }}
        >
          Roberta,{" "}
          <span
            style={{
              color: "#dc2626",
              textShadow:
                "3px 3px 10px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255,255,255,0.3)",
            }}
          >
            te amo muito!
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            marginTop: "15px",
            color: "#000",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Obrigado por me apoiar em tudo!
        </p>

        <p
          style={{
            fontSize: "1.3rem",
            fontStyle: "italic",
            marginTop: "10px",
            color: "#000",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Amo nossa família e nossa Popô 💗
        </p>

        <p
          style={{
            marginTop: "30px",
            fontSize: "1.2rem",
            background: "rgba(255, 255, 255, 0.35)",
            padding: "12px 20px",
            borderRadius: "12px",
            color: "#000",
            boxShadow: "0 0 12px rgba(0,0,0,0.2)",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          💌 Olha o que comprei pra andarmos juntos:{" "}
          <a
            href="https://shopee.com.br/Bicicleta-el%C3%A9trica-dobr%C3%A1vel-para-adultos-NUDA-pedal-tripulado-compras-ao-ar-livre-viagem-i.1384102065.23893181015"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#000",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            uma bicicleta elétrica dobrável
          </a>{" "}
          por <strong>R$ 2.398,31</strong> 😍
        </p>

        {/* Botão animado */}
        <a
          href="https://shopee.com.br/Bicicleta-el%C3%A9trica-dobr%C3%A1vel-para-adultos-NUDA-pedal-tripulado-compras-ao-ar-livre-viagem-i.1384102065.23893181015"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 28px",
            fontSize: "1.2rem",
            background: "linear-gradient(90deg, #ec4899, #c084fc)",
            borderRadius: "30px",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 0 15px rgba(255,255,255,0.4)",
            animation: "glow 2s ease-in-out infinite alternate",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🚴‍♀️ Clique pra ver a bike 💨
        </a>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          20% {
            transform: scale(1.1);
          }
          40% {
            transform: scale(0.95);
          }
          60% {
            transform: scale(1.05);
          }
          80% {
            transform: scale(0.98);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow {
          0% {
            box-shadow:
              0 0 10px #ec4899,
              0 0 20px #c084fc;
          }
          100% {
            box-shadow:
              0 0 20px #f9a8d4,
              0 0 40px #c084fc;
          }
        }
      `}</style>
    </div>
  );
}
