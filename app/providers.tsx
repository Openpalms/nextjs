'use client';

import { NextUIProvider } from '@nextui-org/react';
import {ConvexClientProvider} from "@/components/providers/convex-provider";
import {ReactNode} from "react";
export function Providers({ children }: { children: ReactNode }) {
  return(
    <ConvexClientProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ConvexClientProvider>
  )
}
