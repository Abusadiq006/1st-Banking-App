import React from 'react'
import { FormControl, FormField, FormLabel } from './ui/form'
import { Input } from './ui/input'

import { Control } from 'react-hook-form'
import { z } from 'zod'

interface CustomInput {
    form: Control<z.infer<typeof formSchema>>,
    name: string,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder}
    : 
) => {
  return (
            <FormField 
                control={form.control}
                name={name}
                render={({ field }) => (
                    <div className='form-item'>
                        <FormLabel className='form-label'>
                                {label}
                            </FormLabel>
                            <div className='flex w-full flex-col'>
                                <FormControl>
                                    <Input 
                                        placeholder={placeholder}
                                        className='input-class'
                                        {...field}
                                    />
                                    </FormControl>
                                    <FormMessage className='form-message mt-2' />
                                </div>
                            </div>
                        )}
                    />
  )
}

export default CustomInput