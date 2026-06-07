import { useState } from "react";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import PropertyBasicInfo from "./PropertyBasicInfo";
import PropertyMediaAmenities from "./PropertyMediaAmenities";
import PropertyRoomTypes from "./PropertyRoomTypes";

export interface RoomType {
  roomTypeName: string;
  count: string;
  price: string;
  beds: string;
  amenities: string;
  roomSize: string;
  roomFiles: File[];
  roomVideo: File | null;
}

const ListProperty = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Page 1
    propertyName: "",
    propertyType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    latitude: "",
    longitude: "",
    phone: "",
    email: "",
    ownerName: "",
    shortDescription: "",
    longDescription: "",
    checkIn: "",
    checkOut: "",
    cancellationPolicy: "",
    petPolicy: "",
    smokingAllowed: "",
    gstNumber: "",

    // Page 2
    hotelPhotos: [] as File[],
    hotelVideo: null as File | null,
    amenities: [] as string[],

    // Page 3
    roomTypes: [
      {
        roomTypeName: "",
        count: "",
        price: "",
        beds: "",
        amenities: "",
        roomSize: "",
        roomFiles: [],
        roomVideo: null,
      },
    ] as RoomType[],
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateRoomTypes = (updatedRooms: RoomType[]) => {
    setFormData((prev) => ({
      ...prev,
      roomTypes: updatedRooms,
    }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("FINAL FORM DATA:", formData);
    alert("Property submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-navy">
      <Header />
      <NavigationBar />

      <div className="w-[92%] max-w-[850px] mx-auto my-8 bg-dark-navy-card border border-dark-navy-border rounded-xl p-8">
        <p className="text-center text-brand-orange font-bold mb-2 text-sm">
          Let’s fill the form and be one step closer to monetize your property
        </p>

        {/* Step Indicator */}
        <div className="flex justify-center items-center gap-4 mb-8 mt-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= item
                    ? "bg-primary text-primary-foreground"
                    : "bg-dark-navy border border-dark-navy-border text-dark-navy-foreground"
                }`}
              >
                {item}
              </div>
              {item !== 3 && (
                <div
                  className={`w-14 h-1 rounded ${
                    step > item ? "bg-primary" : "bg-dark-navy-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-dark-navy-foreground">
            {step === 1 && "Basic Property Details"}
            {step === 2 && "Hotel Photos, Video & Amenities"}
            {step === 3 && "Room Types & Pricing"}
          </h2>
        </div>

        {step === 1 && (
          <PropertyBasicInfo
            formData={formData}
            updateFormData={updateFormData}
          />
        )}

        {step === 2 && (
          <PropertyMediaAmenities
            formData={formData}
            updateFormData={updateFormData}
          />
        )}

        {step === 3 && (
          <PropertyRoomTypes
            roomTypes={formData.roomTypes}
            updateRoomTypes={updateRoomTypes}
          />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 gap-4">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-6 py-3 rounded-lg font-bold text-sm border border-dark-navy-border text-dark-navy-foreground hover:opacity-90"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:opacity-90"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-bold text-sm hover:opacity-90"
            >
              Submit Property
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListProperty;