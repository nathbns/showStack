"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  initialImage?: string | null;
  isRegister?: boolean;
}

export function ImageUpload({
  onImageUpload,
  initialImage,
  isRegister = false,
}: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(initialImage || null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifier que c'est bien une image
    if (!file.type.startsWith("image/")) {
      toast.error("Le fichier doit être une image");
      return;
    }

    // Vérifier la taille du fichier (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("L'image ne doit pas dépasser 2MB");
      return;
    }

    // Créer une URL temporaire pour l'aperçu
    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);

    // Envoyer l'image au serveur
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Utiliser l'endpoint approprié selon le contexte
      const uploadUrl = isRegister
        ? "/api/auth/upload"
        : "/api/user/profile/image";

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erreur lors de l'upload de l'image");
      }

      const data = await response.json();
      setImage(data.imageUrl);
      onImageUpload(data.imageUrl);
      toast.success("Image téléchargée avec succès");
    } catch (error) {
      console.error("Erreur:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Erreur lors du téléchargement de l'image"
      );
      // Réinitialiser l'image si l'upload a échoué
      setImage(initialImage || null);
    } finally {
      setLoading(false);
      // Libérer la mémoire de l'URL temporaire
      URL.revokeObjectURL(previewUrl);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 cursor-pointer"
        onClick={handleClick}
      >
        {image ? (
          <Image
            src={image}
            alt="Avatar"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        )}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleClick}
        disabled={loading}
      >
        {image ? "Changer l'image" : "Ajouter une photo"}
      </Button>
    </div>
  );
}
