export default function handler(req, res) {
  const { productId } = req.query;
  
  const dealersData = {
    1: [
        { id: 1, name: "Dealer A", price: 100, location: "New York" },
        { id: 2, name: "Dealer B", price: 105, location: "Los Angeles" },
        { id: 3, name: "Dealer C", price: 98, location: "Chicago" }
    ],
    2: [
        { id: 1, name: "Dealer A", price: 200, location: "New York" },
        { id: 2, name: "Dealer B", price: 210, location: "Los Angeles" },
        { id: 4, name: "Dealer D", price: 195, location: "Houston" }
    ],
    3: [
        { id: 2, name: "Dealer B", price: 50, location: "Los Angeles" },
        { id: 3, name: "Dealer C", price: 48, location: "Chicago" },
        { id: 4, name: "Dealer D", price: 52, location: "Houston" }
    ]
  };
  
  const dealers = dealersData[productId] || [];
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ dealers });
}