"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Dropzone from "react-dropzone";
import { Button } from "@/components/ui/button";
import { getCroppedImg } from "@/utils/cropImage"; // your helper function

interface VehicleImageUploaderProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const VehicleImageUploader: React.FC<VehicleImageUploaderProps> = ({
  images,
  setImages,
}) => {
  const [cropImage, setCropImage] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const base64ToFile = (base64: string, filename: string) => {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  };

  const handleSave = useCallback(async () => {
    if (!cropImage || !croppedAreaPixels) return;
    const croppedBase64 = await getCroppedImg(cropImage, croppedAreaPixels);
    const file = base64ToFile(croppedBase64, `vehicle_${Date.now()}.png`);
    setImages((prev) => [...prev, file].slice(0, 6));
    setCropImage(null);
  }, [cropImage, croppedAreaPixels, setImages]);

  const onCancel = () => {
    setCropImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Upload Vehicle Photos (max 6)
      </h6>

      {/* Dropzone */}
      {images.length < 6 && (
        <Dropzone
          accept={{ "image/*": [] }}
          multiple={false}
          onDrop={(acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setCropImage(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="cursor-pointer border-2 border-dashed border-gray-400 p-6 text-center rounded-lg mb-4"
            >
              <input {...getInputProps()} />
              <p>Drag & drop, or click to upload</p>
              <p className="text-sm text-gray-500">(Max 6 photos)</p>
            </div>
          )}
        </Dropzone>
      )}

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((imgFile, i) => {
          const objectUrl = URL.createObjectURL(imgFile);

          return (
            <div key={i} className="relative group">
              <img
                src={objectUrl}
                alt={`Vehicle ${i}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              {/* Delete Button */}
              <button
                type="button"
                onClick={() => {
                  URL.revokeObjectURL(objectUrl); // revoke the URL, not the File
                  setImages((prev) => prev.filter((_, index) => index !== i));
                }}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                ×
              </button>
            </div>
          );
        })}
      </div>

      {/* Cropper Modal */}
      {cropImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-[400px] h-[480px] relative flex flex-col">
            <div className="relative flex-1">
              <Cropper
                image={cropImage}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Crop & Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleImageUploader;
