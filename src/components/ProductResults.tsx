"use client";

import { RootState } from "@/lib/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export const ProductResults = () => {
  const { results, state, error } = useSelector(
    (state: RootState) => state.search
  );

  if (state === "loading") {
    return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (state === "failed") {
    console.error("Error fetching products:", error);
    return (
      <div className="text-center">
        <p>Something went wrong...</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center">
        No hay resultados para mostrar. Realiza una búsqueda para ver productos.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
      <div className="responsive-grid">
        {results.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-effect touch-effect">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">${product.price}</p>
                <p className="text-sm text-muted-foreground">{product.store}</p>
                <Badge variant="secondary" className="mt-2">
                  {product.category}
                </Badge>
              </CardContent>
              <CardFooter>
                <Button className="w-full hover-effect touch-effect">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al carrito
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
