import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const Sheet = DialogPrimitive.Root

const SheetTrigger = DialogPrimitive.Trigger

const SheetClose = DialogPrimitive.Close

const SheetPortal = DialogPrimitive.Portal

const SheetOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-darkblack-85 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

type SheetContentProps = React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Content
> & {
    side?: "left" | "right" | "top" | "bottom"
}

const SheetContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
        <SheetOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed z-50 gap-4 bg-white p-0 shadow-lg transition data-[state=open]:animate-in data-[state=closed]:animate-out flex h-full flex-col",
                // Make the sheet responsive: full width on small screens, wider on larger screens
                side === "right" && "inset-y-0 right-0 w-full sm:w-96 md:w-[520px] lg:w-[600px] xl:w-[680px] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                side === "left" && "inset-y-0 left-0 w-full sm:w-96 md:w-[370px] lg:w-[600px] xl:w-[680px] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
                side === "top" && "inset-x-0 top-0 h-1/3 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                side === "bottom" && "inset-x-0 bottom-0 h-1/3 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                className
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </SheetPortal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("px-4 py-3 border-b", className)} {...props} />
)

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("px-4 py-3 border-t", className)} {...props} />
)

const SheetTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn("text-base font-semibold", className)}
        {...props}
    />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

export {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
}


