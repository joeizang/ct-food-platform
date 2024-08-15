import React from 'react'
import { useFormStatus } from "react-dom"

export interface FormButtonProps {
  containerStyles: string
  buttonStyles: string
  buttonType: "submit" | "reset" | "button" | undefined
  buttonText: string
}

export default function FormButton (props: FormButtonProps) {
  const { pending } = useFormStatus()
  return (
    <div className={props.containerStyles}>
      <button
        className={props.buttonStyles}
        type={props.buttonType}
        value={props.buttonText}
        disabled={pending}
      >
        {pending ? "Please wait..." : props.buttonText}
      </button>
    </div>
  );
}