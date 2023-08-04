import { UserDetailScreen } from 'app/features/user/detail-screen'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    return <UserDetailScreen id={router.query.id} />
}
