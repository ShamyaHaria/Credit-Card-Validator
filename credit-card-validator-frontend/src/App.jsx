import { useState } from "react";
import axios from "axios";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    try {
      const res = await axios.post("http://localhost:8080/validate", {
        card_number: cardNumber,
      });

      setResponse(res.data);
    } catch (err) {
      setError(err.response ? err.response.data.error : "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Credit Card Validator</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Validate
          </button>
        </form>

        {response && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            <p><strong>Valid:</strong> {response.valid ? "✅ Yes" : "❌ No"}</p>
            {response.card_type && <p><strong>Card Type:</strong> {response.card_type}</p>}
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;