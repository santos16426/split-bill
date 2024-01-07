import { cn } from '@/app/lib/utils'
import { ChevronDown, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
export type SelectOption = {
    label: string
    value: string | number
}
type MultipleSelectProps = {
    options: SelectOption[]
    value: SelectOption[],
    onChange?: (value: SelectOption[]) => void,
    className?: string,
    placeholder?: string,
}
const MultipleSelect = ({ value, onChange, options, className, placeholder }: MultipleSelectProps) => {
    const [show, isShow] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const clearOptions = () => {
        if (onChange) {
            onChange([])
        }
    }
    const selectOption = (option: SelectOption) => {
        if (onChange) {
            if (value && value.some(o => o.value === option.value)) {
                onChange(value.filter(o => o.value !== option.value))
            } else {
                onChange([...value, option])
            }
        }
    }
    const isOptionSelected = (option: SelectOption) => {
        return value && value.some(o => o.value === option.value)
    }

    return (
        <div
            ref={containerRef}
            onClick={() => isShow((prev) => !prev)}
            onBlur={() => isShow(false)}
            tabIndex={0}
            className={cn('relative rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background min-h-10 flex flex-row items-center gap-[.5em] outline-none',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
                className)}>
            <span className='flex flex-wrap w-full gap-1'>{value.map((v) => (
                <button
                    className='w-fit bg-slate-200 flex flex-row items-center gap-1 px-2 py-1 rounded-full text-xs'
                    key={v.value}
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(v)

                    }}>
                    <span>{v.label}</span>
                    <X size={10} />
                </button>
            )) || placeholder}</span>
            <button
                onClick={e => {
                    e.stopPropagation()
                    clearOptions()
                }}
                className={cn(
                    'bg-none  border-none outline-none cursor-pointer p-0 text-[1.25em]',
                    'text-gray-400 hover:text-gray-500 focus:text-gray-500',
                )}>
                <X size={10} />
            </button>
            <ul className={cn(
                'm-0 p-0 list-none hidden max-h-[15em] overflow-y-auto border-[1px] border-[#777] rounded-md',
                'w-full left-0 absolute bg-white shadow-2xl z-10',
                show && 'block'
            )}
                style={{
                    top: 'calc(100% + 5px )'
                }}
            >
                {options.map((option, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                        }}
                        className={
                            cn(
                                'cursor-pointer px-2 py-1',
                                'hover:bg-slate-200',
                                isOptionSelected(option) && 'bg-slate-300',
                            )
                        }
                        key={option.value}
                    >{option.label}</li>
                ))}
            </ul>
            <button className={cn(
                'bg-none  border-none outline-none cursor-pointer p-0 text-[1.25em]',
                'text-gray-400 hover:text-gray-500 focus:text-gray-500',
            )}>
                <ChevronDown size={10} />
            </button>
        </div>
    )
}
export default MultipleSelect