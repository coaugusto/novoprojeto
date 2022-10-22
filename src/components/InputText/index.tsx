import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
}


export const InputText = ({ label, ...props}: Props ) => {
  return (
    <label>
        <strong>{label}</strong>
        <input type="email" {...props}/>
    </label>
  );
};
