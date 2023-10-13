import CardSkeleton from "@/components/CardSkeleton"

interface Props {}
export default function Loading({}: Props) {
  return (
    <div className='grid gap-10'>
      <CardSkeleton />
    </div>
  )
}
