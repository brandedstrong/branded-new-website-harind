import * as React from "react"
import { cn } from "@/lib/utils"

type TabsContextValue = {
    value: string
    setValue: (val: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

export interface TabsProps {
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
    className?: string
    children: React.ReactNode
}

export function Tabs({
    defaultValue,
    value: controlledValue,
    onValueChange,
    className,
    children,
}: TabsProps) {
    const [uncontrolled, setUncontrolled] = React.useState<string>(
        controlledValue ?? defaultValue ?? ""
    )

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue! : uncontrolled

    const setValue = React.useCallback(
        (val: string) => {
            if (!isControlled) setUncontrolled(val)
            onValueChange?.(val)
        },
        [isControlled, onValueChange]
    )

    return (
        <TabsContext.Provider value={{ value, setValue }}>
            <div className={cn("w-full", className)}>{children}</div>
        </TabsContext.Provider>
    )
}

export interface TabsListProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-2 rounded-full bg-white p-2 shadow-[0_6px_24px_rgba(0,0,0,0.08)]",
                    className
                )}
                {...props}
            />
        )
    }
)
TabsList.displayName = "TabsList"

export interface TabsTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, value, children, ...props }, ref) => {
        const ctx = React.useContext(TabsContext)
        if (!ctx) throw new Error("TabsTrigger must be used within <Tabs>")

        const isActive = ctx.value === value

        return (
            <button
                type="button"
                data-state={isActive ? "active" : "inactive"}
                onClick={() => ctx.setValue(value)}
                ref={ref}
                className={cn(
                    "rounded-3xl px-6 py-3 text-base font-semibold transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                        ? "bg-primary text-primary-foreground shadow"
                        : "bg-transparent text-foreground",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        )
    }
)
TabsTrigger.displayName = "TabsTrigger"

export interface TabsContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value: string
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ className, value, children, ...props }, ref) => {
        const ctx = React.useContext(TabsContext)
        if (!ctx) throw new Error("TabsContent must be used within <Tabs>")

        const isActive = ctx.value === value

        if (!isActive) return null

        return (
            <div ref={ref} className={cn("mt-6", className)} {...props}>
                {children}
            </div>
        )
    }
)
TabsContent.displayName = "TabsContent"


