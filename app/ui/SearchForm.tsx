"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator"


const SearchForm = () => {

  const form = useForm();

  return (
    <div className="grid w-full items-end gap-1 rounded-lg bg-white sm:grid-cols-2 lg:grid-cols-3 p-6 filter drop-shadow-lg mt-10">
        <Form {...form}>

              <FormField 
                control={ form.control } 
                name="Address" 
                render={({field}) => {
                return (
                    <FormItem>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Type"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="buy">Buy</SelectItem>
                                <SelectItem value="sell">Sell</SelectItem>
                                <SelectItem value="rent">Rent</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem> 
                )
            }}></FormField>

            <FormField 
                control={ form.control } 
                name="Address" 
                render={({field}) => {
                return (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Search by Address"/>
                        </FormControl>
                    </FormItem>
                )
            }}></FormField>
            <Button className="hover:bg-red-700 housal-button" type="submit" >Search</Button>
        </Form>              
    </div>
  )
}

export default SearchForm