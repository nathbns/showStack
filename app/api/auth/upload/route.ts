import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import { existsSync } from "fs";

export async function POST(request: Request) {
  try {
    // Traiter le formulaire
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier n'a été envoyé" },
        { status: 400 }
      );
    }

    // Valider le type de fichier
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Le fichier doit être une image" },
        { status: 400 }
      );
    }

    // Générer un nom de fichier unique
    const fileExtension = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExtension}`;

    // Créer le chemin de sauvegarde
    const publicDir = join(process.cwd(), "public");
    const uploadsDir = join(publicDir, "uploads");
    const avatarsDir = join(uploadsDir, "avatars");

    // S'assurer que les dossiers existent
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }
    if (!existsSync(avatarsDir)) {
      await mkdir(avatarsDir, { recursive: true });
    }

    // Convertir le fichier en buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Écrire le fichier
    const filePath = join(avatarsDir, fileName);
    await writeFile(filePath, buffer);

    // URL relative pour stocker en base de données
    const imageUrl = `/uploads/avatars/${fileName}`;

    return NextResponse.json({
      message: "Image téléchargée avec succès",
      imageUrl,
    });
  } catch (error) {
    console.error("Erreur lors de l'upload de l'image:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
