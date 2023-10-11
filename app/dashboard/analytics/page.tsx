import Analytics from "./analytics"

interface Props {}
export default function Page({}: Props) {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='col-span-2'>
        <Analytics />
      </div>
    </div>
  )
}
