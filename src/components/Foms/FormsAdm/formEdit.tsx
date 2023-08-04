import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
  

interface FormsProps {
    w?: string
    mb?: any
    controlForm: any
}

export function FormsEdit({ w, mb, controlForm }: FormsProps) {
    // const editorRef = useRef(null);
    return (
        <FormControl w={w} mb={mb} >
            <FormLabel color={"#828282"} fontSize={{ '2xl': "18px", lg: "14px", md: "14px", xxs: "14px" }}>{}</FormLabel>
            <Controller
                name="body"
                control={controlForm}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Editor
                    apiKey="71n4i9ixu5qg3f32apgl53g56of4dlfi91id2ysdm1mnuksb"
                    id="body"
                    value={field.value}
                    init={{
                      height: 500,
                      menubar: false,
                      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap ',
                      heading: {
                        options: [
                          { value: 'h2', text: 'Título 2', command: 'formatBlock', args: ['h2'] },
                          { value: 'h3', text: 'Título 3', command: 'formatBlock', args: ['h3'] },
                          { value: 'h4', text: 'Título 4', command: 'formatBlock', args: ['h4'] },
                          { value: 'h5', text: 'Título 5', command: 'formatBlock', args: ['h5'] },
                          { value: 'h6', text: 'Título 6', command: 'formatBlock', args: ['h6'] },
                        ]
                      }
                    }}
                    onEditorChange={(content, editor) => {
                      field.onChange(content);
                    }}
                  />
                )}
              />
        </FormControl>
    )
}
