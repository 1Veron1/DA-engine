import { users, type User, type InsertUser } from "@shared/schema";
import { Restaurant, Contact, MealPlan, type InsertContact, type InsertMealPlan } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllRestaurants(): Promise<Restaurant[]>;
  getRestaurant(id: number): Promise<Restaurant | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  createMealPlan(mealPlan: InsertMealPlan): Promise<MealPlan>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private restaurants: Map<number, Restaurant>;
  private contacts: Map<number, Contact>;
  private mealPlans: Map<number, MealPlan>;
  private currentId: number;
  private contactId: number;
  private mealPlanId: number;

  constructor() {
    this.users = new Map();
    this.restaurants = new Map();
    this.contacts = new Map();
    this.mealPlans = new Map();
    this.currentId = 1;
    this.contactId = 1;
    this.mealPlanId = 1;

    // Add initial test data
    this.initializeTestData();
  }

  private initializeTestData() {
    const testRestaurants: Restaurant[] = [
      {
        id: 1,
        name: "DA Taste",
        description: "Byens bedste burgere lavet med kærlighed og de bedste råvarer",
        address: "Burger Allé 123, 8000 Aarhus C",
        phone: "+45 86 12 34 56",
        email: "info@dataste.dk",
        menu: [
          {
            category: "Burgere",
            items: [
              { name: "Classic Burger", price: 89, description: "200g oksekød, salat, tomat, agurk, løg" },
              { name: "Cheese Burger", price: 99, description: "200g oksekød, cheddar, salat, tomat" }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Pizza Torino",
        description: "Autentisk italiensk pizza i hjertet af Aarhus",
        address: "Italiensk Plads 45, 8000 Aarhus C",
        phone: "81 81 81 81",
        email: "info@pizzatorino.dk",
        menu: [
          {
            category: "Pizzaer",
            items: [
              { name: "Margherita", price: 85, description: "Tomat, mozzarella, basilikum" },
              { name: "Pepperoni", price: 95, description: "Tomat, mozzarella, pepperoni" }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Goldencatering",
        description: "Professionel catering til alle anledninger",
        address: "Catering Boulevard 78, 8000 Aarhus C",
        phone: "+45 82 83 84 85",
        email: "info@goldencatering.dk",
        menu: [
          {
            category: "Buffet",
            items: [
              { name: "Klassisk Buffet", price: 299, description: "Varieret udvalg af kolde og varme retter" },
              { name: "Luksus Buffet", price: 399, description: "Eksklusiv menu med seafood og specialiteter" }
            ]
          }
        ]
      }
    ];

    testRestaurants.forEach(restaurant => {
      this.restaurants.set(restaurant.id, restaurant);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    return Array.from(this.restaurants.values());
  }

  async getRestaurant(id: number): Promise<Restaurant | undefined> {
    return this.restaurants.get(id);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const newContact: Contact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async createMealPlan(mealPlan: InsertMealPlan): Promise<MealPlan> {
    const id = this.mealPlanId++;
    const newMealPlan: MealPlan = { ...mealPlan, id };
    this.mealPlans.set(id, newMealPlan);
    return newMealPlan;
  }
}

export const storage = new MemStorage();