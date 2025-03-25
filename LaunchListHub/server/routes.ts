import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertMealPlanSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express) {
  // Get all restaurants
  app.get("/api/restaurants", async (_req, res) => {
    try {
      const restaurants = await storage.getAllRestaurants();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: "Kunne ikke hente restauranter" });
    }
  });

  // Get single restaurant
  app.get("/api/restaurants/:id", async (req, res) => {
    try {
      const id = z.number().parse(parseInt(req.params.id));
      const restaurant = await storage.getRestaurant(id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant ikke fundet" });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Kunne ikke hente restaurant" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      await storage.createContact(contact);
      res.status(201).json({ message: "Kontakt oprettet" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Ugyldige data", errors: error.errors });
      }
      res.status(500).json({ message: "Kunne ikke oprette kontakt" });
    }
  });

  // Submit meal plan request
  app.post("/api/meal-plans", async (req, res) => {
    try {
      const mealPlan = insertMealPlanSchema.parse(req.body);
      await storage.createMealPlan(mealPlan);
      res.status(201).json({ message: "Madordning oprettet" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Ugyldige data", errors: error.errors });
      }
      res.status(500).json({ message: "Kunne ikke oprette madordning" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
