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


const SearchForm = () => {

  const form = useForm();

  return (
    <div className="mt-10 bg-white p-6 filter drop-shadow-lg rounded-xl">
        <div className="flex block ">
            <Button className=" housal-tab px-4 text-sm rounded-t-lg rounded-b-none">
                Buy
            </Button> 
            <Button className=" housal-tab px-4 text-sm rounded-t-lg rounded-b-none">
                Rent
            </Button>   
        </div>
        <Separator className="my-1" />
        <div className="flex w-full items-start gap-1 rounded-lg">
        
        <Form {...form}>

        <div className=" w-full">
            <FormField
                control={form.control}
                name="Address"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Search by Address" className="w-full py-2 px-4 text-xl border-0 !outline-none focus:border-blue" />
                    </FormControl>
                    </FormItem>
                )}
                >
            </FormField>
        </div>

        <div className=" w-20">
            <Button className=" housal-button py-1 px-2 text-sm text-lg">
             Search
            </Button>            
        </div>

        </Form>
        </div>
    </div>

  )
}

export default SearchForm