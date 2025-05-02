import { ChildProps } from "@/types";
import { Loader } from "lucide-react";
import { Suspense as ReactSuspense } from "react";

export const Suspense = ({ children }: ChildProps) => (
  <ReactSuspense fallback={<Loader />}>{children}</ReactSuspense>
);
