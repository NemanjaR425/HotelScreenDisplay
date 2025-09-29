import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Restaurant schema
export const restaurants = pgTable("restaurants", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  cuisine: text("cuisine").notNull(),
  hours: text("hours").notNull(),
  location: text("location").notNull(),
});

export const insertRestaurantSchema = createInsertSchema(restaurants).pick({
  name: true,
  description: true,
  cuisine: true,
  hours: true,
  location: true,
});

export type InsertRestaurant = z.infer<typeof insertRestaurantSchema>;
export type Restaurant = typeof restaurants.$inferSelect;

// Menu item schema
export const menuItems = pgTable("menu_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  restaurantId: varchar("restaurant_id").notNull(),
  category: text("category").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

export const insertMenuItemSchema = createInsertSchema(menuItems).pick({
  restaurantId: true,
  category: true,
  name: true,
  description: true,
  price: true,
});

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;
