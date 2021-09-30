import React from "react";

function InputField(props : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): JSX.Element {
    return(
        <input className="p-4 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-40 text-white w-full my-4 bg-primary-light bg-opacity-5 rounded-md" {...props}></input>
    );
}

function InputArea(props : React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>): JSX.Element {
    return(
        <textarea className="p-4 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-40 text-white w-full my-4 bg-primary-light bg-opacity-5 resize-none rounded-md" {...props} ></textarea>
    );
}
export { InputField, InputArea }