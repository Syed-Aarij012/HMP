"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ACCEPTED_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/svg+xml",
]);

type ProfileImageUploadProps = {
  inputId: string;
  browseButtonId: string;
  pathInputId: string;
  thumbnailId: string;
  name: string;
  uploadLabel: string;
  defaultImageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

function ProfileImageUpload({
  inputId,
  browseButtonId,
  pathInputId,
  thumbnailId,
  name,
  uploadLabel,
  defaultImageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
}: ProfileImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewSrc, setPreviewSrc] = useState(defaultImageSrc);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (previewSrc.startsWith("blob:")) {
        URL.revokeObjectURL(previewSrc);
      }
    };
  }, [previewSrc]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!ACCEPTED_TYPES.has(file.type)) {
      setError("Please choose a PNG, JPG, or SVG file.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File size must be 4 MB or less.");
      event.target.value = "";
      return;
    }

    setError("");
    setFileName(file.name);
    setSelectedFile(file);

    setPreviewSrc((current) => {
      if (current.startsWith("blob:")) {
        URL.revokeObjectURL(current);
      }
      return URL.createObjectURL(file);
    });
  };

  return (
    <div className="tfcl_choose_avatar">
      <div className="avatar">
        <div className="form-group">
          <Image
            loading="lazy"
            decoding="async"
            width={imageWidth}
            height={imageHeight}
            id={thumbnailId}
            src={previewSrc}
            alt={imageAlt}
            unoptimized={Boolean(selectedFile)}
          />
        </div>
        <div className="choose-box">
          <label>{uploadLabel}</label>
          <div className="form-group">
            <input
              ref={inputRef}
              type="file"
              hidden
              className="form-control"
              id={inputId}
              name={name}
              accept="image/png,image/jpeg,image/jpg,image/svg+xml"
              onChange={handleFileChange}
            />
            <label htmlFor={inputId} id={browseButtonId}>
              Choose file
            </label>
            <input
              type="text"
              id={pathInputId}
              placeholder="No file Choose"
              value={fileName}
              readOnly
            />
          </div>
          <span className="notify-avatar">
            PNG, JPG, SVG dimension (400 * 400) max file not more then size 4 mb
          </span>
          {error ? (
            <span className="notify-avatar d-block mt-1" style={{ color: "#f26740" }}>
              {error}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfileImageUpload;
