import { useState } from "react";

const defaultAmenities = [
  "WiFi",
  "AC",
  "Parking",
  "Pool",
  "Gym",
  "Restaurant",
  "Room Service",
  "Laundry",
  "Spa",
  "TV",
  "Power Backup",
  "Lift",
  "Pet Friendly",
  "Smoking Area",
  "Breakfast Included",
  "Conference Hall",
  "Bar",
  "Security",
  "CCTV",
  "Balcony",
];

type Props = {
  formData: any;
  updateFormData: (field: string, value: any) => void;
};

const PropertyMediaAmenities = ({ formData, updateFormData }: Props) => {
  const [customAmenity, setCustomAmenity] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleHotelPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const existing = formData.hotelPhotos || [];
    const totalFiles = [...existing, ...files].slice(0, 10);
    updateFormData("hotelPhotos", totalFiles);
  };

  const handleHotelVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateFormData("hotelVideo", file);
  };

  const removeHotelPhoto = (index: number) => {
    const updated = [...formData.hotelPhotos];
    updated.splice(index, 1);
    updateFormData("hotelPhotos", updated);
  };

  const removeHotelVideo = () => {
    updateFormData("hotelVideo", null);
  };

  const toggleAmenity = (amenity: string) => {
    const selected = formData.amenities || [];
    if (selected.includes(amenity)) {
      updateFormData(
        "amenities",
        selected.filter((item: string) => item !== amenity)
      );
    } else {
      updateFormData("amenities", [...selected, amenity]);
    }
  };

  const addOrEditCustomAmenity = () => {
    const trimmed = customAmenity.trim();
    if (!trimmed) return;

    const currentCustom = [...(formData.customAmenities || [])];
    const currentSelected = [...(formData.amenities || [])];

    if (editingIndex !== null) {
      const oldAmenity = currentCustom[editingIndex];

      currentCustom[editingIndex] = trimmed;

      const selectedIndex = currentSelected.indexOf(oldAmenity);
      if (selectedIndex !== -1) {
        currentSelected[selectedIndex] = trimmed;
      }

      updateFormData("customAmenities", currentCustom);
      updateFormData("amenities", currentSelected);
      setEditingIndex(null);
    } else {
      if (!currentCustom.includes(trimmed)) {
        updateFormData("customAmenities", [...currentCustom, trimmed]);
        updateFormData("amenities", [...currentSelected, trimmed]);
      }
    }

    setCustomAmenity("");
  };

  const editCustomAmenity = (index: number) => {
    const item = formData.customAmenities[index];
    setCustomAmenity(item);
    setEditingIndex(index);
  };

  const deleteCustomAmenity = (index: number) => {
    const itemToDelete = formData.customAmenities[index];

    const updatedCustom = formData.customAmenities.filter(
      (_: string, i: number) => i !== index
    );

    const updatedSelected = (formData.amenities || []).filter(
      (item: string) => item !== itemToDelete
    );

    updateFormData("customAmenities", updatedCustom);
    updateFormData("amenities", updatedSelected);

    if (editingIndex === index) {
      setCustomAmenity("");
      setEditingIndex(null);
    }
  };

  const allAmenities = [...defaultAmenities, ...(formData.customAmenities || [])];

  return (
    <div>
      {/* Photo Upload */}
      <label className="block text-dark-navy-foreground font-bold text-xs mb-2 mt-4">
        Hotel Photos (Min 4, Max 10)
      </label>

      <div
        className="w-full border-2 border-dashed border-dark-navy-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition"
        onClick={() => document.getElementById("hotel-photo-upload")?.click()}
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary mb-3">
          +
        </div>
        <p className="text-dark-navy-foreground font-semibold text-sm">
          Add Hotel Photos
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Click to upload gallery images
        </p>
      </div>

      <input
        id="hotel-photo-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={handleHotelPhotos}
        className="hidden"
      />

      {/* Photo Previews */}
      {formData.hotelPhotos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {formData.hotelPhotos.map((file: File, index: number) => (
            <div
              key={index}
              className="relative border border-dark-navy-border rounded-xl overflow-hidden bg-dark-navy"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Hotel ${index + 1}`}
                className="w-full h-32 object-cover"
              />
              <button
                type="button"
                onClick={() => removeHotelPhoto(index)}
                className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full text-sm font-bold hover:opacity-90"
              >
                ×
              </button>
              <p className="text-xs text-dark-navy-foreground p-2 truncate">
                {file.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Video Upload */}
      <label className="block text-dark-navy-foreground font-bold text-xs mb-2 mt-6">
        Hotel Video (Only 1)
      </label>

      <div
        className="w-full border-2 border-dashed border-dark-navy-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition"
        onClick={() => document.getElementById("hotel-video-upload")?.click()}
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary mb-3">
          +
        </div>
        <p className="text-dark-navy-foreground font-semibold text-sm">
          Add Hotel Video
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Upload one property walkthrough video
        </p>
      </div>

      <input
        id="hotel-video-upload"
        type="file"
        accept="video/*"
        onChange={handleHotelVideo}
        className="hidden"
      />

      {formData.hotelVideo && (
        <div className="mt-4 border border-dark-navy-border rounded-xl p-4 flex items-center justify-between bg-dark-navy">
          <div>
            <p className="text-sm font-semibold text-green-400">Video Added</p>
            <p className="text-xs text-dark-navy-foreground truncate">
              {formData.hotelVideo.name}
            </p>
          </div>
          <button
            type="button"
            onClick={removeHotelVideo}
            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
          >
            Remove
          </button>
        </div>
      )}

      {/* Amenities */}
      <label className="block text-dark-navy-foreground font-bold text-xs mb-3 mt-8">
        Hotel Amenities
      </label>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {allAmenities.map((amenity) => (
          <label
            key={amenity}
            className="flex items-center gap-2 text-sm text-dark-navy-foreground cursor-pointer"
          >
            <input
              type="checkbox"
              checked={(formData.amenities || []).includes(amenity)}
              onChange={() => toggleAmenity(amenity)}
              className="accent-destructive"
            />
            {amenity}
          </label>
        ))}
      </div>

      {/* Custom Amenity */}
      <div className="mt-6">
        <label className="block text-dark-navy-foreground font-bold text-xs mb-2">
          Add Custom Amenity
        </label>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="e.g. Bonfire, Mountain View, Rooftop Cafe"
            value={customAmenity}
            onChange={(e) => setCustomAmenity(e.target.value)}
            className="flex-1 px-3 py-2.5 rounded-md border border-dark-navy-border bg-dark-navy text-dark-navy-foreground text-sm outline-none focus:border-primary"
          />
          <button
            type="button"
            onClick={addOrEditCustomAmenity}
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-bold text-sm hover:opacity-90"
          >
            {editingIndex !== null ? "Update" : "+ Add"}
          </button>
        </div>
      </div>

      {/* Custom Amenity List */}
      {(formData.customAmenities || []).length > 0 && (
        <div className="mt-5">
          <p className="text-sm font-semibold text-brand-orange mb-3">
            Your Custom Amenities
          </p>

          <div className="flex flex-wrap gap-3">
            {formData.customAmenities.map((item: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-dark-navy border border-dark-navy-border px-3 py-2 rounded-full text-sm text-dark-navy-foreground"
              >
                <span>{item}</span>

                <button
                  type="button"
                  onClick={() => editCustomAmenity(index)}
                  className="text-blue-400 hover:opacity-80 text-xs font-semibold"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => deleteCustomAmenity(index)}
                  className="text-red-400 hover:opacity-80 text-xs font-semibold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyMediaAmenities;