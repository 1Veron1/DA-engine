import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMealPlanSchema } from "@shared/schema";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Restaurant } from "@shared/schema";

export default function MealPlanForm() {
  const { toast } = useToast();
  const { data: restaurants } = useQuery<Restaurant[]>({
    queryKey: ["/api/restaurants"],
  });

  const form = useForm({
    resolver: zodResolver(insertMealPlanSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      type: "",
      restaurantId: 0,
      details: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/meal-plans", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Anmodning modtaget",
        description: "Vi kontakter dig snarest muligt om madordningen.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Der opstod en fejl",
        description: "Prøv venligst igen senere.",
        variant: "destructive",
      });
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Virksomhedsnavn (valgfrit)</label>
        <Input {...form.register("businessName")} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Kontaktperson</label>
        <Input {...form.register("contactName")} />
        {form.formState.errors.contactName && (
          <p className="text-sm text-red-500 mt-1">
            {form.formState.errors.contactName.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input type="email" {...form.register("email")} />
        {form.formState.errors.email && (
          <p className="text-sm text-red-500 mt-1">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Telefon</label>
        <Input type="tel" {...form.register("phone")} />
        {form.formState.errors.phone && (
          <p className="text-sm text-red-500 mt-1">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type madordning</label>
        <Select
          onValueChange={(value) => form.setValue("type", value)}
          value={form.watch("type")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Vælg type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daglig levering</SelectItem>
            <SelectItem value="weekly">Ugentlig levering</SelectItem>
            <SelectItem value="monthly">Månedlig levering</SelectItem>
          </SelectContent>
        </Select>
        {form.formState.errors.type && (
          <p className="text-sm text-red-500 mt-1">
            {form.formState.errors.type.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Vælg restaurant</label>
        <Select
          onValueChange={(value) => form.setValue("restaurantId", parseInt(value))}
          value={form.watch("restaurantId").toString()}
        >
          <SelectTrigger>
            <SelectValue placeholder="Vælg restaurant" />
          </SelectTrigger>
          <SelectContent>
            {restaurants?.map((restaurant) => (
              <SelectItem key={restaurant.id} value={restaurant.id.toString()}>
                {restaurant.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.restaurantId && (
          <p className="text-sm text-red-500 mt-1">
            {form.formState.errors.restaurantId.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Yderligere detaljer</label>
        <Textarea {...form.register("details")} rows={5} />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Sender..." : "Send anmodning"}
      </Button>
    </form>
  );
}
