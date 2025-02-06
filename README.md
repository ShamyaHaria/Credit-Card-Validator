<<<<<<< HEAD
# Credit Card Validator

🚀 **Overview**

The Credit Card Validator is a web-based application that allows users to check the validity of their credit card numbers using the Luhn Algorithm. The application is built with a Go backend and a React frontend, offering a visually appealing and responsive user experience.

🎨 **Features**

- Real-time Credit Card Validation using the Luhn algorithm.
- Modern & Elegant UI: A black and gold themed interface with high-quality animations.
- Smooth User Experience: Well-structured input fields, responsive design, and clear feedback.
- Dockerized Deployment: Easily run the application using Docker.

### Supports multiple card types:

<div style="display: flex; justify-content: space-around; align-items: center; gap: 20px;">

  <img src="Frontend/assets/img/visa.png" width="130" height="100" />
  <img src="Frontend/assets/img/mastercard.png" width="150" height="100" />
  <img src="Frontend/assets/img/diners.png" width="175" height="100" />
  <img src="Frontend/assets/img/amex.png" width="100" height="100" />
  <img src="Frontend/assets/img/rupay.png" width="125" height="100" />
  <img src="Frontend/assets/img/jcb.png" width="150" height="100" />
  <img src="Frontend/assets/img/discover.png" width="125" height="125" />
</div>


🛠️ **Tech Stack**

### **Frontend:**
- React.js (Vite setup)
- Tailwind CSS for styling
- Framer Motion for animations

### **Backend:**
- Go (Gin framework)
- Luhn Algorithm for validation
- JSON API for communication

### **Deployment & Tools:**
- Docker for containerization
- Vite for fast development

📦 **Installation & Setup**

**Prerequisites:**

Ensure you have the following installed:

- Go (>= 1.19)
- Node.js (>= 16.0)
- Docker (for containerized deployment)

---

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/ShamyaHaria/Credit-Card-Validator.git
cd Credit-Card-Validator
```

2️⃣ **Backend Setup**

```bash
cd Backend
go mod tidy
go run main.go
```
The Backend will start on ```http://localhost:8080```

3️⃣ **Frontend Setup**

```bash
cd Frontend
npm install
npm run dev
```
The Frontend will start on ```http://localhost:5173```

4️⃣ **Run with Docker (Alternative Deployment)**

```bash
docker build -t credit-card-validator .
docker run -p 8080:8080 credit-card-validator
```

📝 **API Endpoints**

| Method | Endpoint     | Description                            |
|--------|--------------|----------------------------------------|
| POST   | /validate    | Validates a credit card number         |

**Example Request (POST /validate):**

```json
{
  "card_number": "4111111111111111"
}
```

**Example Response:**

```json
{
  "valid": true,
  "card_type": "Visa"
}
```

📜 **License**

This project is licensed under the [Apache 2.0 License](https://github.com/ShamyaHaria/Credit-Card-Validator/blob/main/LICENSE).
=======
# Credit-Card-Validator
An efficient API to validate Credit Cards and detect associated payment networks in real-time.
>>>>>>> parent of 3a3f771 (Creating Readme file)
