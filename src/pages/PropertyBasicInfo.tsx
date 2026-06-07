type Props = {
  formData: any;
  updateFormData: (field: string, value: any) => void;
};

const inputClass =
  "w-full px-3 py-2.5 rounded-md border border-dark-navy-border bg-dark-navy text-dark-navy-foreground text-sm outline-none focus:border-primary";

const labelClass =
  "block text-dark-navy-foreground font-bold text-xs mb-1 mt-4";

const PropertyBasicInfo = ({ formData, updateFormData }: Props) => {
  return (
    <div>
      {/* Property Name */}
      <label className={labelClass}>Property Name</label>
      <input
        type="text"
        value={formData.propertyName}
        onChange={(e) => updateFormData("propertyName", e.target.value)}
        className={inputClass}
      />

      {/* Property Type */}
      <label className={labelClass}>Property Type</label>
      <input
        type="text"
        placeholder="Hotel, Resort, Villa, Apartment, Homestay, etc."
        value={formData.propertyType}
        onChange={(e) => updateFormData("propertyType", e.target.value)}
        className={inputClass}
      />

      {/* Address */}
      <label className={labelClass}>Address</label>
      <input
        type="text"
        placeholder="Enter full address"
        value={formData.address}
        onChange={(e) => updateFormData("address", e.target.value)}
        className={inputClass}
      />

      {/* City / State / Zip */}
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData("city", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
            State
          </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => updateFormData("state", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
            Zip Code
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => updateFormData("zipCode", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Better Location Input */}
      <label className={labelClass}>Google Maps Link</label>
      <input
        type="text"
        placeholder="Paste Google Maps location link"
        value={formData.mapLink || ""}
        onChange={(e) => updateFormData("mapLink", e.target.value)}
        className={inputClass}
      />

      <label className={labelClass}>Nearby Landmark</label>
      <input
        type="text"
        placeholder="e.g. Near Railway Station / Mall Road"
        value={formData.landmark || ""}
        onChange={(e) => updateFormData("landmark", e.target.value)}
        className={inputClass}
      />

      {/* Contact */}
      <label className={labelClass}>Phone Number</label>
      <div className="flex gap-3">
        <select
          value={formData.countryCode || "+91"}
          onChange={(e) => updateFormData("countryCode", e.target.value)}
          className="w-[120px] px-3 py-2.5 rounded-md border border-dark-navy-border bg-dark-navy text-dark-navy-foreground text-sm outline-none focus:border-primary"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+971">🇦🇪 +971</option>
        </select>

        <input
          type="text"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          className="flex-1 px-3 py-2.5 rounded-md border border-dark-navy-border bg-dark-navy text-dark-navy-foreground text-sm outline-none focus:border-primary"
        />
      </div>

      <label className={labelClass}>Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => updateFormData("email", e.target.value)}
        className={inputClass}
      />

      {/* Owner Name */}
      <label className={labelClass}>Owner / Host Name</label>
      <input
        type="text"
        value={formData.ownerName}
        onChange={(e) => updateFormData("ownerName", e.target.value)}
        className={inputClass}
      />

      {/* Description */}
      <label className={labelClass}>Short Description</label>
      <input
        type="text"
        placeholder="One-line attractive summary"
        value={formData.shortDescription}
        onChange={(e) => updateFormData("shortDescription", e.target.value)}
        className={inputClass}
      />

      <label className={labelClass}>Long Description</label>
      <textarea
        rows={5}
        placeholder="Describe the property in detail..."
        value={formData.longDescription}
        onChange={(e) => updateFormData("longDescription", e.target.value)}
        className={inputClass}
      />

      {/* Check-in / Check-out */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
            Check-in Time
          </label>
          <input
            type="time"
            value={formData.checkIn}
            onChange={(e) => updateFormData("checkIn", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
            Check-out Time
          </label>
          <input
            type="time"
            value={formData.checkOut}
            onChange={(e) => updateFormData("checkOut", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Policies */}
      <label className={labelClass}>Cancellation Policy</label>
      <input
        type="text"
        value={formData.cancellationPolicy}
        onChange={(e) => updateFormData("cancellationPolicy", e.target.value)}
        className={inputClass}
      />

      <label className={labelClass}>Pet Policy</label>
      <input
        type="text"
        placeholder="Allowed / Not Allowed"
        value={formData.petPolicy}
        onChange={(e) => updateFormData("petPolicy", e.target.value)}
        className={inputClass}
      />

      <label className={labelClass}>Smoking Allowed?</label>
      <select
        value={formData.smokingAllowed}
        onChange={(e) => updateFormData("smokingAllowed", e.target.value)}
        className={inputClass}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label className={labelClass}>GST Number</label>
      <input
        type="text"
        value={formData.gstNumber}
        onChange={(e) => updateFormData("gstNumber", e.target.value)}
        className={inputClass}
      />
    </div>
  );
};

export default PropertyBasicInfo;