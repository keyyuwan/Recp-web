import { useSession } from "next-auth/react"
import Link from "next/link"
import { UserInfo } from "../components/User/UserInfo"
import { FaPlus } from "react-icons/fa"
import { withSSRAuth } from "../utils/withSSRAuth"
import { Container, RegisterRecipeButton } from "../styles/profile"

export default function Profile() {
  const { data: session } = useSession()

  return (
    <Container>
      <UserInfo
        avatar={session.user.image}
        name={session.user.name}
        email={session.user.email}
      />

      <Link href="/register">
        <RegisterRecipeButton>
          <FaPlus />
          Register Recipe
        </RegisterRecipeButton>
      </Link>
    </Container>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
