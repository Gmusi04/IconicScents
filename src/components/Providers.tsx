"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart";
import { CartButton } from "./CartButton";
import { CartDrawer } from "./CartDrawer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    // reducedMotion="user" hace que toda animación de Motion (drawer, modal,
    // menú móvil, stagger del catálogo) respete prefers-reduced-motion sin
    // tener que gatearla componente por componente.
    <MotionConfig reducedMotion="user">
      <CartProvider>
        {children}
        <CartButton />
        <CartDrawer />
      </CartProvider>
    </MotionConfig>
  );
}
