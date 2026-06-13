import { PageMeta } from "@/components/PageMeta";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(5, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  contactMethod: z.enum(["Phone", "Email", "Either"], {
    required_error: "Please select a contact method",
  }),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one area of interest"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const INTEREST_OPTIONS = [
  "Life Cover",
  "Critical Illness",
  "Income Protection",
  "Mortgage",
  "Home Insurance",
  "Not sure yet",
];

function LineInput({
  placeholder,
  type = "text",
  field,
}: {
  placeholder: string;
  type?: string;
  field: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-line"
      {...field}
    />
  );
}

function LineTextarea({
  placeholder,
  field,
}: {
  placeholder: string;
  field: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className="input-line resize-none"
      {...field}
    />
  );
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      interests: [],
      notes: "",
    },
  });

  const onSubmit = (_data: FormValues) => {
    setIsSubmitted(true);
  };

  return (
    <>
      <PageMeta
        title="Contact A&L Financial | Book an appointment"
        description="Get in touch with Anthony at A&L Financial Solutions for honest, clear advice on your mortgage and protection needs."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left — dark navy info panel */}
        <div className="bg-navy text-white px-8 py-16 sm:px-12 lg:px-16 lg:py-24 flex flex-col justify-center">
          <span className="gold-rule" />
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
            Let's talk about your cover
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-14 max-w-sm">
            There's no obligation. Anthony will listen to your situation first,
            then give you honest advice on what cover, if any, makes sense.
          </p>

          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/35 mb-2">
                Phone
              </p>
              <a
                href="tel:07715832346"
                className="text-2xl font-serif text-gold hover:text-yellow-300 transition-colors"
                data-testid="link-contact-phone"
              >
                07715 832346
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/35 mb-2">
                Email
              </p>
              <a
                href="mailto:Info@aandlfinancial.com"
                className="text-base text-white/70 hover:text-gold transition-colors"
                data-testid="link-contact-email"
              >
                Info@aandlfinancial.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/35 mb-2">
                Address
              </p>
              <p className="text-white/70 leading-relaxed">
                20 The Pines, Kingswood
                <br />
                Hull, HU7 3GT
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white px-8 py-16 sm:px-12 lg:px-16 lg:py-24 flex flex-col justify-center">
          {isSubmitted ? (
            <div className="max-w-md">
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <h2 className="text-3xl font-serif text-navy mb-4">
                Message received
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Thanks, Anthony will be in touch within one working day.
              </p>
            </div>
          ) : (
            <div className="max-w-md w-full">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-10">
                Send an enquiry
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-normal">
                          Full name
                        </FormLabel>
                        <FormControl>
                          <LineInput
                            placeholder="Jane Doe"
                            field={field as React.InputHTMLAttributes<HTMLInputElement>}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-normal">
                            Phone
                          </FormLabel>
                          <FormControl>
                            <LineInput
                              placeholder="07700 900000"
                              type="tel"
                              field={field as React.InputHTMLAttributes<HTMLInputElement>}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-normal">
                            Email
                          </FormLabel>
                          <FormControl>
                            <LineInput
                              placeholder="jane@example.com"
                              type="email"
                              field={field as React.InputHTMLAttributes<HTMLInputElement>}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-normal">
                          Preferred contact method
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-6"
                          >
                            {["Phone", "Email", "Either"].map((val) => (
                              <FormItem
                                key={val}
                                className="flex items-center gap-2 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem value={val} />
                                </FormControl>
                                <FormLabel className="font-normal text-gray-600 cursor-pointer">
                                  {val}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-normal block mb-4">
                          What can we help with?
                        </FormLabel>
                        <div className="grid grid-cols-2 gap-3">
                          {INTEREST_OPTIONS.map((item) => (
                            <FormField
                              key={item}
                              control={form.control}
                              name="interests"
                              render={({ field }) => (
                                <FormItem className="flex items-center gap-2.5 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (v) => v !== item
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-sm text-gray-600 cursor-pointer">
                                    {item}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-gray-400 font-normal">
                          Anything else to mention? (Optional)
                        </FormLabel>
                        <FormControl>
                          <LineTextarea
                            placeholder="Any specific questions or details..."
                            field={field as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="btn-al btn-al-gold w-full mt-2"
                    data-testid="button-submit-enquiry"
                  >
                    Send my enquiry
                  </button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
