import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const restaurants = pgTable("restaurants", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  menu: jsonb("menu").notNull()
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull()
});

export const mealPlans = pgTable("meal_plans", {
  id: serial("id").primaryKey(),
  businessName: text("business_name"),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  type: text("type").notNull(),
  restaurantId: integer("restaurant_id").notNull(),
  details: text("details")
});

export const insertRestaurantSchema = createInsertSchema(restaurants);
export const insertContactSchema = createInsertSchema(contacts);
export const insertMealPlanSchema = createInsertSchema(mealPlans);

export type Restaurant = typeof restaurants.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
export type MealPlan = typeof mealPlans.$inferSelect;
