import { PageMeta } from "@/components/PageMeta";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(5, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  contactMethod: z.enum(["Phone", "Email", "Either"], {
    required_error: "Please select a contact method",
  }),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const INTEREST_OPTIONS = [
  "Life Cover",
  "Critical Illness",
  "Income Protection",
  "Mortgage",
  "Home Insurance",
  "Not sure yet"
];

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

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <>
      <PageMeta 
        title="Contact A&L Financial | Book an appointment" 
        description="Get in touch with Anthony at A&L Financial Solutions for honest, clear advice on your mortgage and protection needs." 
      />
      
      <div className="py-24 bg-surface min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">
                Let's talk about your cover
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                There's no obligation. Anthony will listen to your situation first, then give you honest advice on what cover, if any, makes sense.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy mb-1">Phone</h3>
                  <a href="tel:07715832346" className="text-gray-600 hover:text-gold transition-colors text-lg">07715832346</a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Email</h3>
                  <a href="mailto:Info@aandlfinancial.com" className="text-gray-600 hover:text-gold transition-colors text-lg">Info@aandlfinancial.com</a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Address</h3>
                  <p className="text-gray-600 text-lg">20 The Pines, Kingswood<br/>Hull, HU7 3GT</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-sm shadow-md">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif text-navy mb-4">Message sent</h2>
                  <p className="text-gray-600">Thanks, Anthony will be in touch within one working day.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} className="rounded-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                              <Input placeholder="07700 900000" type="tel" {...field} className="rounded-sm" />
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
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                              <Input placeholder="jane@example.com" type="email" {...field} className="rounded-sm" />
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
                        <FormItem className="space-y-3">
                          <FormLabel>How would you like to be contacted?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Phone" />
                                </FormControl>
                                <FormLabel className="font-normal">Phone</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Email" />
                                </FormControl>
                                <FormLabel className="font-normal">Email</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Either" />
                                </FormControl>
                                <FormLabel className="font-normal">Either</FormLabel>
                              </FormItem>
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
                          <div className="mb-4">
                            <FormLabel>What are you looking for help with?</FormLabel>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {INTEREST_OPTIONS.map((item) => (
                              <FormField
                                key={item}
                                control={form.control}
                                name="interests"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
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
                          <FormLabel>Anything else you'd like to mention? (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific questions or details..." 
                              className="resize-none h-24 rounded-sm" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit" 
                      className="w-full bg-gold text-navy font-semibold px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors mt-4"
                    >
                      Send my enquiry
                    </button>
                  </form>
                </Form>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
