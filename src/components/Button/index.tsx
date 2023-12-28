interface ButtonProps {
    children: React.ReactNode
}

export default function Button({children}: ButtonProps) {
    return (
        <button className="text-lg font-semibold py-2 px-4 hover:bg-primary">
            {children}
        </button>
    )
}