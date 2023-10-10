import Sidebar from "../Sidebar"
import { Sheet, SheetContent } from "../ui/sheet"

interface Props {
  open: boolean
  onOpenChange: (flag: boolean) => void
}
export default function MobileSidebar({ open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='left' showClose={false}>
        <Sidebar onClick={() => onOpenChange(false)} />
      </SheetContent>
    </Sheet>
  )
}
