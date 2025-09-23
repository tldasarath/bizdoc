import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to our business support. How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);

  const scrollToBottom = () => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previous || "";
    }
    return () => {
      document.body.style.overflow = previous || "";
    };
  }, [isOpen]);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;

    let touchStartY = 0;

    const onWheel = (e) => {
      const delta = e.deltaY;
      const up = delta < 0;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if ((up && atTop) || (!up && atBottom)) {
        e.preventDefault();
      }
      e.stopPropagation();
    };

    const onTouchStart = (e) => {
      touchStartY = e.touches ? e.touches[0].clientY : 0;
    };

    const onTouchMove = (e) => {
      if (!e.touches) return;
      const currentY = e.touches[0].clientY;
      const dy = touchStartY - currentY;
      const scrollingDown = dy > 0;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if ((scrollingDown && atBottom) || (!scrollingDown && atTop)) {
        e.preventDefault();
      }
      e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [isOpen]);

  const toggleChat = () => {
    if (isOpen) {
      setMessages([{ text: "Hello! Welcome to our business support. How can I assist you today?", sender: "bot" }]);
      setShowQuickQuestions(true);
      setInputValue("");
    }
    setIsOpen(!isOpen);
  };

  const defaultQuestions = [
    "What services do you offer?",
    "How can I contact your team?",
    "What are your business hours?",
    "Do you have pricing information?"
  ];

  const servicesList = {
    "Business Setup Services": "Complete support for company registration, trade license, approvals, office setup, and compliance to help you start your business smoothly.",
    "PRO Services": "Handling visa processing, labor contracts, document clearance, and government approvals efficiently.",
    "Document Attestation Services": "Attestation of personal, educational, and commercial documents for use in the UAE.",
    "Legal Services": "Corporate legal advice, contract drafting, dispute resolution, and full legal support for businesses and individuals.",
    "Legal Translation Services": "Certified translation for contracts, agreements, and legal documents recognized by UAE authorities.",
    "Bank Account Opening Services": "Assistance in opening business or personal bank accounts with proper documentation and approvals.",
    "Family Visa Services": "Application, renewal, and residency sponsorship for dependents in the UAE.",
    "Golden Visa Services": "Support for investors, professionals, and skilled talents with Golden Visa applications and renewals.",
    "Legal Assistance (Cases)": "Professional support for civil, commercial, and corporate legal cases.",
    "Tax & Compliance Services": "VAT registration, filing, bookkeeping, audits, and other compliance services.",
    "Trademark Registration": "Assistance with trademark application, registration, and protection of your brand in the UAE.",
    "End-to-End Business Support": "Comprehensive support from company setup, licensing, banking, visas, compliance, to daily operations."
  };

  const botResponses = {
    "what services do you offer?": "Here are the services we provide. Please click on a service to know more:",
    "how can i contact your team?": "You can reach us at <a href=\"mailto:info@bizdoc.ae\" class=\"contact-link\">info@bizdoc.ae</a> or call <a href=\"tel:+97145707920\" class=\"contact-link\">+971 4 570 7920</a> / <a href=\"tel:+971524740055\" class=\"contact-link\">+971 52 474 0055</a> during business hours.",
    "what are your business hours?": "Our customer support is available Monday to Friday, 9:00 AM to 6:00 PM UAE time.",
    "do you have pricing information?": "Our pricing varies based on the specific services you need. You can schedule a consultation to get a personalized quote.",
    "default": "I'm sorry, I didn't understand that. Could you please rephrase your question or choose one of the options below?"
  };

  const handleSendMessage = (messageText = null) => {
    const text = messageText || inputValue;
    if (text.trim() === "") return;

    const newMessages = [...messages, { text: text, sender: "user" }];
    setMessages(newMessages);
    setInputValue("");
    setShowQuickQuestions(false);
    setIsTyping(true);

    setTimeout(() => {
      const lowerCaseText = text.toLowerCase();
      const botResponse = botResponses[lowerCaseText] || botResponses["default"];

      if (lowerCaseText === "what services do you offer?") {
        setMessages([
          ...newMessages,
          { text: botResponse, sender: "bot", type: "services" }
        ]);
      } else if (servicesList[text]) {
        setMessages([
          ...newMessages,
          { text: `${text}: ${servicesList[text]}`, sender: "bot" },
          { text: "➡️ For more details: <a href=\"mailto:info@bizdoc.ae\" class=\"contact-link\">info@bizdoc.ae</a> | <a href=\"tel:+971551642244\" class=\"contact-link\">+971 4 570 7920 </a> / <a href=\"tel:+971524740055\" class=\"contact-link\">+971 52 474 0055</a>", sender: "bot", type: "highlight" }
        ]);
      } else {
        setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
      }
      setIsTyping(false);

      if (botResponse === botResponses["default"] && !servicesList[text]) {
        setShowQuickQuestions(true);
      }
    }, 1000);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleQuickQuestionClick = (question) => {
    handleSendMessage(question);
  };

  const handleServiceClick = (service) => {
    handleSendMessage(service);
  };

  return (
    <div className="chatbot-container">
      <style>{`
        .contact-link:hover {
  background: linear-gradient(to right, #c2994e, #f3e4b9);
  /* gold gradient */
  -webkit-background-clip: text;
  /* for Safari/Chrome */
  -webkit-text-fill-color: transparent;
  /* for Safari/Chrome */
  background-clip: text;
  /* standard property */
  color: transparent !important;/       }
      `}</style>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="chatbot-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div>
                <h3>Business Support</h3>
                <p>We're online and ready to help</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={toggleChat}>×</button>
          </div>

          <div className="chatbot-messages" ref={messagesContainerRef}>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender} ${message.type === "highlight" ? 'highlight' : ''}`}>
                <span dangerouslySetInnerHTML={{ __html: message.text }} />
                {message.type === "services" && (
                  <div className="questions-container">
                    {Object.keys(servicesList).map((service, i) => (
                      <button key={i} className="question-chip" onClick={() => handleServiceClick(service)}>
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="message bot typing">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showQuickQuestions && (
            <div className="quick-questions">
              <p>Quick questions:</p>
              <div className="questions-container">
                {defaultQuestions.map((question, index) => (
                  <button key={index} className="question-chip" onClick={() => handleQuickQuestionClick(question)}>
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleInputKeyPress}
              placeholder="Type your message..."
            />
             <button onClick={() => handleSendMessage()} disabled={inputValue.trim() === ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button className={`chatbot-toggle ${isOpen ? 'active' : ''}`} onClick={toggleChat}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
