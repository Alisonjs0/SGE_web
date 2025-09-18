import React from 'react'

interface InputProps {
    label: string
    type?: string
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    disabled?: boolean
    className?: string
}

const Input: React.FC<InputProps> = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    className = ""
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
    </div>
  )
}

export default Input