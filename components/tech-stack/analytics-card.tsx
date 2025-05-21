import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { type Tech } from "./tech-stack-grid";
import { ChartBarIcon, Globe, BarChart2, LineChart } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface AnalyticsCardProps {
  onAddTech: (tech: Tech) => void;
}

export function AnalyticsCard({ onAddTech }: AnalyticsCardProps) {
  const [analyticsType, setAnalyticsType] = useState<"plausible" | "ga" | "fathom" | "custom">("plausible");
  const [analyticsUrl, setAnalyticsUrl] = useState("");
  const [analyticsId, setAnalyticsId] = useState("");
  const [analyticsName, setAnalyticsName] = useState("Analytics");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let name = analyticsName;
    let color = "#10b981"; // Default color (teal)
    let description = "";
    let icon = <BarChart2 size={24} />;

    // Set specific properties based on type
    switch (analyticsType) {
      case "plausible":
        name = analyticsName || "Plausible Analytics";
        color = "#5850ec"; // Plausible purple
        description = `Plausible Analytics pour ${analyticsUrl}`;
        icon = <BarChart2 size={24} className="text-[#5850ec]" />;
        break;
      case "ga":
        name = analyticsName || "Google Analytics";
        color = "#ea4335"; // Google red
        description = `Google Analytics pour ${analyticsUrl}`;
        icon = <LineChart size={24} className="text-[#ea4335]" />;
        break;
      case "fathom":
        name = analyticsName || "Fathom Analytics";
        color = "#9063cd"; // Fathom purple
        description = `Fathom Analytics pour ${analyticsUrl}`;
        icon = <ChartBarIcon size={24} className="text-[#9063cd]" />;
        break;
      case "custom":
        name = analyticsName || "Analytics";
        color = "#10b981"; // Teal
        description = `Statistiques pour ${analyticsUrl}`;
        icon = <BarChart2 size={24} className="text-[#10b981]" />;
        break;
    }

    // Create analytics tech to add to the stack
    const analyticsTech: Tech = {
      id: `analytics-${uuidv4()}`,
      name,
      color,
      description,
      icon,
      isProject: true,
      url: analyticsUrl,
      gridSpan: {
        cols: 1,
        rows: 1,
      },
    };

    onAddTech(analyticsTech);
    
    // Reset form
    setAnalyticsType("plausible");
    setAnalyticsUrl("");
    setAnalyticsId("");
    setAnalyticsName("");
    setIsSubmitting(false);
  };

  return (
    <div className="p-2">
      <h3 className="text-lg font-medium mb-4">
        Ajouter un service d'analytics
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label className="text-[var(--muted-foreground)]">Type d'analytics</Label>
          <RadioGroup 
            value={analyticsType} 
            onValueChange={(value) => setAnalyticsType(value as any)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="plausible" id="plausible" />
              <Label htmlFor="plausible" className="cursor-pointer">Plausible Analytics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ga" id="ga" />
              <Label htmlFor="ga" className="cursor-pointer">Google Analytics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fathom" id="fathom" />
              <Label htmlFor="fathom" className="cursor-pointer">Fathom Analytics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom" className="cursor-pointer">Autre service</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="analyticsUrl" className="text-[var(--muted-foreground)] mb-2">
            URL du site
          </Label>
          <div className="flex">
            <span className="inline-flex items-center justify-center px-3 bg-[var(--muted)] border border-r-0 border-[var(--border)] rounded-l-md w-10">
              <Globe size={16} className="text-[var(--muted-foreground)]" />
            </span>
            <Input
              id="analyticsUrl"
              type="url"
              value={analyticsUrl}
              onChange={(e) => setAnalyticsUrl(e.target.value)}
              placeholder="https://monsite.com"
              className="bg-background border-[var(--border)] text-[var(--foreground)] rounded-l-none"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="analyticsName" className="text-[var(--muted-foreground)] mb-2">
            Nom (optionnel)
          </Label>
          <Input
            id="analyticsName"
            type="text"
            value={analyticsName}
            onChange={(e) => setAnalyticsName(e.target.value)}
            placeholder="Mon Analytics"
            className="bg-background border-[var(--border)] text-[var(--foreground)]"
          />
        </div>

        <div>
          <Label htmlFor="analyticsId" className="text-[var(--muted-foreground)] mb-2">
            ID du site/Tracking ID (optionnel)
          </Label>
          <Input
            id="analyticsId"
            type="text"
            value={analyticsId}
            onChange={(e) => setAnalyticsId(e.target.value)}
            placeholder={analyticsType === "ga" ? "G-XXXXXXXXXX" : "site-id"}
            className="bg-background border-[var(--border)] text-[var(--foreground)]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Ajout en cours..." : "Ajouter service d'analytics"}
        </Button>
      </form>
    </div>
  );
}
