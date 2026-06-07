import { useParams } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "The Leela Palace, New Delhi",
    city: "Delhi",
    rating: 4.6,
    price: "₹20,000–₹28,000",
    mainImage: "/leela.jpg",
    images: ["/leela1.jpg", "/leela2.jpg"],
    description: "The Leela Palace is one of Delhi's most luxurious hotels, located in the Diplomatic Enclave. It is known for its elegant interiors, premium rooms, high-end dining, and excellent hospitality, making it a strong choice for luxury stays and special occasions.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Fitness Centre", "Multiple Restaurants", "Airport Transfer", "Room Service", "Parking"]
  },
  {
    id: 2,
    name: "The Imperial New Delhi",
    city: "Delhi",
    rating: 4.7,
    price: "₹26,000–₹33,000",
    mainImage: "/imperial.jpg",
    images: ["/imperial1.jpg", "/imperial2.jpg"],
    description: "The Imperial is a famous heritage luxury hotel in central Delhi near Connaught Place. It blends colonial architecture with modern comfort and is popular for its historic charm, premium service, and central location.",
    amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa", "Fitness Centre", "Fine Dining Restaurants", "Bar", "Room Service", "Parking"]
  },
  {
    id: 3,
    name: "Taj Palace, New Delhi",
    city: "Delhi",
    rating: 4.7,
    price: "₹11,000–₹16,000",
    mainImage: "/tajdelhi.jpg",
    images: ["/tajdelhi1.jpg", "/tajdelhi2.jpg"],
    description: "Taj Palace is a well-known 5-star hotel in Chanakyapuri, Delhi. It is popular for business and leisure stays because of its spacious rooms, strong service reputation, and premium facilities.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Fitness Centre", "Restaurants and Bar", "Business Facilities", "Room Service", "Parking"]
  },
  {
    id: 4,
    name: "Shangri-La Eros New Delhi",
    city: "Delhi",
    rating: 4.6,
    price: "₹9,000–₹14,000",
    mainImage: "/shangrila.jpg",
    images: ["/shangrila1.jpg", "/shangrila2.jpg"],
    description: "Shangri-La Eros is a premium 5-star hotel near Connaught Place. It is known for its central location, polished rooms, strong dining options, and suitability for both tourists and business travelers.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym", "Restaurants", "Bar / Lounge", "Room Service", "Parking"]
  },
  {
    id: 5,
    name: "JW Marriott Aerocity",
    city: "Delhi",
    rating: 4.6,
    price: "₹14,000–₹20,000",
    mainImage: "/jwdelhi.jpg",
    images: ["/jwdelhi1.jpg", "/jwdelhi2.jpg"],
    description: "JW Marriott Aerocity is a modern luxury hotel close to Delhi Airport. It is especially suitable for business travelers and people looking for a premium stay with modern amenities and convenient airport connectivity.",
    amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa", "Fitness Centre", "Restaurants and Bar", "Airport Access", "Room Service", "Parking"]
  },
  {
    id: 6,
    name: "The Taj Mahal Palace, Mumbai",
    city: "Mumbai",
    rating: 4.7,
    price: "₹24,000–₹32,000",
    mainImage: "/tajmumbai.jpg",
    images: ["/tajmumbai1.jpg", "/tajmumbai2.jpg"],
    description: "The Taj Mahal Palace is one of the most iconic luxury hotels in Mumbai, located near the Gateway of India in Colaba. It is famous for its heritage architecture, premium hospitality, sea-facing luxury, and fine dining experience.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Fitness Centre", "Multiple Restaurants and Bars", "Room Service", "Concierge / Butler Service", "Parking"]
  },
  {
    id: 7,
    name: "The Oberoi, Mumbai",
    city: "Mumbai",
    rating: 4.7,
    price: "₹18,000–₹27,000",
    mainImage: "/oberoi.jpg",
    images: ["/oberoi1.jpg", "/oberoi2.jpg"],
    description: "The Oberoi is a luxury 5-star hotel at Nariman Point, known for its elegant rooms, Marine Drive views, excellent hospitality, and premium dining. It is a strong choice for both business and leisure travelers.",
    amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa", "Fitness Centre", "Fine Dining Restaurants", "Sea-Facing Rooms", "Room Service", "Parking"]
  },
  {
    id: 8,
    name: "JW Marriott Mumbai Juhu",
    city: "Mumbai",
    rating: 4.6,
    price: "₹20,000–₹28,000",
    mainImage: "/jwmumbai.jpg",
    images: ["/jwmumbai1.jpg", "/jwmumbai2.jpg"],
    description: "JW Marriott Mumbai Juhu is a premium beachfront hotel in Mumbai. It is popular for its sea-facing setting, luxury rooms, upscale dining, and resort-like atmosphere, making it ideal for vacations and premium stays.",
    amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa", "Fitness Centre", "Beach Access", "Restaurants and Bar", "Room Service", "Parking"]
  },
  {
    id: 9,
    name: "ITC Maratha, Mumbai",
    city: "Mumbai",
    rating: 4.7,
    price: "₹10,000–₹16,000",
    mainImage: "/itc.jpg",
    images: ["/itc1.jpg", "/itc2.jpg"],
    description: "ITC Maratha is a well-known luxury hotel near Mumbai Airport, appreciated for its grand interiors, comfortable rooms, strong dining options, and convenient location for both tourists and business travelers.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym", "Restaurants and Bar", "Airport Proximity", "Room Service", "Parking"]
  },
  {
    id: 10,
    name: "Trident Hotel, Mumbai",
    city: "Mumbai",
    rating: 4.6,
    price: "₹14,000–₹22,000",
    mainImage: "/trident.jpg",
    images: ["/trident1.jpg", "/trident2.jpg"],
    description: "Trident Hotel at Nariman Point is a premium 5-star hotel known for its elegant rooms, sea-facing views, and polished business-friendly atmosphere. It is a popular luxury stay option in South Mumbai.",
    amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa", "Fitness Centre", "Restaurants", "Business Facilities", "Room Service", "Parking"]
  }
];

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === Number(id));

  if (!hotel) return <h1>Hotel not found</h1>;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
        <p className="text-gray-500">{hotel.city}</p>

        <div className="grid grid-cols-4 gap-3 mt-4 h-[420px]">
          <img
            src={hotel.mainImage}
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-2xl"
          />
          {hotel.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* 🔥 MAIN CONTENT + SIDEBAR */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">

          {/* RATING */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-600 text-white px-3 py-1 rounded-lg font-semibold">
              ⭐ {hotel.rating}
            </span>
            <span className="text-gray-600 text-sm">
              Excellent stay experience
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">About this hotel</h2>
            <p className="text-gray-600 leading-relaxed">
              {hotel.description}
            </p>
          </div>

          {/* AMENITIES */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {hotel.amenities.map((a, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white border rounded-full text-sm shadow-sm"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 FLOATING BOOKING CARD */}
        <div className="sticky top-24 h-fit">
          <div className="bg-white p-6 rounded-2xl shadow-xl border">

            <p className="text-gray-500 text-sm">Price per night</p>
            <p className="text-3xl font-bold mb-4">{hotel.price}</p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition">
              Book Now
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              No payment required now
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HotelDetails;