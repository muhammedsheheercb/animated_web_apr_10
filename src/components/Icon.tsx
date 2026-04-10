import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { Globe, Globe2, HelpCircle, MapPin, Search } from "lucide-react";

export const Icons: Record<string, ComponentType<LucideProps>> = {
  facebook: Globe,
  instagram: Globe2,
  google: Search,
  youtube: HelpCircle,
  twitter: MapPin,
  tiktok: Globe,
  unknown: HelpCircle,
};
