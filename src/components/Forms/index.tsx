import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

interface FormsProps {
    label: string
    type: string
    placeholder: string
    w?: string
    mb?: any
    errors?: any
    controlForm: any
    nameForm: any
}

export function Forms({nameForm, label, placeholder, type, w, mb, errors, controlForm }: FormsProps) {
    return (
        <FormControl w={w} mb={mb} >
            <FormLabel color={"#828282"} fontSize={{ '2xl': "18px", lg: "14px", md: "14px", xxs: "14px" }}>{label}</FormLabel>
            <Controller
                name={nameForm}
                control={controlForm}
                defaultValue=""
                rules={{
                    required: true,
                }}
                render={({ field }) => (

                    <Input
                        required={true}
                        type={type}
                        placeholder={placeholder}
                        _placeholder={{ color: "#A1A1A1", fontSize: "14px" }}
                        {...field}
                    />
                )}
            ></Controller>
        </FormControl>
    )
}
