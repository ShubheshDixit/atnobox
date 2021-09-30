function PrimaryButton(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): JSX.Element {
    return (
        <button className={`flex justify-center items-center bg-primary-light rounded-md text-md flex-row px-4 my-2 h-12 w-auto min-w-max text-black mr-4 font-bold hover:bg-opacity-75 ${props.className}`} {...props}>
            { props.children }
        </button>
    );
}

function SecondaryButton(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): JSX.Element {
    return(
        <button className={`flex justify-center items-center border-2 border-primary-light rounded-md text-md flex-row px-4 my-2 h-12 w-auto min-w-max text-primary-light focus-within:bg-primary-light focus-within:bg-opacity-25 font-bold hover:opacity-50 ${props.className}` } {...props}>
            { props.children }
        </button>
    );
}

export { PrimaryButton, SecondaryButton }

