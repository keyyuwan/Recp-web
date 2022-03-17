import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Router from "next/router"
import Modal from "react-modal"
import { AiOutlineDelete } from "react-icons/ai"
import { Country } from "../../pages/countries"
import { RecipeRelation } from "./RecipeRelation"
import { Container, DeleteIconButton } from "./styles"

interface User {
  id: string
  name: string
  avatar: string
  email: string
}
interface Recipe {
  id: string
  name: string
  image: string
}
interface RecipeCardProps {
  data: Recipe
  countryOwner: Country
  userOwner: User
}

export function RecipeCard({
  data,
  countryOwner,
  userOwner,
}: RecipeCardProps) {
  const { data: session } = useSession()

  useEffect(() => {
    Modal.setAppElement("body")
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    // Modal will only open if user is not authenticated
    if (session) {
      return
    }

    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  function handleRedirectToRecipePage() {
    // If user is not authenticated, he can't have access to the
    // recipe
    if (!session) {
      return
    }

    Router.push(`/recipes/${data.id}`)
  }

  const recipeOwnerIsUserAuth =
    session?.user?.email === userOwner.email

  return (
    <>
      <div onClick={handleRedirectToRecipePage}>
        {/* Modal will only open if user is not authenticated */}
        <Container
          onClick={handleOpenModal}
          recipeOwnerIsUserAuth={recipeOwnerIsUserAuth}
        >
          <img src={data.image} alt={data.name} className="food" />
          <div className="card-info">
            <h2>{data.name}</h2>

            <RecipeRelation
              href={`/countries/${countryOwner.id}`}
              image={countryOwner.image}
              name={countryOwner.name}
              type="country"
            />

            <RecipeRelation
              href={`/user/${userOwner.id}`}
              image={userOwner.avatar}
              name={userOwner.name}
              type="user"
            />
          </div>

          {recipeOwnerIsUserAuth && (
            <DeleteIconButton>
              <AiOutlineDelete size={20} />
            </DeleteIconButton>
          )}
        </Container>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h1>You need to authenticate to access the Recipe</h1>
        <button onClick={handleCloseModal}>OK</button>
      </Modal>
    </>
  )
}
