import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(1, "El nombre completo es obligatorio."),
  whatsappNumber: z.string().min(1, "El número de WhatsApp es obligatorio."),
  documentNumber: z.string().min(1, "El número de documento es obligatorio."),
  institutionName: z.string().min(1, "El nombre de la institución es obligatorio."),
  municipality: z.string().min(1, "El municipio es obligatorio."),
});

const ScholarshipApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsappNumber: "",
      documentNumber: "",
      institutionName: "",
      municipality: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Formulario enviado:", values);
    // Aquí iría la lógica para enviar los datos a un servicio externo
    // Por ejemplo, a una API, Google Forms, etc.
    alert("¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.");
    form.reset(); // Limpiar el formulario después del envío
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>Solicitud de Beca</CardTitle>
            <CardDescription>
              Completa el formulario para asegurar la beca para tu institución.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsappNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de WhatsApp</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Ej: +57 3XX XXX XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="documentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Documento</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu número de identificación" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institutionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la Institución</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de tu colegio/institución" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="municipality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Municipio</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu municipio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Enviar Solicitud</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default ScholarshipApplicationForm;
