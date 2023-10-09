import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface Props {}
export default function RecentSale({}: Props) {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://avatars.githubusercontent.com/u/12014668?v=4' />
        </Avatar>
        <div className='ml-2 text-sm'>
          <p className='font-medium'>Olivia Martin</p>
          <p className='text-muted-foreground'>olivia.martin@email.com</p>
        </div>
        <div className='ml-auto'>+$1,999.00</div>
      </div>

      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://avatars.githubusercontent.com/u/12014668?v=4' />
        </Avatar>

        <div className='ml-2 text-sm'>
          <p className='font-medium'>Olivia Martin</p>
          <p className='text-muted-foreground'>olivia.martin@email.com</p>
        </div>

        <div className='ml-auto'>+$1,999.00</div>
      </div>
    </div>
  )
}
