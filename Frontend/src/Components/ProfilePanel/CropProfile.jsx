import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef } from "react";
import { notification } from "../../utils/notification";

const CropProfile = ({ selectProfile, setShowCropModel, setCroppedImage }) => {
  const cropperRef = useRef(null);

  // Close modal when clicking outside
  const handleCancelCrop = (e) => {
    if (e.target.id === "cropModel") {
      setShowCropModel(false);
    }
  };

  const handleSaveCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    cropper.getCroppedCanvas().toBlob((blob) => {
      if (!blob) {
        console.error("Failed to create blob!");
        return;
      }

      //   const imageUrl = URL.createObjectURL(blob); // Convert Blob to URL
      setCroppedImage(blob); // Save URL instead of Blob
      setShowCropModel(false); // Hide Cropper
      notification("success", "Profile set successfully!");
    }, "image/jpeg");
  };

  return (
    <div
      id="cropModel"
      onClick={handleCancelCrop}
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity"
    >
      <div className="bg-slate-800 px-6 py-5 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl text-center text-white font-semibold">
          Crop Image
        </h2>

        {/* Cropper */}
        <div className="my-4 rounded-lg overflow-hidden border border-gray-700">
          <Cropper
            src={selectProfile || ""}
            ref={cropperRef}
            className="w-full"
            aspectRatio={1}
            guides={false}
            viewMode={1}
            background={false}
            autoCropArea={1}
            movable={false}
            zoomable={false}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowCropModel(false)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveCrop}
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropProfile;
