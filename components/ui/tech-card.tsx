import { XCircle } from "lucide-react";

type TechCardProps = {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  onRemove?: (id: string) => void;
};

export default function TechCard({
  id,
  name,
  color,
  icon,
  onRemove,
}: TechCardProps) {
  return (
    <div className="relative rounded-lg border-2 border-[var(--border)] p-6 group">
      {/* Arrière-plan avec effet de flou - en utilisant style pour appliquer la couleur */}
      <div
        className="absolute inset-0 blur-sm opacity-20 rounded-lg z-0"
        style={{ backgroundColor: color }}
      />

      {onRemove && (
        <button
          onClick={() => onRemove(id)}
          className="absolute top-2 right-2 p-1 bg-red-500/50 hover:bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
          aria-label="Supprimer la technologie"
        >
          <XCircle size={18} />
        </button>
      )}

      {/* Contenu (reste net) */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10">{icon}</div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
}
