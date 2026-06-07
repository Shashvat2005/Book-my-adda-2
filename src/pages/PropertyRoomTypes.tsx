import type { RoomType } from "./ListProperty";

type Props = {
  roomTypes: RoomType[];
  updateRoomTypes: (rooms: RoomType[]) => void;
};

const inputClass =
  "w-full px-3 py-2.5 rounded-md border border-dark-navy-border bg-dark-navy text-dark-navy-foreground text-sm outline-none focus:border-primary";

const PropertyRoomTypes = ({ roomTypes, updateRoomTypes }: Props) => {
  const handleRoomChange = (
    index: number,
    field: keyof RoomType,
    value: any
  ) => {
    const updated = [...roomTypes];
    updated[index][field] = value;
    updateRoomTypes(updated);
  };

  const handleRoomFiles = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    const updated = [...roomTypes];
    const existing = updated[index].roomFiles || [];
    updated[index].roomFiles = [...existing, ...files].slice(0, 15);
    updateRoomTypes(updated);
  };

  const handleRoomVideo = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    const updated = [...roomTypes];
    updated[index].roomVideo = file;
    updateRoomTypes(updated);
  };

  const removeRoomImage = (roomIndex: number, imageIndex: number) => {
    const updated = [...roomTypes];
    updated[roomIndex].roomFiles.splice(imageIndex, 1);
    updateRoomTypes(updated);
  };

  const removeRoomVideo = (roomIndex: number) => {
    const updated = [...roomTypes];
    updated[roomIndex].roomVideo = null;
    updateRoomTypes(updated);
  };

  const addRoomType = () => {
    updateRoomTypes([
      ...roomTypes,
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
    ]);
  };

  const removeRoomType = (index: number) => {
    const updated = roomTypes.filter((_, i) => i !== index);
    updateRoomTypes(updated);
  };

  return (
    <div>
      {roomTypes.map((room, index) => (
        <div
          key={index}
          className="border border-dark-navy-border rounded-xl p-5 mb-6 bg-dark-navy"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-brand-orange">
              Room Type {index + 1}
            </h3>

            {roomTypes.length > 1 && (
              <button
                onClick={() => removeRoomType(index)}
                className="text-red-400 text-sm font-semibold"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
                Room Type Name
              </label>
              <input
                type="text"
                placeholder="Single / Deluxe / Suite"
                value={room.roomTypeName}
                onChange={(e) =>
                  handleRoomChange(index, "roomTypeName", e.target.value)
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
                Count of This Type
              </label>
              <input
                type="number"
                value={room.count}
                onChange={(e) => handleRoomChange(index, "count", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
                Price Per Night
              </label>
              <input
                type="number"
                value={room.price}
                onChange={(e) => handleRoomChange(index, "price", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
                Number of Beds
              </label>
              <input
                type="number"
                value={room.beds}
                onChange={(e) => handleRoomChange(index, "beds", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
                Room Size (sq m)
              </label>
              <input
                type="text"
                value={room.roomSize}
                onChange={(e) =>
                  handleRoomChange(index, "roomSize", e.target.value)
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-dark-navy-foreground font-bold text-xs mb-1">
                Room Amenities (Optional)
              </label>
              <input
                type="text"
                placeholder="TV, Balcony, Mini Fridge..."
                value={room.amenities}
                onChange={(e) =>
                  handleRoomChange(index, "amenities", e.target.value)
                }
                className={inputClass}
              />
            </div>
          </div>

          {/* Room Images Upload */}
          <div className="mt-6">
            <label className="block text-dark-navy-foreground font-bold text-xs mb-2">
              Room Images (Max 15)
            </label>

            <div
              className="w-full border-2 border-dashed border-dark-navy-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition"
              onClick={() =>
                document.getElementById(`room-image-upload-${index}`)?.click()
              }
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary mb-3">
                +
              </div>
              <p className="text-dark-navy-foreground font-semibold text-sm">
                Add Room Images
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Upload room gallery images
              </p>
            </div>

            <input
              id={`room-image-upload-${index}`}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleRoomFiles(index, e)}
              className="hidden"
            />

            {/* Room Image Previews */}
            {room.roomFiles.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {room.roomFiles.map((file, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative border border-dark-navy-border rounded-xl overflow-hidden bg-dark-navy"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Room ${imageIndex + 1}`}
                      className="w-full h-32 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeRoomImage(index, imageIndex)}
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
          </div>

          {/* Room Video Upload */}
          <div className="mt-6">
            <label className="block text-dark-navy-foreground font-bold text-xs mb-2">
              Room Video (Optional)
            </label>

            <div
              className="w-full border-2 border-dashed border-dark-navy-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition"
              onClick={() =>
                document.getElementById(`room-video-upload-${index}`)?.click()
              }
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary mb-3">
                +
              </div>
              <p className="text-dark-navy-foreground font-semibold text-sm">
                Add Room Video
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Upload one optional room walkthrough video
              </p>
            </div>

            <input
              id={`room-video-upload-${index}`}
              type="file"
              accept="video/*"
              onChange={(e) => handleRoomVideo(index, e)}
              className="hidden"
            />

            {room.roomVideo && (
              <div className="mt-4 border border-dark-navy-border rounded-xl p-4 flex items-center justify-between bg-dark-navy">
                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Video Added
                  </p>
                  <p className="text-xs text-dark-navy-foreground truncate">
                    {room.roomVideo.name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeRoomVideo(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addRoomType}
        className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:opacity-90"
      >
        + Add Another Room Type
      </button>
    </div>
  );
};

export default PropertyRoomTypes;
