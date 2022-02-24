import { GetServerSideProps } from "next"
import { getSession, useSession } from "next-auth/react"
import { UserInfo } from "../components/User/UserInfo"
import { FaPlus } from "react-icons/fa"
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
      <RegisterRecipeButton>
        <FaPlus />
        Register Recipe
      </RegisterRecipeButton>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
}) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}
