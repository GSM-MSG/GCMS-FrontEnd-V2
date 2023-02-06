import ClubCreationModal from '@/components/ClubCreationModal'

export default function Home() {
  // return <>hello world</>
  return (
    <ClubCreationModal
      onClose={() => {
        return
      }}
    />
  )
}
