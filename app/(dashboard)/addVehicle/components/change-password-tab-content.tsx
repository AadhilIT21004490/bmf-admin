"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Dropzone from "react-dropzone";
import { Button } from "@/components/ui/button";
import { getCroppedImg } from "@/utils/cropImage"; // helper function

const VehicleImageUploader = () => {
  const [images, setImages] = useState<string[]>([]); // cropped previews
  const [cropImage, setCropImage] = useState<string | null>(null); // image being cropped
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  // new states for cropper
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = useCallback(async () => {
    try {
      if (!cropImage || !croppedAreaPixels) return;
      const croppedImage = await getCroppedImg(cropImage, croppedAreaPixels);
      setImages((prev) => [...prev, croppedImage].slice(0, 6)); // max 6
      setCropImage(null);
    } catch (e) {
      console.error(e);
    }
  }, [cropImage, croppedAreaPixels]);

  const onCancel = () => {
    setCropImage(null);
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
        {images.map((img, i) => (
          <div key={i} className="relative">
            <img
              src={img}
              alt={`Vehicle ${i}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

     {cropImage && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg w-[400px] h-[480px] relative flex flex-col">
      {/* Cropper Area */}
      <div className="relative flex-1">
        <Cropper
          image={cropImage}
          crop={crop}
          zoom={zoom}
          aspect={16 / 9} // enforce ratio
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      {/* Buttons */}
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
