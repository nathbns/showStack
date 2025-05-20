"use client";
import TechCard from "../ui/tech-card";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { GripVerticalIcon, Trash2Icon } from "lucide-react";

// Definition of the Tech type with card size
export type Tech = {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  category?: string;
  technologyId?: string;
  gridSpan?: {
    cols?: 1 | 2 | 3;
    rows?: 1 | 2;
  };
  // Add a field for position
  order?: number;
  // Fields for projects
  isProject?: boolean;
  favicon?: string;
  url?: string;
  description?: string;
  stars?: number;
  forks?: number;
  isStripeCard?: boolean; // Pour identifier la carte Stripe
  mrr?: number; // MRR en centimes
  mrrCurrency?: string; // Devise du MRR (par ex. "USD", "EUR")
};

type TechStackGridProps = {
  technologies: Tech[];
  onRemoveTech?: (id: string) => void;
  onUpdateTech?: (id: string, updates: Partial<Tech>) => void;
  onReorderTechs?: (reorderedTechs: Tech[]) => void;
  readOnly?: boolean;
};

// Extended props for SortableItem
interface SortableItemProps {
  id: string;
  tech: Tech;
  onRemoveTech?: (id: string) => void;
  onUpdateTech?: (id: string, updates: Partial<Tech>) => void;
}

// Component for an individual draggable item
function SortableItem({
  id,
  tech,
  onRemoveTech,
  onUpdateTech,
}: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transition,
    zIndex: isDragging ? 100 : undefined,
    visibility: isDragging ? "hidden" : "visible",
  };

  const handleUpdateGridSpan = (
    spanProperty: "cols" | "rows",
    value: number
  ) => {
    if (onUpdateTech) {
      const currentSpan = tech.gridSpan || { cols: 1, rows: 1 };
      onUpdateTech(tech.id, {
        gridSpan: {
          ...currentSpan,
          [spanProperty]: value,
        },
      });
    }
  };

  // This block of code dynamically determines the Tailwind CSS classes to apply to each grid item,
  // based on the size (span) of the technology on the grid (how many columns and rows it occupies).
  // This allows each "tech" to be displayed in the grid according to its `gridSpan` properties.

  const colSpanToApply = tech.gridSpan?.cols || 1; // Number of columns to occupy (default 1)
  const rowSpanToApply = tech.gridSpan?.rows || 1; // Number of rows to occupy (default 1)

  // Generate the corresponding Tailwind class for column span
  const colSpanClass =
    colSpanToApply === 3
      ? "col-span-3"
      : colSpanToApply === 2
      ? "col-span-2"
      : "col-span-1";

  // Generate the corresponding Tailwind class for row span
  const rowSpanClass = rowSpanToApply === 2 ? "row-span-2" : "row-span-1";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative p-1 rounded-lg border-2 transition-all group ${colSpanClass} ${rowSpanClass} ${
        isDragging
          ? "border-primary shadow-xl"
          : "border-transparent hover:border-muted"
      }`}
    >
      <div className="absolute top-1 right-1 z-20 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {onRemoveTech && (
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onRemoveTech(tech.id)}
            className="p-1 h-7 w-7"
          >
            <Trash2Icon size={14} />
          </Button>
        )}
      </div>

      <div
        {...attributes}
        {...listeners}
        className="absolute top-1 left-1 z-20 cursor-grab p-1.5 bg-background/50 hover:bg-muted rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVerticalIcon size={16} />
      </div>

      <div className="absolute bottom-1 left-1 right-1 z-20 flex flex-col gap-0.5 items-center opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-background/70 rounded">
        <div className="flex gap-1 justify-center">
          <Button
            size="sm"
            variant={tech.gridSpan?.cols === 1 ? "secondary" : "outline"}
            onClick={() => handleUpdateGridSpan("cols", 1)}
            className="px-1.5 py-0.5 text-xs h-auto min-w-[24px]"
          >
            C1
          </Button>
          <Button
            size="sm"
            variant={tech.gridSpan?.cols === 2 ? "secondary" : "outline"}
            onClick={() => handleUpdateGridSpan("cols", 2)}
            className="px-1.5 py-0.5 text-xs h-auto min-w-[24px]"
          >
            C2
          </Button>
          <Button
            size="sm"
            variant={tech.gridSpan?.cols === 3 ? "secondary" : "outline"}
            onClick={() => handleUpdateGridSpan("cols", 3)}
            className="px-1.5 py-0.5 text-xs h-auto min-w-[24px]"
          >
            C3
          </Button>
        </div>
        <div className="flex gap-1 justify-center mt-0.5">
          <Button
            size="sm"
            variant={tech.gridSpan?.rows === 1 ? "secondary" : "outline"}
            onClick={() => handleUpdateGridSpan("rows", 1)}
            className="px-1.5 py-0.5 text-xs h-auto min-w-[24px]"
          >
            R1
          </Button>
          <Button
            size="sm"
            variant={tech.gridSpan?.rows === 2 ? "secondary" : "outline"}
            onClick={() => handleUpdateGridSpan("rows", 2)}
            className="px-1.5 py-0.5 text-xs h-auto min-w-[24px]"
          >
            R2
          </Button>
        </div>
      </div>

      <TechCard
        id={tech.id}
        name={tech.name}
        color={tech.color}
        icon={tech.icon}
        gridSpan={tech.gridSpan}
      />
    </div>
  );
}

// Simple component for display in DragOverlay
function DragOverlayItem({ tech }: { tech: Tech }) {
  const colSpanToApply = tech.gridSpan?.cols || 1;
  const rowSpanToApply = tech.gridSpan?.rows || 1;
  const colSpanClass =
    colSpanToApply === 3
      ? "col-span-3"
      : colSpanToApply === 2
      ? "col-span-2"
      : "col-span-1";
  const rowSpanClass = rowSpanToApply === 2 ? "row-span-2" : "row-span-1";

  // Style for the overlay to make it look "floating"
  const overlayStyle: React.CSSProperties = {
    zIndex: 1000,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
    position: "absolute",
  };

  return (
    <div
      style={overlayStyle}
      className={`${colSpanClass} ${rowSpanClass} bg-card p-1 rounded-lg border-2 border-primary opacity-100`}
    >
      <TechCard
        id={tech.id}
        name={tech.name}
        color={tech.color}
        icon={tech.icon}
        gridSpan={tech.gridSpan}
      />
    </div>
  );
}

export default function TechStackGrid({
  technologies,
  onRemoveTech,
  onUpdateTech,
  onReorderTechs,
  readOnly = false,
}: TechStackGridProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [items, setItems] = useState<Tech[]>([]);
  const [activeDragItem, setActiveDragItem] = useState<Tech | null>(null);

  useEffect(() => {
    const orderedTechnologies = [...technologies]
      .map((tech, index) => ({
        ...tech,
        order: tech.order !== undefined ? tech.order : index,
      }))
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    setItems(orderedTechnologies);
  }, [technologies]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const draggedItem = items.find(
      (item) => String(item.id) === String(active.id)
    );
    if (draggedItem) {
      setActiveDragItem(draggedItem);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDragItem(null);
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeId = String(active.id);
      const overId = String(over.id);

      const oldIndexInCurrentItems = items.findIndex(
        (item) => String(item.id) === activeId
      );
      const newIndexInCurrentItems = items.findIndex(
        (item) => String(item.id) === overId
      );

      if (oldIndexInCurrentItems === -1 || newIndexInCurrentItems === -1) {
        console.error(
          "Active or hovered item not found in handleDragEnd with current items."
        );
        return;
      }

      const activeItemInitial = items[oldIndexInCurrentItems];
      const overItemInitial = items[newIndexInCurrentItems];
      const activeInitialSpan = activeItemInitial.gridSpan;
      const overInitialSpan = overItemInitial.gridSpan;

      let reorderedItems = arrayMove(
        items,
        oldIndexInCurrentItems,
        newIndexInCurrentItems
      );

      const finalActiveItemIndex = reorderedItems.findIndex(
        (item) => String(item.id) === activeId
      );
      const finalOverItemIndex = reorderedItems.findIndex(
        (item) => String(item.id) === overId
      );

      if (finalActiveItemIndex !== -1) {
        reorderedItems[finalActiveItemIndex] = {
          ...reorderedItems[finalActiveItemIndex],
          gridSpan: activeInitialSpan,
        };
      }
      if (finalOverItemIndex !== -1) {
        reorderedItems = reorderedItems.map((item) => {
          if (String(item.id) === activeId) {
            return { ...item, gridSpan: overInitialSpan };
          }
          if (String(item.id) === overId) {
            return { ...item, gridSpan: activeInitialSpan };
          }
          return item;
        });
      }

      const finalItemsWithOrder = reorderedItems.map((item, index) => ({
        ...item,
        order: index,
      }));

      if (onReorderTechs) {
        onReorderTechs(finalItemsWithOrder);
      }
      setItems(finalItemsWithOrder);
    }
  };

  const handleDragCancel = () => {
    setActiveDragItem(null);
  };

  if (isEditMode) {
    if (readOnly) return null;
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Reorder mode</h3>
          <Button onClick={() => setIsEditMode(false)} variant="outline">
            Done
          </Button>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext
            items={items.map((item) => item.id)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-3 gap-4">
              {items.map((tech) => (
                <SortableItem
                  key={tech.id}
                  id={String(tech.id)}
                  tech={tech}
                  onUpdateTech={onUpdateTech}
                  onRemoveTech={onRemoveTech}
                />
              ))}
            </div>
          </SortableContext>
          <DragOverlay dropAnimation={null}>
            {activeDragItem ? <DragOverlayItem tech={activeDragItem} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!readOnly && (
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setIsEditMode(true)}
            variant="outline"
            className="text-sm"
          >
            Reorder
          </Button>
        </div>
      )}
      <div className="grid grid-cols-3 gap-6">
        {items.map((tech) => {
          const colSpanToApply = tech.gridSpan?.cols || 1;
          const rowSpanToApply = tech.gridSpan?.rows || 1;
          const colSpanClass =
            colSpanToApply === 3
              ? "col-span-3"
              : colSpanToApply === 2
              ? "col-span-2"
              : "col-span-1";
          const rowSpanClass =
            rowSpanToApply === 2 ? "row-span-2" : "row-span-1";

          return (
            <div
              className={`${colSpanClass} ${rowSpanClass}`}
              key={String(tech.id)}
            >
              <div className="relative transition-all duration-300 ease-in-out h-full w-full">
                <TechCard
                  id={tech.id}
                  name={tech.name}
                  color={tech.color}
                  icon={tech.icon}
                  gridSpan={tech.gridSpan}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
