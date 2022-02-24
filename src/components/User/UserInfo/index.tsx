import { Container } from "./styles"

interface UserInfoProps {
  avatar: string
  name: string
  email: string
}

export function UserInfo({ avatar, name, email }: UserInfoProps) {
  return (
    <Container>
      <img src={avatar} alt={name} />

      <div className="user-info">
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </Container>
  )
}
