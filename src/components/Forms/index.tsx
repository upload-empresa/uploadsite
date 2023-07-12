import { FormControl, FormLabel, Input } from "@chakra-ui/react"

interface FormsProps {
    label: string
    type: string
    placeholder: string
    w?: string
    mb?: any
    errors?: any
}

export function Forms({ label, placeholder, type, w, mb, errors }: FormsProps) {
    return (
        <FormControl w={w} mb={mb} >
            <FormLabel color={"#828282"} fontSize={{'2xl':"18px", lg:"14px", md:"14px", xxs:"14px"}}>{label}</FormLabel>
            <Input required={true} type={type} placeholder={placeholder} _placeholder={{color: "#A1A1A1", fontSize: "14px"}} />
        </FormControl>
    )
}
