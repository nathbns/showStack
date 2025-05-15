import { XCircle } from "lucide-react";
import type { Tech as TechType } from "../tech-stack/tech-stack-grid";

type TechCardProps = {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  gridSpan?: TechType["gridSpan"];
  onRemove?: (id: string) => void;
};

export default function TechCard({
  id,
  name,
  color,
  icon,
  gridSpan,
  onRemove,
}: TechCardProps) {
  const isExpandedCols = gridSpan?.cols && gridSpan.cols > 1;
  const isExpandedRows = gridSpan?.rows && gridSpan.rows > 1;
  const isActuallyExpanded = isExpandedCols || isExpandedRows;

  // Calcule la hauteur minimale en fonction du nombre de lignes
  // Chaque ligne fait au moins 150px (de gridAutoRows) + le gap
  const styleProps: React.CSSProperties = {};
  if (isExpandedRows && gridSpan?.rows) {
    styleProps.minHeight = `calc(${gridSpan.rows} * 150px + (${
      gridSpan.rows - 1
    } * 1.5rem))`;
  }

  return (
    <div
      className="relative rounded-lg border-2 p-6 group overflow-hidden h-full w-full flex flex-col"
      style={{ borderColor: `${color}50` }}
    >
      {/* Arrière-plan avec effet de flou */}
      <div
        className="absolute inset-0 opacity-20 z-0"
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
      <div className="relative z-10 flex flex-grow items-start h-full">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`flex items-center justify-center ${
                isActuallyExpanded ? "w-10 h-10" : "w-12 h-12"
              } transition-all`}
            >
              {icon}
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span
                className={`text-sm font-medium ${
                  isActuallyExpanded ? "md:text-base" : ""
                }`}
              >
                {name}
              </span>
            </div>
          </div>

          {/* Espace pour expansion potentielle en hauteur ou largeur */}
          {isActuallyExpanded && (
            <div className="text-xs text-gray-400 mt-2 flex-grow flex flex-col justify-center">
              <p className="leading-tight">
                Technologie : <strong>{name}</strong>
              </p>
              <p className="mt-1 leading-tight">
                {gridSpan?.cols === 3
                  ? "Occupe toute la largeur, idéal pour les éléments phares."
                  : gridSpan?.cols === 2
                  ? "S'étend sur deux colonnes pour plus d'impact."
                  : gridSpan?.rows === 2
                  ? "Plus de hauteur pour des détails supplémentaires."
                  : "Description par défaut."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
