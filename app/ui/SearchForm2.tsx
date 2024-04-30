"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator"
import { Search } from "lucide-react";


const SearchForm2 = () => {
    const form = useForm();

    return (
        <div className="mt-10 bg-white p-6 filter drop-shadow-lg rounded-xl">
            <div className="flex space-x-2 sm:align-middle">
                <Button className="housal-tab px-4 text-sm sm:text-base rounded-t-lg rounded-b-none">
                    Buy
                </Button>
                <Button className="housal-tab px-4 text-sm sm:text-base rounded-t-lg rounded-b-none">
                    Rent
                </Button>
            </div>
            <Separator className="my-1" />
            <div className="flex flex-col sm:flex-row items-start gap-1 rounded-lg">
                <Search size={45} className="hidden md:flex"/>
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="Address"
                        render={({ field }) => (
                            <FormControl className="flex-grow">
                                <Input {...field} placeholder="Search by Address" className="w-full py-2 px-4 text-xl border-0 focus-visible:ring-transparent" />
                            </FormControl>
                        )}
                    >
                    </FormField>

                    <Button type="submit" className="housal-button py-1 px-2 text-sm sm:text-lg w-full lg:w-1/6">
                        Search
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SearchForm2;