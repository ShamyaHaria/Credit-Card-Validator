package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"strings"
)

func isValidLuhn(cardNumber string) bool {
	var sum int
	alt := false
	for i := len(cardNumber) - 1; i >= 0; i-- {
		n, err := strconv.Atoi(string(cardNumber[i]))
		if err != nil {
			return false
		}
		if alt {
			n *= 2
			if n > 9 {
				n -= 9
			}
		}
		sum += n
		alt = !alt
	}
	return sum%10 == 0
}

func getCardNetwork(cardNumber string) string {
	if len(cardNumber) < 2 {
		return "Unknown"
	}

	switch {
	case strings.HasPrefix(cardNumber, "4"):
		return "Visa"
	case strings.HasPrefix(cardNumber, "5"):
		return "MasterCard"
	case strings.HasPrefix(cardNumber, "34") || strings.HasPrefix(cardNumber, "37"):
		return "American Express"
	case strings.HasPrefix(cardNumber, "60"):
		return "Discover"
	case strings.HasPrefix(cardNumber, "35"):
		return "JCB"
	case strings.HasPrefix(cardNumber, "36") || strings.HasPrefix(cardNumber, "38"):
		return "Diners Club"
	case strings.HasPrefix(cardNumber, "65"):
		return "RuPay"
	default:
		return "Unknown"
	}
}

type Request struct {
	CardNumber string `json:"card_number"`
}

type Response struct {
	Valid      bool   `json:"valid"`
	CardType   string `json:"card_type"`
}

func validateHandler(w http.ResponseWriter, r *http.Request) {
    // Set CORS headers
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

    // Handle preflight (OPTIONS) request
    if r.Method == http.MethodOptions {
        w.WriteHeader(http.StatusNoContent)
        return
    }

    if r.Method != http.MethodPost {
        http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
        return
    }

    var req Request
    err := json.NewDecoder(r.Body).Decode(&req)
    if err != nil || req.CardNumber == "" {
        http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
        return
    }

    valid := isValidLuhn(req.CardNumber)
    resp := Response{Valid: valid}

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/validate", validateHandler)
	fmt.Println("Server is running on port 8080...")
	http.ListenAndServe(":8080", nil)
}