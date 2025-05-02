"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullname: z
    .string()
    .min(3, {
      message: "Kamida 3 ta belgi yozing!",
    })
    .max(50, {
      message: "50 tadan ko'p belgi yoza olmaysiz!",
    }),
  text: z
    .string()
    .min(3, {
      message: "Kamida 3 ta belgi yozing!",
    })
    .max(50, {
      message: "50 tadan ko'p belgi yoza olmaysiz!",
    }),
  attend: z.enum(["true", "false"]),
});

export const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      text: "",
      attend: "true",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const token = "7555812076:AAEGEk0z1qvLIo5br-nbMT_gWmOSrhOxHvA";
    const chatID = "-1002653834537";
    const isAttend = values.attend === "true" ? "Ha" : "Yoq";

    const message = `<b>📬 Yangi xabar:</b>%0A<b>👤 Ismi: </b><i>${values.fullname}</i>%0A<b>📞 Xabar: </b><i>${values.text}</i>%0A<b>📧 Qatnashadi: </b><i>${isAttend}</i>`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;

    const apibot = new XMLHttpRequest();
    apibot.open("GET", url, true);
    apibot.send();
    toast({
      title: "Xabaringiz yuborildi!",
    });

    form.reset();
  }

  return (
    <div className="w-full h-screen bg-[url('/bg-ceremony.jpg')] bg-center bg-cover">
      <div className="bg-black/50 w-full h-full">
        <div className="w-full h-full container mx-auto p-3 py-10 flex items-center justify-between">
          <Card className="md:w-1/3 w-full">
            <CardHeader>
              <CardTitle>Xabar qoldiring</CardTitle>
              <CardDescription>Har bir yozgan xabaringizni o&apos;qib chiqaman.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ismingiz</FormLabel>
                        <FormControl>
                          <Input placeholder="Ismingiz" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Xabar qoldiring</FormLabel>
                        <FormControl>
                          <Textarea placeholder="..." {...field} className="max-h-4" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attend"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Qatnashasizmi?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value}
                            onValueChange={value => field.onChange(value)}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={"true"} />
                              </FormControl>
                              <FormLabel className="font-normal">Ha</FormLabel>
                            </FormItem>

                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="false" />
                              </FormControl>
                              <FormLabel className="font-normal">Yoq</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant={"default"} className="w-full">
                    Yuborish
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
