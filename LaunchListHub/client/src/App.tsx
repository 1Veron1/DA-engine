import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Restaurant from "@/pages/Restaurant";
import Contact from "@/pages/Contact";
import MealPlan from "@/pages/MealPlan";
import DaTasteHome from "@/pages/dataste/Home";
import DaTasteMenu from "@/pages/dataste/Menu";
import PizzaTorinoHome from "@/pages/pizzatorino/Home";
import PizzaTorinoMenu from "@/pages/pizzatorino/Menu";
import GoldencateringHome from "@/pages/goldencatering/Home";
import GoldencateringMenu from "@/pages/goldencatering/Menu";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/om-os" component={About} />
      <Route path="/restaurant/:id" component={Restaurant} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/madordning" component={MealPlan} />
      <Route path="/dataste" component={DaTasteHome} />
      <Route path="/dataste/menu" component={DaTasteMenu} />
      <Route path="/pizzatorino" component={PizzaTorinoHome} />
      <Route path="/pizzatorino/menu" component={PizzaTorinoMenu} />
      <Route path="/goldencatering" component={GoldencateringHome} />
      <Route path="/goldencatering/menu" component={GoldencateringMenu} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <main>
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;