import { UserDetailScreen } from "app/features/user/detail-screen"

export default function Page({ params }: { params: { id: string } }) {
    return <UserDetailScreen id={params.id}/>
}
