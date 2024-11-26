import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitDataForAnalysis } from "@/services/submit-data-for-analysis";

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  age: z.coerce
    .number({
      required_error: "A idade é obrigatória.",
      invalid_type_error: "A idade é obrigatória.",
    })
    .min(1, {
      message: "Idade é obrigatória.",
    })
    .max(100, {
      message: "Você deve ter no máximo 100 anos.",
    }),
  gender: z
    .enum(["man", "woman"], {
      message: "Por favor, selecione um gênero válido.",
    })
    .transform((value) => (value === "man" ? 1 : 2)),
  socialClass: z
    .enum(["a/b", "c", "d/e"], {
      message: "Por favor, selecione uma classe social válida.",
    })
    .transform((value) => (value === "a/b" ? 1 : value === "c" ? 2 : 3)),
  bettingFrequency: z.coerce
    .number({
      required_error: "A renda mensal é obrigatória.",
      invalid_type_error: "A renda mensal é obrigatória.",
    })
    .min(1, {
      message: "Por favor, selecione quantos dias por semana você aposta.",
    })
    .max(7, {
      message: "O máximo é 7 dias por semana.",
    }),
  monthlyIncome: z.coerce
    .number({
      required_error: "A renda mensal é obrigatória.",
      invalid_type_error: "A renda mensal é obrigatória.",
    })
    .min(0, {
      message: "A renda mensal deve ser maior que zero.",
    }),
});

export function BetFormDialog() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const responseData = await submitDataForAnalysis(data);

      const history = localStorage.getItem("previous-results");
      const historyArray = history ? JSON.parse(history) : [];
      historyArray.push({ id: responseData.id, loss: responseData.loss });
      localStorage.setItem("previous-results", JSON.stringify(historyArray));

      navigate(`/result/${responseData.id}`);
      form.reset();
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  });

  return (
    <Dialog onOpenChange={() => form.reset()}>
      <DialogTrigger asChild>
        <button className="flex text-sm gap-2 items-center justify-start bg-white border border-zinc-100 rounded-lg px-4 py-2 text-gray-400">
          Insira seu nome para começar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil do apostador</DialogTitle>
          <DialogDescription>
            Preencha os dados do seu perfil para descobrir o seu perfil de
            apostador.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite sua idade"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gênero</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value?.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu gênero" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="man">Masculino</SelectItem>
                          <SelectItem value="woman">Feminino</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialClass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Classe Social</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value?.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione sua classe social" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a/b">A/B</SelectItem>
                          <SelectItem value="c">C</SelectItem>
                          <SelectItem value="d/e">D/E</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="bettingFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequência de Apostas</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={
                          field.value === 0 ? "" : field.value?.toString()
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione quantos dias por semana" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 dia por semana</SelectItem>
                          <SelectItem value="2">2 dias por semana</SelectItem>
                          <SelectItem value="3">3 dias por semana</SelectItem>
                          <SelectItem value="4">4 dias por semana</SelectItem>
                          <SelectItem value="5">5 dias por semana</SelectItem>
                          <SelectItem value="6">6 dias por semana</SelectItem>
                          <SelectItem value="7">7 dias por semana</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Informe quantos dias por semana você costuma fazer
                      apostas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthlyIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Renda Mensal</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input className="peer pe-12 ps-8" {...field} />
                        <span className="pointer-events-none absolute inset-y-0 top-px start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                          R$
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 top-px end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                          BRL
                        </span>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Informe sua renda mensal em reais
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
                Enviar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
