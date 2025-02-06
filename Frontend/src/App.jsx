import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import visaLogo from "/assets/img/visa.png";
import mastercardLogo from "/assets/img/mastercard.png";
import amexLogo from "/assets/img/amex.png";
import dinersLogo from "/assets/img/diners.png";
import rupayLogo from "/assets/img/rupay.png";
import jcbLogo from "/assets/img/jcb.png";
import discoverLogo from "/assets/img/discover.png";

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(null);

  const detectCardType = (number) => {
    const regexPatterns = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      amex: /^3[47]/,
      diners: /^3(?:0[0-5]|[68])/, 
      rupay: /^6(?:0|5)/,
      jcb: /^(?:2131|1800|35)/,
      discover: /^6(?:011|5)/,
    };

    for (const [type, pattern] of Object.entries(regexPatterns)) {
      if (pattern.test(number)) {
        return type;
      }
    }
    return null;
  };

  const handleValidation = () => {
    const detectedType = detectCardType(cardNumber);
    setCardType(detectedType);
  };

  const cardLogos = {
    visa: visaLogo,
    mastercard: mastercardLogo,
    amex: amexLogo,
    diners: dinersLogo,
    rupay: rupayLogo,
    jcb: jcbLogo,
    discover: discoverLogo,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gold">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="p-10 rounded-2xl shadow-xl border-2 border-gold bg-black"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">Credit Card Validator</h1>
        <Card className="p-6 border-gold bg-black text-gold shadow-lg">
          <CardContent className="flex flex-col items-center gap-4">
            <Input
              type="text"
              placeholder="Enter your card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-4 rounded-md border-2 border-gold bg-black text-gold focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <div className="w-full flex justify-center mt-6">
              <Button 
                onClick={handleValidation}
                className="px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-md hover:shadow-lg"
              >
                Validate
              </Button>
            </div>
            {cardType && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 flex flex-col items-center"
              >
                <p className="text-lg text-gold">Detected Card Type:</p>
                <img src={cardLogos[cardType]} alt={cardType} className="w-24 mt-2" />
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}